import React, { Component } from 'react';
import {
    Form, Upload, message,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Button,
    AutoComplete,
} from 'antd';
import { connect } from 'react-redux';
import axios from 'axios';

import config from '../../basic/confing';
let { host } = config;

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
function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
        message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
}


class UserData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                nickName: '',
                avatarUrl: '',
                country: '',
                city: '',
                province: '',
                profile: '',
                email: '',
                phone: '',
                password: '',
                openId: ''
            },
            confirmDirty: false,
            autoCompleteResult: [],
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.user)
        axios.post(host + '/api/info', this.state.user).then(res => {
            console.log(res)
        }).catch(error => {
            console.error(error);
        })
        // this.props.form.validateFieldsAndScroll((err, values) => {
        //     if (!err) {
        //         console.log('Received values of form: ', values);
        //     }
        // });
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

    // handleWebsiteChange = value => {
    //     let autoCompleteResult;
    //     if (!value) {
    //         autoCompleteResult = [];
    //     } else {
    //         autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    //     }
    //     this.setState({ autoCompleteResult });
    // }




    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => {
                let user = this.state.user;
                user.avatarUrl = imageUrl;
                this.setState({
                    user,
                    imageUrl,
                    loading: false
                })
            }

            );
        }
    };

    changeInput = (name, e) => {
        console.log(e.target.value);
        let user = this.state.user;
        user[name] = e.target.value;
        this.setState({
            user
        })
    }


    componentDidMount() {
        console.log(this.props)
        let user = this.state.user;
        user.openId = this.props.user.openId;
        this.setState({
            user
        })
    }
    CascaderValue=(e)=>{
        console.log(e)
        let user = this.state.user;
        user.country = e[0];
        user.province = e[1];
        user.city = e[2];
        this.setState({
            user
        })
    }

    render() {

        // 上传头像
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">上传头像</div>
            </div>
        );
        const imageUrl = this.state.imageUrl;


        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
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
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>,
        );

        let { user } = this.state;
        return (
            <div className="user-content">
                <div>
                    <div className="changeInfo"><h3>修改资料</h3></div>
                    <div className="picture-box">

                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            beforeUpload={beforeUpload}
                            onChange={this.handleChange}
                        >
                            {imageUrl ? <img src={imageUrl} alt="avatar" width="100" height="100" /> : uploadButton}
                        </Upload>
                    </div>
                    <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                        <Form.Item label="邮箱">
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
                            })(<Input setfieldsvalue={user.email} onChange={this.changeInput.bind(this, 'email')} />)}
                        </Form.Item>
                        <Form.Item label="密码" hasFeedback>
                            {getFieldDecorator('password', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                    {
                                        validator: this.validateToNextPassword,
                                    },
                                ],
                            })(<Input.Password setfieldsvalue={user.password} onChange={this.changeInput.bind(this, 'password')} />)}
                        </Form.Item>
                        <Form.Item label="重复密码" hasFeedback>
                            {getFieldDecorator('confirm', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please confirm your password!',
                                    },
                                    {
                                        validator: this.compareToFirstPassword,
                                    },
                                ],
                            })(<Input.Password onBlur={this.handleConfirmBlur} />)}
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
                            {getFieldDecorator('nickname', {
                                rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                            })(<Input setfieldsvalue={user.nickName} onChange={this.changeInput.bind(this, 'nickName')} />)}
                        </Form.Item>
                        <Form.Item label="居住地址">
                            {getFieldDecorator('residence', {
                                initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                                rules: [
                                    { type: 'array', required: true, message: 'Please select your habitual residence!' },
                                ],
                            })(<Cascader options={residences} onChange={this.CascaderValue}/>)}
                        </Form.Item>
                        <Form.Item label="电话号码">
                            {getFieldDecorator('phone', {
                                rules: [{ required: true, message: 'Please input your phone number!' }],
                            })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} setfieldsvalue={user.phone} onChange={this.changeInput.bind(this, 'phone')} />)}
                        </Form.Item>
                        <Form.Item label="简介">
                                    <Input setfieldsvalue={user.profile} onChange={this.changeInput.bind(this, 'profile')} />
                            
                        </Form.Item>


                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit" style={{ marginLeft: '20%' }}>
                                确认修改
          </Button>
                        </Form.Item>
                    </Form>
                </div>

            </div>
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
        LoginOut: () => dispatch({ type: 'loginOut' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create({ name: 'register' })(UserData));