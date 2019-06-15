import React, { Component } from 'react';
import { Row, Col, Input, Modal, Button, Form, Icon, Tooltip } from 'antd';
import { connect } from 'react-redux'
import '../static/css/app.css'
import Router from 'next/router'
import Axios from 'axios';
import HOST from '../config/host'

const host = HOST.host;
class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: {
                bottom: 20,
                size: 16
            },
            password: {
                bottom: 20,
                size: 16
            },
            user: {
                username: '',
                password: ''
            },
            register: {
                email: '',
                username: '',
                password: ''
            },
            visible: false,
            confirmLoading: false,
            same: false,
            tip: '密码为空或不一致'
        };
    }
    focusInput = (e) => {
        if (e === 0) {
            this.setState({
                name: {
                    bottom: 50,
                    size: 12
                }
            })
        } else {

            this.setState({
                password: {
                    bottom: 50,
                    size: 12
                }
            })
        }
    }
    blurInput = (e) => {
        let { user } = this.state;
        if (e === 0 && user.username === '') {

            this.setState({
                name: {
                    bottom: 20,
                    size: 16
                }
            })
        } else if (user.password === '') {

            this.setState({
                password: {
                    bottom: 20,
                    size: 16
                }
            })
        }
    }

    changeInput = (name, e) => {
        console.log(name, e.target.value);
        let { user } = this.state;
        user[name] = e.target.value;
        this.setState({
            user
        })
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        this.setState({
            ModalText: 'The modal will be closed after two seconds',
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 2000);
    };

    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    };

    regHeader() {
        return (
            <div>
                <h2>注册</h2>
                <p>
                    创建一个账号去加入我们
                </p>
            </div>
        )
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                let { email, username, password, check_password } = values;
                if (password === check_password) {
                    Axios.post(host + '/public/register', { email, username, password }).then(response => {
                        console.log(response);

                        this.setState({
                            visible: false,
                        });
                        if (response.data.code == 200) {
                            this.props.NoticeSussess(response.data.message)
                        } else {
                            this.props.NoticeWarning(response.data.message)
                        }
                    }).catch(error => {
                        console.error(error)
                    })
                }
            }
        });
    };
    checkPassword = e => {
        let check = false;
        if (this.state.register.password.length < 6) {
            return this.setState({
                same: check,
                tip: '密码不能少于六位数'
            })
        }
        if (this.state.register.password == e.target.value) {
            check = true;
        } else {
            check = false;
        }
        this.setState({
            same: check,
            tip: '密码为空或不一致'
        })
    }

    onchangRegister = (name, e) => {
        let { register } = this.state;
        register[name] = e.target.value;
        this.setState({
            register
        })
    }
    loginSubmit = e => {
        let { user } = this.state;
        if (user.username !== '' && user.password !== '') {
            Axios.post(host + '/login', user).then((res) => {
                this.props.ToggleLogin(res.data.user);
                localStorage.setItem('token', res.data.token);
                this.setState({
                    user: {
                        username: '',
                        password: ''
                    }
                })
                Router.back(-1)
            }).catch((err) => {
                this.props.NoticeError('账号或或密码错误')
                console.log(err)
            })
        }
    }
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const { visible, register } = this.state;
        return (
            <Row type="flex" justify="center" align="middle" className="login">
                <Col xs={20} sm={16} md={14} lg={12} xl={7} style={{ maxWidth: '400px' }}>

                    <div className="login-box">
                        <div className="login-input">
                            <div className="login-logo">
                                <h2>LOGIN</h2>
                            </div>
                            <div className="input-box">
                                <label className="name-label">账号</label>
                                <Input allowClear value={this.state.user.username} onFocus={this.focusInput.bind(this, 0)} onBlur={this.blurInput.bind(this, 0)} onChange={this.changeInput.bind(this, 'username')} />
                            </div>
                            <div className="input-box">
                                <label className="pwd-label" >密码</label>
                                <Input.Password onPressEnter={this.loginSubmit} value={this.state.user.password} onFocus={this.focusInput.bind(this, 1)} onBlur={this.blurInput.bind(this, 1)} onChange={this.changeInput.bind(this, 'password')} />
                            </div>
                            <a href="#" className="forget-pwd">忘记密码？</a>
                        </div>
                        <div className="login-btn">
                            <button className="logon-btns" onClick={this.showModal}>
                                注册
                            </button>
                            <button className="login-btns" onClick={this.loginSubmit}>
                                登录
                            </button>
                        </div>
                    </div>
                    <Modal
                        title={<this.regHeader />}
                        visible={visible}
                        footer={null}
                        width={"400px"}
                        onCancel={this.handleCancel}
                    >
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                {getFieldDecorator('email', {
                                    rules: [{ required: true, message: '请输入您的邮箱' }],
                                })(
                                    <Input
                                        type="email"
                                        prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        onChange={this.onchangRegister.bind(this, 'email')}
                                        placeholder="email"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: '请输入您的用户名' }],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        onChange={this.onchangRegister.bind(this, 'username')}
                                        placeholder="Username"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入您的密码' }],
                                })(
                                    <Input.Password placeholder="password" onChange={this.onchangRegister.bind(this, 'password')} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('check_password', {
                                    rules: [{ required: true, message: '请再次输入您的密码' }],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        onChange={this.checkPassword}
                                        placeholder="Password"
                                        suffix={

                                            this.state.same ? '' : <Tooltip title={this.state.tip}><Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} /></Tooltip>

                                        }
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item style={{ textAlign: "center" }}>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    注册
                                </Button>
                            </Form.Item>
                        </Form>
                    </Modal>
                </Col>
                <style jsx>
                    {
                        `
                        .input-box .name-label{
                            position: absolute;
                            bottom: ${this.state.name.bottom}px;
                            left: 10px;
                            z-index: 10;
                            font-size: ${this.state.name.size}px;
                        }
                        .input-box .pwd-label{
                            position: absolute;
                            bottom: ${this.state.password.bottom}px;
                            left: 10px;
                            z-index: 10;
                            font-size: ${this.state.password.size}px;
                        }
                        `
                    }
                </style>
            </Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(Form.create({ name: 'normal_login' })(login));