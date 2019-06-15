import React, { Component } from 'react';
import {
    Row, Col, Tag, List, Menu, Avatar, Upload, Icon, message, Button, Card
} from 'antd'
import Layout from '../../components/Layout'
import { connect } from 'react-redux'
import User from '../../components/home/user/user'
import { withRouter } from 'next/router'
import moment from 'moment';

import Axios from 'axios';
import HOST from '../../config/host'

const { SubMenu } = Menu;
const host = HOST.host;

class user extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                label: [],
                title: 'koa2 常用获取get、post值的方法 以及 Axios请求'
            }, {
                label: [],
                title: 'koa2 常用获取get、post值的方法 以及 Axios请求'
            }]
        };
    }
    componentDidMount() {
        this.getTweetList()
        
    }
    getTweetList(){
        Axios.get(host + '/api/mine').then(res => {
            console.log(res)
            this.setState({
                data: res.data
            })
        })
    }
    deleteTweet = (_id)=>{
        console.log(_id)
        Axios.get(host+'/api/deltweet?id='+_id).then(res=>{
            console.log(res)
            this.getTweetList()
        })
    }
    render() {
        return (
            <User nav='2'>
                <div className="mine_tweet">
                    <List
                        itemLayout="vertical"
                        dataSource={this.state.data}
                        renderItem={item => (
                            <List.Item
                                key={item.title}
                                actions={[<a href={"/edit?id="+item._id} target="_blank">修改</a>,<a onClick={this.deleteTweet.bind(this, item._id)}>删除</a>]}
                            >
                                <List.Item.Meta
                                    title={<a href={'/content?id=' + item._id} style={{ fontSize: '18px' }}>{item.title}</a>}
                                    description={<div style={{ fontSize: '12px' }}>{
                                        item.label.map((value, i) => {
                                            return <Tag key={i}>{value}</Tag>
                                        })
                                    }   {moment(item.creatime).format('YYYY-MM-DD hh:mm:ss')}</div>}
                                />
                            </List.Item>
                        )}
                    />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(user));
