import React, { Component } from 'react';
import nojs from '../../assets/img/nojs.png';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Row, Col, Input, Icon, Button, Menu, Dropdown, Modal, Checkbox, Form, Drawer,message } from 'antd';
import axios from 'axios';

import config from '../../basic/confing';
let { host } = config;


const Search = Input.Search;


const success = (text) => {
  message.success(text);
};

const error = (text) => {
  message.error(text);
};

const warning = (text) => {
  message.warning(text);
};

class HomeHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            drawer: false,
            register: false,
            confirmLoading: false,
            isLogining: false,
            checkedPwd: false,
            searchlist: [],
            user: {},
            login: {
                username: '',
                password: ''
            },
            nav: [{
                name: '',
                link: '/'
            }],
            userMenu: [{
                name: '个人中心',
                out: false,
                link: '/index/user'
            }, {
                name: '登出',
                out: true,
                link: '/'
            }]
        };
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    showRegister = () => {
        this.setState({
            register: true,
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
    reghandleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            register: false,
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        let login = this.state.login;

        axios.post(host + '/login', login).then((res) => {
            console.log(res);
            
            localStorage.setItem('token', res.data.token);
            this.props.ToggleLogin(res.data.user);
            this.setState({
                user: res.data.user,
                isLogining: true,
                visible: false
            });
        }).catch((err) => {
            console.log(err)
        })
    };

    handleLoginout = e => {
        this.props.LoginOut();
        localStorage.removeItem('token');
        this.setState({
            user: {},
            isLogining: false,
            visible: true
        });
    }
    bindInputChange = (name, e) => {
        let login = this.state.login;
        login[name] = e.target.value;
        this.setState({ login })
    }
    remberPwd = (e) => {
        console.log(e.target.checked)
        if (e.target.checked === true) {
            this.setState({
                checkedPwd: true
            })
        }
    }
    searchList = (e) => {
        if(e === ''){
            error('关键词不能为空')
            return ;
        }
        axios.get(host+'/public/search',{
            params: {
                keyword: e
            }
          }).then(res=>{
              console.log(res);
              this.setState({
                searchlist: res.data
              })
          }).catch(error=>{
              console.error(error);
          })
    }
    onClose = () => {
        this.setState({
            drawer: false,
        });
    };
    showDrawer = () => {
        this.setState({
            drawer: true,
        });
    };
    componentDidMount() {
        if (this.props.auth !== false) {
            this.setState({
                user: this.props.user,
                isLogining: true,
            })
        }
    }
    render() {
        const { register, visible, confirmLoading, login, user } = this.state;
        return (
            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={24} lg={20} xl={16}>
                    <div id="HomeHeader">
                        <div className="HeadLeft">
                            <Link to="/"><img src={nojs} alt="logo" className="logo" /></Link>
                            <ul>
                                {
                                    this.state.nav.map((value, key) => {
                                        return (
                                            <li key={key}><Link to={value.link}>{value.name}</Link></li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="HeadRight">
                            {/* <Search
                                placeholder="搜索更多内容"
                                onSearch={this.searchList}
                                style={{ width: 200 }}
                            /> */}
                            <Button shape="circle" icon="search" onClick={this.showDrawer} />
                            <Button><Link to="/edit" >写文章</Link></Button>
                            <Button type="link" className="NoLogin" onClick={this.showModal} style={this.state.isLogining ? { display: 'none' } : { display: 'block' }}>
                                登录</Button>
                            <Modal
                                footer={null}
                                centered
                                width={400}
                                visible={visible}
                                confirmLoading={confirmLoading}
                                onCancel={this.handleCancel}
                            >
                                <div id="loginModel">
                                    <h2>用户登录</h2>
                                    <Form onSubmit={this.handleSubmit} className="login-form">
                                        <Form.Item>
                                            {(
                                                <Input
                                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                    placeholder="用户名"
                                                    value={login.username}
                                                    onChange={this.bindInputChange.bind(this, 'username')}
                                                />
                                            )}
                                        </Form.Item>
                                        <Form.Item>
                                            {(
                                                <Input
                                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                    type="password"
                                                    value={login.password}
                                                    onChange={this.bindInputChange.bind(this, 'password')}
                                                    placeholder="密码"
                                                />
                                            )}
                                        </Form.Item>
                                        <Form.Item>
                                            {(<Checkbox onChange={this.remberPwd}>记住密码</Checkbox>)}
                                            <a className="login-form-forgot" href="/">
                                                忘记密码?
                                </a>
                                            <Button type="primary" htmlType="submit" className="login-form-button">
                                                登录
                                </Button>
                                            或 <a href="#">注册！</a>
                                        </Form.Item>
                                    </Form>
                                </div>
                            </Modal>
                            <Button type="link" className="NoLogin" onClick={this.showRegister} style={this.state.isLogining ? { display: 'none' } : { display: 'block' }}>
                                注册
                            </Button>
                            <Modal
                                footer={null}
                                centered
                                width={400}
                                visible={register}
                                confirmLoading={confirmLoading}
                                onCancel={this.reghandleCancel}
                            >
                                <div id="loginModel">
                                    <h2>用户注册</h2>
                                    <Form onSubmit={this.handleSubmit} className="login-form">
                                        <Form.Item>
                                            {(
                                                <Input
                                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                    type="password"
                                                    placeholder="邮箱"
                                                />
                                            )}
                                        </Form.Item>
                                        <Form.Item>
                                            {(
                                                <Input
                                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                    placeholder="用户名"
                                                />
                                            )}
                                        </Form.Item>
                                        <Form.Item>
                                            {(
                                                <Input
                                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                    type="password"
                                                    placeholder="密码"
                                                />
                                            )}
                                        </Form.Item>
                                        <Form.Item>

                                            <Button type="primary" htmlType="submit" className="login-form-button">
                                                注册
                                </Button>
                                            已有账号？ <a href="#">登录</a>
                                        </Form.Item>
                                    </Form>
                                </div>
                            </Modal>
                            <Dropdown overlay={
                                (
                                    <Menu>
                                        {
                                            this.state.userMenu.map((value, key) => {
                                                if (value.out) {
                                                    return (<Menu.Item key={key}>
                                                        <Button type="link" onClick={this.handleLoginout}>{value.name}</Button>
                                                    </Menu.Item>)
                                                } else {
                                                    return (<Menu.Item key={key}>
                                                        <a target="_blank" rel="noopener noreferrer" href={value.link}>
                                                            {value.name}
                                                        </a>
                                                    </Menu.Item>)
                                                }


                                            })
                                        }

                                        {/* <Menu.Divider /> 分割线*/}
                                    </Menu>
                                )
                            }>
                                <a className="ant-dropdown-link" href="#" style={this.state.isLogining ? { display: 'block' } : { display: 'none' }}>
                                    <img className="HeadImage" src={user.avatarUrl} alt={user.nickName} />

                                </a>
                            </Dropdown>
                            <Drawer
                                title={<Search
                                    placeholder="搜索更多内容"
                                    onSearch={this.searchList}
                                    style={{ width: 200 }}
                                />}
                                placement="bottom"
                                closable={false}
                                onClose={this.onClose}
                                visible={this.state.drawer}
                            >
                                {
                                    this.state.searchlist.map((value, i)=>{
                                        return (<p key={i}><a href={'/content/'+value._id} target="_blank" rel="noopener noreferrer">{value.title}</a></p>)
                                    })
                                }
                            </Drawer>
                        </div>
                    </div>
                </Col>
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
        LoginOut: () => dispatch({ type: 'loginOut' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);