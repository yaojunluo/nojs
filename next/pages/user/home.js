import React, { Component } from 'react';
import {
    Row, Col, Tag, List, Avatar, Icon
} from 'antd'
import Layout from '../../components/Layout'
import { connect } from 'react-redux'
import Content from '../../components/home/content'
import { withRouter } from 'next/router'

import Axios from 'axios';
import HOST from '../../config/host'

const host = HOST.host;
const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);

class home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author:[],
            comments:[],
            attention: false,
            data: [
                {
                    label: [],
                    nav: [],
                    title: '',
                }
            ]
        };
    }
    componentDidMount() {
        console.log(this.props.router.query.id)
        Axios.get(host + '/public/list?openId='+this.props.router.query.id).then((res) => {
            console.log(res)
            this.setState({
                data: res.data.tweet,
                author: res.data.author,
                comments: res.data.comments
            })
            if (this.props.auth) {
                
                let { user } = this.props;
                let { author } = this.state;
                let params = {
                    activeid: user.openId,
                    passiveid: author.openId
                }
                Axios.get(host + '/api/follow', {
                    params
                }).then(msg => {
                    console.log(msg.data);
                    this.setState({
                        attention: msg.data.follow
                    })
                }).catch(error => {
                    console.error(error)
                })
            }
            this.props.NoticeSussess('加载成功')
        }).catch((err) => {
            this.props.NoticeError('服务器错误')
        })
    }
    followTa=()=>{
        if (this.props.auth) {
                
            let { user } = this.props;
            let { author, attention } = this.state;
            let params = {
                activeid: user.openId,
                passiveid: author.openId
            }
            Axios.post(host + '/api/follow', params).then(msg => {
                console.log(msg.data);
                this.setState({
                    attention: !attention
                })
            }).catch(error => {
                console.error(error)
            })
        }
    }
    render() {
        return (
            <Layout>
                <div className="vistor_info">
                    <img src={this.state.author.cover} />
                    <Row type="flex" justify="center" align="middle" className="info_row">

                        <Col xs={24} sm={24} md={20} lg={18} xl={16} className="info_col">
                            <img src={this.state.author.avatarUrl} />
                            <div className="info_col_name">
                                <h2>{this.state.author.nickName} <span onClick={this.followTa}>{this.state.attention?<Tag>已关注</Tag>:<Tag>+关注</Tag>}</span></h2>
                                <p>{this.state.author.profile}</p>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Row type="flex" justify="center" align="middle" style={{
                    boxSizing: 'border-box',
                    padding: '20px',
                    marginTop: '30px'
                }}>
                    <Col xs={24} sm={24} md={20} lg={18} xl={16}>
                        <Row className="blogPost">
                            <Col sm={24} md={24} lg={15} xl={16} style={{ backgroundColor: '#ffffff', marginBottom: '20px' }}>
                                <List
                                    itemLayout="vertical"
                                    dataSource={this.state.data}
                                    // footer={
                                    //     <div>
                                    //         <b>ant design</b> footer part
                                    //     </div>
                                    // }
                                    renderItem={item => (
                                        <List.Item
                                            key={item.title}
                                            actions={[item.label.map((value, i) => {
                                                return (
                                                    <Tag key={i}>{value}</Tag>
                                                )
                                            })]}
                                        >
                                            <List.Item.Meta
                                                title={<a href={'/content?id=' + item._id} style={{ fontSize: '18px' }}>{item.title}</a>}
                                                description={<p style={{ fontSize: '12px' }}>前端 React   2019-6-9 14:00:31</p>}
                                            />
                                            {/* {sortTweet(item.text)} */}
                                            {
                                                item.nav.map((value, i) => {
                                                    if (i !== 0)
                                                        return ' / ' + value.title;
                                                    else
                                                        return value.title;
                                                })
                                            }

                                            {/* <div dangerouslySetInnerHTML={{ __html: item.text }} /> */}
                                        </List.Item>
                                    )}
                                />
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={8} xl={7} style={{ backgroundColor: '#ffffff', border: '1px solid rgba(0, 0, 0, 0.08)', marginLeft: '15px' }}>
                                <List
                                    header={<div>最新评论</div>}
                                    itemLayout="horizontal"
                                    dataSource={this.state.comments}
                                    renderItem={item => (
                                        <List.Item>
                                            <List.Item.Meta
                                                avatar={<Avatar src={item.avatar} />}
                                                title={<a href={'/content?id=' + item.tweet}>{item.author}</a>}
                                                description={item.content}
                                            />
                                        </List.Item>
                                    )}
                                />
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Layout>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(home));
