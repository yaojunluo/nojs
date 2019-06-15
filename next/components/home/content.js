import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col, Affix, Badge, Icon, Button, Anchor, Tag, Card, Tooltip } from 'antd';
import ArticleComment from './content/ArticleComment'

import Axios from 'axios';
import HOST from '../../config/host'
import Item from 'antd/lib/list/Item';

const host = HOST.host;
const { Meta } = Card;
const { Link } = Anchor;

const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} theme="filled" style={{ marginRight: 8 }} />
        {text}
    </span>
);

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            recommend: [],
            mine: [],
            nav: [],
            follow: true,
            top: 10,
            author: {},
            interactive:{
                approval: false,
                collect: false
            }
        };
    }

    componentDidMount() {
        console.log(this.props._id)
        Axios.get(host + '/public/tweet?_id=' + this.props._id).then((res) => {
            console.log(res.data)
            this.setState({
                data: res.data,
                nav: res.data.nav
            })
            
            if (this.props.auth) {
                
                let { user, tweet } = this.props;
                let params = {
                    interactive: tweet,
                    activeid: user.openId,
                    passiveid: res.data.openId,
                    activename: user.nickName,
                    passivename: res.data.author,
                }
                Axios.get(host + '/api/interactive', {
                    params
                }).then(msg => {
                    console.log(msg.data);
                    this.setState({
                        interactive: msg.data
                    })
                }).catch(error => {
                    console.error(error)
                })

                let follow = {
                    activeid: user.openId,
                    passiveid: res.data.openId
                }
                Axios.get(host + '/api/follow', {
                    params:follow
                }).then(msg => {
                    console.log(msg.data);
                    this.setState({
                        follow: msg.data.follow
                    })
                }).catch(error => {
                    console.error(error)
                })
            }
            Axios.get(host + '/public/author?openId=' + res.data.openId).then((response) => {
                console.log('author',response)
                this.setState({
                    author: response.data
                })
            })
            this.props.NoticeSussess('加载成功')
        }).catch((err) => {
            this.props.NoticeError('服务器错误')
        })
    }
    interactive = (num) => {
        if (this.props.auth) {
            let { collect,approval } = this.state.interactive;
            let { data, follow } = this.state;
            let { user, content, tweet } = this.props;
            let datas = {
                interactive: tweet,
                genre: num,
                activeid: user.openId,
                passiveid: data.openId,
                activename: user.nickName,
                passivename: data.author,
            }
            switch (num) {
                case 1:
                  approval = !approval;
                  break;
                case 2:
                  collect = !collect;
                  break;
                default:
                    ;
              }
              
            Axios.post(host + '/api/interactive', datas).then(res => {
                this.setState({
                    interactive:{ collect,approval }
                })
                console.log(res)
            }).catch(error => {
                console.error(error);
            })
        }

    }
    followTa=()=>{
        if (this.props.auth) {
                
            let { user } = this.props;
            let { author, follow } = this.state;
            let params = {
                activeid: user.openId,
                passiveid: author.openId
            }
            Axios.post(host + '/api/follow', params).then(msg => {
                console.log(msg.data);
                this.setState({
                    follow: !follow
                })
            }).catch(error => {
                console.error(error)
            })
        }
    }
    render() {
        let { data, author,interactive } = this.state;
        return (
            <Row gutter={20} className="content">
                <Col sm={24} md={24} lg={16} xl={17} className="content_box">
                    <div className="content_author">
                        <h3>
                            {data.author}
                        </h3>
                        <p>
                            2019-06-10 19:36:25  阅读 {data.read}
                        </p>
                    </div>
                    <div className="content_cover">
                        {
                            data.coverImg ? <img src={data.coverImg} alt="封面图" /> : ''
                        }

                    </div>
                    <div className="content_title">
                        <h1>
                            {data.title}
                        </h1>
                    </div>
                    <div className="content_detail" dangerouslySetInnerHTML={{ __html: data.text }} />
                    <div className="content_interact">
                        <div className="interact_icon">

                            <IconText type="star" text={'10'} />
                            <IconText type="like" text={'20'} />
                            <IconText type="message" text={'0'} />
                        </div>
                        <div>
                            {/* 分享到: */}
                        </div>
                    </div>
                    <div className="float_interact">
                        <Affix offsetTop={120} onChange={affixed => console.log(affixed)} className="interact_affix">
                            <Badge
                                count={data.awesome}
                                offset={[-3, 3]}
                                style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset', fontSize: '10px' }}
                            >

                                <Button className="Article-Btn" onClick={this.interactive.bind(this, 1)}><Icon type="heart" theme="filled" style={interactive.approval?{color:'#409EFF'}:{color:'#999999'}}/></Button>
                            </Badge>
                            <Badge
                                count={data.comment}
                                offset={[-3, 15]}
                                style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset', fontSize: '10px' }}
                            >

                                <Button className="Article-Btn" href="#comment"><Icon type="message" theme="filled" style={{color:'#999999'}}/></Button>
                            </Badge>

                            <Button className="Article-Btn"  onClick={this.interactive.bind(this, 2)}><Icon type="star" theme="filled" style={interactive.collect?{color:'#409EFF'}:{color:'#999999'}}/></Button>

                        </Affix>
                    </div>
                    <div id="comment">
                        <ArticleComment tweet={this.props._id} />
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={8} xl={7}>
                    <Card
                        hoverable
                        actions={[
                            <Tooltip title={this.state.follow ? '取消关注' : '关注TA'}>
                                <span  onClick={this.followTa}>{this.state.follow ? <Icon type="crown" theme="filled" /> : <Icon type="plus" style={{ fontWeight: 'bolder' }} />}</span>
                            </Tooltip>,
                            // <Tooltip title="TA的博文列表">
                            //     <a href="/"><Icon type="edit" theme="filled" />{" 10"}</a>
                            // </Tooltip>,
                            <Tooltip title="博主资料">
                                <a href={"/user/home?id="+author.openId}><Icon type="idcard" theme="filled" /></a>
                            </Tooltip>]}
                        cover={<img alt="example" src={author.cover} />}
                    >
                        <img src={author.avatarUrl} alt="author" className="avaterimg" />
                        <div className="card_author">
                            <a href="#">{author.nickName}</a>
                            <p>{author.profile}</p>
                        </div>
                    </Card>

                    <div className="anchor-box">
                        <h4>
                            {this.state.nav ? '目录' : ''}
                        </h4>

                        <Anchor>
                            {
                                this.state.nav.map((value, i) => {
                                    return (
                                        <Link key={i} href={'#' + value.id} title={value.title} />
                                    )
                                })
                            }
                        </Anchor>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Content);