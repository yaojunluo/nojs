import React, { Component } from 'react';
import { Skeleton, Affix, Button, Icon, Badge } from 'antd';
import { Link } from "react-router-dom";
import ArticleComment from './ArticleComment';
import { connect } from 'react-redux';
import moment from 'moment';
import axios from 'axios';

import config from '../../../basic/confing';
let { host } = config;
// const TextArea = Input.TextArea;

function Details(props) {
    let { content, tweet } = props;
    return (
        <div>
            <div className="article-writer">
                <Link to="/">{content.author}</Link>
                {/* <Badge count={'Lv19'} style={{ backgroundColor: '#409EFF', padding: '0px 5px', marginLeft: '10px', height: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} /> */}
                <p>{moment(content.creatime).format('YYYY-MM-DD HH:mm:ss')}  阅读 {content.read}</p>
            </div>
            <div className="MainPic">
                {
                    content.coverImg !== '' ? <img src={content.coverImg} alt="main"></img> : ''
                }

            </div>
            <h1 className="article-title">{content.title}</h1>

            <div className="article-content" dangerouslySetInnerHTML={{ __html: content.text }} />
            <div className="article-comment" id="comment">
                <ArticleComment tweet={tweet} />
            </div>
        </div>
    )
}

class ArticleDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            interactive: {
                collect: false,
                approval: false,
                attention: false
            },
            content: {}
        };
    }
    
    componentDidMount() {
        //console.log('content:', this.props)
        this.setState({
            isLoading: false,
            content: this.props.content
        })

        if (this.props.auth) {
            let { user, content, tweet } = this.props;
            let params = {
                interactive: tweet,
                activeid: user.openId,
                passiveid: content.openId,
                activename: user.nickName,
                passivename: content.author,
            }
            axios.get(host + '/api/interactive', {
                params
            }).then(res => {
                //console.log(res.data);
                this.setState({
                    interactive: res.data
                })
            }).catch(error => {
                console.error(error)
            })
        }
    }

    interactive = (num) => {
        if (this.props.auth) {
            let { collect,approval,attention } = this.state.interactive;
            let { user, content, tweet } = this.props;
            let data = {
                interactive: tweet,
                genre: num,
                activeid: user.openId,
                passiveid: content.openId,
                activename: user.nickName,
                passivename: content.author,
            }
            switch (num) {
                case 1:
                  approval = !approval;
                  break;
                case 2:
                  collect = !collect;
                  break;
                case 3:
                  attention = !attention;
                  break;
                default:
                    ;
              }
              
            axios.post(host + '/api/interactive', data).then(res => {
                this.setState({
                    interactive:{ collect,approval,attention }
                })
                console.log(res)
            }).catch(error => {
                console.error(error);
            })
        }

    }

    render() {
        let { content, interactive } = this.state;
        return (
            <div className="ArticleDetails">
                <div className="Article-Interact">
                    <Affix offsetTop={200} onChange={affixed => console.log(affixed)}>
                        <Badge
                            count={content.awesome}
                            offset={[-3, 15]}
                            style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset', fontSize: '10px' }}
                        >

                            <Button className="Article-Btn" onClick={this.interactive.bind(this, 1)}><Icon type="heart" theme="filled" style={interactive.approval?{color:'#409EFF'}:{color:'#999999'}} /></Button>
                        </Badge>
                        <Badge
                            count={content.comment}
                            offset={[-3, 15]}
                            style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset', fontSize: '10px' }}
                        >

                            <Button className="Article-Btn" href="#comment"><Icon type="message" theme="filled" /></Button>
                        </Badge>

                        <Button className="Article-Btn" onClick={this.interactive.bind(this, 2)}><Icon type="star" theme="filled" style={interactive.collect?{color:'#409EFF'}:{color:'#999999'}}/></Button>
                    </Affix>
                </div>
                {
                    this.state.isLoading ? <Skeleton active paragraph={{ rows: 38 }} /> : <Details content={content} tweet={this.props.tweet} />
                }

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

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetails);