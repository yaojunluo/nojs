import React, { Component } from 'react';
import { Button, Menu, Dropdown, Icon, Drawer, Input } from 'antd';
import Router from 'next/router'

import { connect } from 'react-redux'
import '../../static/css/app.css'
import Axios from 'axios';


import HOST from '../../config/host'
const host = HOST.host;
let { Search } = Input;

const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item key="1">
            <a href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3" >退出登录</Menu.Item>
    </Menu>
);


class Navinfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: false,
            drawer: false,
            searchlist: [],
            avatarUrl:''
        };
    }

    componentDidMount() {
        console.log(this.props)
        if (this.props.auth) {
            this.setState({
                login: true,
                avatarUrl: this.props.user.avatarUrl
            })
        }
    }

    LinkPages = (href) => {

        Router.push(href)
    }

    onClose = (e) => {
        this.setState({
            drawer: false
        })
    }

    showDrawer = (e) => {
        this.setState({
            drawer: true
        })
    }

    writeTweets = ()=>{
        Router.push('/write')
    }
    searchList = (e) => {
        console.log(e)
        Axios.get(host + '/public/search', {
            params: {
                keyword: e
            }
        })
            .then((response)=> {
                console.log(response);
                this.setState({
                    searchlist: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    loginout = e => {
        this.props.LoginOut()
        this.setState({
            login: false
        })

    }
    render() {
        let { login } = this.state;
        return (
            <div className="navinfo">
                <Button shape="circle" icon="search" onClick={this.showDrawer} />
                <Button><a href="/write" target="_blank">写推文</a></Button>
                {
                    login ? (<Dropdown overlay={(
                        <Menu>
                            <Menu.Item key="0">
                                <a href="/user/homepage">用户主页</a>
                            </Menu.Item>
                            <Menu.Item key="1">
                                <a href="/user/info">资料修改</a>
                            </Menu.Item>
                            <Menu.Divider />
                            <Menu.Item key="3" onClick={this.loginout}>退出登录</Menu.Item>
                        </Menu>
                    )} trigger={['click']}>

                        <img src={this.state.avatarUrl} className="avater" style={{borderRadius:'50%'}}/>
                    </Dropdown>) : <div className="unlogin">
                            <Button type="link" size={"small"} onClick={this.LinkPages.bind(this, '/login')}>
                                登录
                    </Button>
                            <Button type="link" size={"small"} onClick={this.LinkPages.bind(this, '/login')}>
                                注册
                    </Button>
                        </div>
                }

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
                        this.state.searchlist.map((value, i) => {
                            return (<p key={i}><a href={'/content/' + value._id} target="_blank" rel="noopener noreferrer">{value.title}</a></p>)
                        })
                    }
                </Drawer>
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

export default connect(mapStateToProps, mapDispatchToProps)(Navinfo);