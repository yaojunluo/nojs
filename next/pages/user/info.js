import React, { Component } from 'react';
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
} from 'antd'
import Layout from '../../components/Layout'
import { connect } from 'react-redux'
import User from '../../components/home/user/user'
import { withRouter } from 'next/router'

import Axios from 'axios';
import HOST from '../../config/host'

const host = HOST.host;

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const residences = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                    },
                ],
            },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
];


class user extends Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
        pwd:{
            oldpwd:'',
            password:''
        },
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                Axios.post(host+'/api/updatainfo',{
                    openId: this.props.user.openId,
                    email: values.email,
                    address: values.address,
                    nickName: values.nickName,
                    phone: values.phone,
                    profile: values.profile
                }).then(res=>{
                    console.log(res)
                })
            }
        });
    };

    handleConfirmBlur = e => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };

    handleWebsiteChange = value => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({ autoCompleteResult });
    };
    componentDidMount() {
        console.log(this.props)
        Axios.post(host + '/api/info', { openId: this.props.user.openId }).then(res => {
            console.log(res)
            this.props.form.setFieldsValue({
                email: res.data.email,
                address: res.data.address,
                nickName: res.data.nickName,
                phone: res.data.phone,
                profile: res.data.profile
            })
        })
    }
    updatePwd=(e)=>{
        e.preventDefault();
        console.log(this.state.pwd)
        Axios.post(host+'/api/udpwd',this.state.pwd).then(res=>{
            this.setState({
                pwd:{}
            })
        })
    }
    changePwd=(name,e)=>{
        console.log(e.target.value)
        let pwd = this.state.pwd;
        pwd.openId = this.props.user.openId;
        pwd[name] = e.target.value;
        this.setState({
            pwd
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 5 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 18 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        // const prefixSelector = getFieldDecorator('prefix', {
        //     initialValue: '86',
        // })(
        //     <Select style={{ width: 70 }}>
        //         <Option value="86">+86</Option>
        //         <Option value="87">+87</Option>
        //     </Select>,
        // );

        const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));

        return (
            <User nav='1'>
                <div className="user_info">
                    <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                        <Form.Item label="E-mail">
                            {getFieldDecorator('email', {
                                rules: [
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                    },
                                ],
                            })(<Input />)}
                        </Form.Item>

                        <Form.Item
                            label={
                                <span>
                                    呢称&nbsp;
              <Tooltip title="What do you want others to call you?">
                                        <Icon type="question-circle-o" />
                                    </Tooltip>
                                </span>
                            }
                        >
                            {getFieldDecorator('nickName', {
                                rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="地址">
                            {getFieldDecorator('address', {
                                rules: [{ required: true, message: 'Please input your address!' }],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="手机号码">
                            {/* {getFieldDecorator('phone', {
                                rules: [{ required: true, message: 'Please input your phone number!' }],
                            })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)} */}
                            {getFieldDecorator('phone', {
                                rules: [{ required: true, message: 'Please input your phone number!' }],
                            })(<Input  style={{ width: '100%' }} />)}
                        </Form.Item>
                        <Form.Item label="签名">
                            {getFieldDecorator('profile', {
                                rules: [{ required: true, message: 'Please input website!' }],
                            })(
                                // <AutoComplete
                                //     dataSource={websiteOptions}
                                //     onChange={this.handleWebsiteChange}
                                // >
                                    <Input />
                                // </AutoComplete>,
                            )}
                        </Form.Item>

                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit">
                                提交修改
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                <div className="info_password">
                    <Form layout="inline" onSubmit={this.updatePwd}>
                        <Form.Item>
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                value={this.state.pwd.oldpwd}
                                onChange={this.changePwd.bind(this, 'oldpwd')}
                                placeholder="旧密码"
                            />
                        </Form.Item>
                        <Form.Item >

                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                value={this.state.pwd.password}
                                onChange={this.changePwd.bind(this, 'password')}
                                placeholder="新密码"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                修改
                                </Button>
                        </Form.Item>
                    </Form>

                </div>
            </User>
        );
    }
}
function mapStateToProps(state) {
    return state
}
//需要触发什么行为
function mapDispatchToProps(dispatch) {
    return {
        ToggleLogin: (user) => dispatch({ type: 'toggleAuth', user }),
        LoginOut: () => dispatch({ type: 'loginOut' }),
        NoticeSussess: (value) => dispatch({ type: 'success', value }),
        NoticeError: (value) => dispatch({ type: 'error', value }),
        NoticeWarning: (value) => dispatch({ type: 'warning', value }),
    }
}

export default Form.create({ name: 'info' })(connect(mapStateToProps, mapDispatchToProps)(user));
