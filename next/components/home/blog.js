import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col, List, Avatar, Icon, Affix, Tag } from 'antd';

import Axios from 'axios';
import HOST from '../../config/host'

const host = HOST.host;

const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);

function sortTweet(value) {
    console.log(value.indexOf('<p>'), value.indexOf('</p>'))
    let data = value.substring(value.indexOf('<p>') + 3, value.indexOf('</p>'))
    return data.substring(0, 40) + '...'
}


class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [   
            ],
            recommend: [],
            mine: [],
            top: 10,
        };
    }

    componentDidMount() {
        console.log(this.props)
        Axios.get(host + '/public/new').then((res) => {
            this.setState({
                data: res.data
            })
            this.props.NoticeSussess('加载成功')
        }).catch((err) => {
            this.props.NoticeError('服务器错误')
        })
        Axios.get(host + '/public/recommend').then((res) => {
            this.setState({
                recommend: res.data
            })
        }).catch((err) => {
            this.props.NoticeError('服务器错误')
        })
    }

    render() {
        return (
            <Row gutter={20} className="blog">
                <Col sm={24} md={24} lg={16} xl={17} style={{ backgroundColor: '#ffffff', marginBottom: '20px' }}>
                    <List
                        itemLayout="vertical"
                        dataSource={this.state.data}
                        header={<div className="header_list">
                            <a>最新</a>|
                            <a type="link">热门</a>

                        </div>}
                        // footer={
                        //     <div>
                        //         <b>ant design</b> footer part
                        //     </div>
                        // }
                        renderItem={item => (
                            <List.Item
                                key={item.title}
                                actions={[
                                    <IconText type="star-o" text={item.collect} />,
                                    <IconText type="like-o" text={item.awesime} />,
                                    <IconText type="message" text={item.comment} />,
                                ]}
                                extra={
                                    item.coverImg ?
                                        <img
                                            width={272}
                                            alt="logo"
                                            src={item.coverImg}
                                        /> : ''
                                }
                            >
                                <List.Item.Meta
                                    title={<a href={'/content?id=' + item._id} style={{ fontSize: '18px' }}>{item.title}</a>}
                                    description={<p style={{ fontSize: '12px' }}>前端 React   2019-6-9 14:00:31</p>}
                                />
                                {/* {sortTweet(item.text)} */}
                                {
                                    item.nav.map((value, i) => {
                                        if(i !== 0)
                                        return ' / '+value.title;
                                        else
                                        return value.title;
                                    })
                                }

                                {/* <div dangerouslySetInnerHTML={{ __html: sortTweet(item.text) }} /> */}
                            </List.Item>
                        )}
                    />
                </Col>
                <Col xs={24} sm={24} md={24} lg={8} xl={7}>
                    <div className="zshadow">
                        <List
                            header={<div>推荐博主</div>}
                            size="small"
                            dataSource={this.state.recommend}
                            renderItem={item => <List.Item>
                                <List.Item.Meta

                                    avatar={
                                        <Avatar src={item.avatarUrl} />
                                    }
                                    title={<a href="https://ant.design">{item.nickName}</a>}
                                    description={<p style={{ fontSize: '12px' }}>{item.profile}</p>}
                                />
                            </List.Item>}
                        />
                    </div>
                    <Affix offsetTop={this.state.top} style={this.state.mine?{display:'none'}:''}>
                        <div className="zshadow">
                            <List
                                header={<div>我的博客</div>}
                                size="small"
                                dataSource={this.state.mine}
                                renderItem={item => <List.Item>
                                    <List.Item.Meta

                                        title={<a href="https://ant.design">{item.title}</a>}
                                    />
                                    <div style={{ fontSize: '12px' }}>
                                        {
                                            item.label.map((value, i) => {
                                                if (i === 0 || i === 1) {
                                                    return (
                                                        <Tag color="blue" key={i}>{value}</Tag>
                                                    )

                                                } else {
                                                    return '';
                                                }

                                            })
                                        }
                                    </div>
                                </List.Item>}

                            />
                        </div>
                    </Affix>
                </Col>
            </Row >
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

export default connect(mapStateToProps, mapDispatchToProps)(Blog);