import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col, List, Avatar, Icon, Button } from 'antd';

import '../../static/css/app.css'
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
    let data = value.substring(value.indexOf('<p>')+3, value.indexOf('</p>'))
    return data.substring(0, 60) + '...'
}


class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount(){
        Axios.get(host+'/public/new').then((res)=>{
            console.log(res)
            this.setState({
                data: res.data
            })
            this.props.NoticeSussess('加载成功')
        }).catch((err)=>{
            this.props.NoticeError('服务器错误')
        })
    }

    render() {
        return (
            <Row gutter={15} className="blog">
                <Col sm={24} md={24} lg={16} xl={20}>
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
                                    <img
                                        width={272}
                                        alt="logo"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                    />
                                }
                            >
                                <List.Item.Meta
                                    title={<a href={'/content/'+item._id} style={{ fontSize: '24px' }}>{item.title}</a>}
                                    description={'前端 React' + '  2019-6-9 14:00:31'}
                                />
                                    {/* {sortTweet(item.text)} */}
                                    
                                        
                                    <div dangerouslySetInnerHTML={{ __html: sortTweet(item.text) }}  />  
                            </List.Item>
                        )}
                    />
                </Col>
                <Col xs={24} sm={24} md={24} lg={8} xl={4}>
                    Col
                </Col>
                <style jsx>
                {
                    `
                    
                    `
                }
                </style>
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