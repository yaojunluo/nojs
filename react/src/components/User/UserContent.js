import React, { Component } from 'react';
import { List } from 'antd';
import { connect } from 'react-redux';
import axios from 'axios';

import config from '../../basic/confing';
let { host } = config;


class UserContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        console.log(this.props)
        axios.get(host + '/api/dynamic', {
            params: {
                openId: this.props.user.openId
            }
        }).then((res) => {
            console.log(res.data)
            this.setState({
                list: res.data
            })
        }).catch(error => {
            console.error(error)
        })
    }

    renderList = (item) => {
        console.log(item)
        let str = '';
        switch (item.genre) {
            case 1:
                str += item.activename + '给' + item.passivename + '的文章点赞';
                break;
            case 2:
                str += item.activename + '收藏了' + item.passivename + '的文章';
                break;
            case 3:
                str += item.activename + '关注了' + item.passivename;
                break;
            default: ;
        }
        return (<List.Item>{str}</List.Item>)
    }

    render() {
        return (
            <div className="user-content">
                <div>
                    <h3>我的动态</h3>
                    <List
                        size="large"
                        dataSource={this.state.list}
                        renderItem={this.renderList}
                    />
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

export default connect(mapStateToProps, mapDispatchToProps)(UserContent);