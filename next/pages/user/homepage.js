import React, { Component } from 'react';
import {
    Row, Col, Tag, List, Menu, Empty, Upload, Icon, message, Button, Card
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
            data: [],
            userdata: []
        };
    }
    test = e => {
        Axios.get(host + '/api/mine').then(res => {
            console.log(res)
            this.setState({
                data: res.data
            })
        })
    }
    componentDidMount() {
        Axios.post(host + '/api/info', { openId: this.props.user.openId }).then(res => {
            console.log(res)
            this.setState({
                userdata: res.data
            })
        })
        Axios.get(host + '/api/mine').then(res => {
            console.log(res)
            this.setState({
                data: res.data
            })
        })
    }
    render() {
        let { userdata } = this.state;
        return (
            <User nav='0'>
                <div className="user_index">
                    <Card title="我的资料">
                        <div>
                            <p onClick={this.test}>{userdata.email}</p>
                            <p>{userdata.phone}</p>
                            <p>{userdata.address}</p>
                            <p>{userdata.profile}</p>

                        </div>
                    </Card>

                    <Card title="我的动态">
                        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                        {/* <p>
                            <a href="#">admin</a>点赞了<a href="#">Things will develop in the opposite</a>
                        </p>
                        <p>
                            <a href="#">admin</a>点赞了<a href="#">Things will develop in the opposite</a>
                        </p> */}
                    </Card>
                    <Card title="我的博文">
                        <List
                            itemLayout="vertical"
                            dataSource={this.state.data}
                            renderItem={item => (
                                <List.Item
                                    key={item.title}
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
                    </Card>
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
