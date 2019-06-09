import React, { Component } from 'react';
import { Skeleton, Button, Timeline,Affix  } from 'antd';
import { Link } from "react-router-dom";
import axios from 'axios';
import { connect } from 'react-redux';
import config from '../../../basic/confing';
let {host} = config;



function toAttention(props){
    //console.log('toAttention',props)
    
    if (props.info.auth) {
        let { nickName, openId } = props.author;
        let { user } = props.info;
        let data = {
            interactive: openId,
            genre: 3,
            activeid: user.openId,
            passiveid: openId,
            activename: user.nickName,
            passivename: nickName,
        }
        
          
        axios.post(host + '/api/interactive', data).then(res => {
            window.location.reload();
            console.log(res)
        }).catch(error => {
            console.error(error);
        })
    }
}

function UserInfo(props) {
    //console.log('userinfo', props)
    let {author, attention} = props;
    return (
            <div className="Article-avater">
                <div className="SortPag">
                    <span>达人介绍</span>
                </div>
                <div className="A_info">
                    <div className="A_headimg">
                        <img src={author.avatarUrl} alt={"达人头像"}/>
                    </div>
                    <div className="A_name">
                        <Link to="/">{author.nickName}</Link>
                        {/* <Badge count={'Lv19'} style={{ backgroundColor: '#409EFF',padding:'0px 5px',marginLeft:'10px',height:'15px',display:'flex',alignItems:'center',justifyContent:'center'}} /> */}
                        
                        {
                            attention?(<Button type="primary" onClick={toAttention.bind(this,props)}>取消关注</Button>):(<Button type="primary" icon="plus" onClick={toAttention.bind(this,props)}> 关注</Button>)
                        }
                    </div>
                </div>
                {/* <div className="A_text">
                    <p>知识改变世界</p>
                </div> */}
                <div className="A_user">
                    <ul className="material">
                        <li>
                            <span className="material_top">话题</span>
                            <a href="/">10</a>
                        </li>
                        <i className="iborder"/>
                        <li>
                            <span className="material_top">关注</span>
                            <a href="/">10</a>
                        </li>
                        <i className="iborder"/>
                        <li>
                            <span className="material_top">收藏</span>
                            <a href="/">10</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
  }

class ArticleInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loading: true,
            top: 15,
            nav:[],
            interactive: {
                collect: false,
                approval: false,
                attention: false
            },
            author: {
            }
         };
    }

    componentDidMount(){
        console.log('user', this.props)
        this.setState({
            nav: this.props.content.nav
        })
        axios.get(host+'/public/author', {
            params: { 'openId': this.props.content.openId }
        }).then((res) => {
            console.log(res)
            this.setState({
                loading: false,
                author: res.data
            })
        }).catch((error) => {
            console.log(error)
        })

        if (this.props.auth) {
            let { user, content} = this.props;
            let params = {
                interactive: content.openId,
                activeid: user.openId,
                passiveid: content.openId,
                activename: user.nickName,
                passivename: content.author,
            }
            axios.get(host + '/api/interactive', {
                params
            }).then(res => {
                console.log(res.data);
                this.setState({
                    interactive: res.data
                })
            }).catch(error => {
                console.error(error)
            })
        }
    }

    render() {
        return (
            <div className="ViewRight">
                <div className="ArticleInfo">
                    {
                        this.state.loading?<Skeleton avatar paragraph={{ rows: 3 }} />:<UserInfo author = {this.state.author} attention={this.state.interactive.attention} info={this.props}/>
                        
                    }
                </div>
                <Affix offsetTop={this.state.top}>
                    <div className="mulu">
                    <h4>目录</h4>
                    <Timeline>
                        {
                            
                            this.state.nav.map((value, i)=>{
                                if(value.title){
                                    return (<Timeline.Item key={i}><a href={"#"+value.id}>{value.title}</a></Timeline.Item>);
                                }else{
                                    return <span key={i}>暂无目录</span>;
                                }
                            })
                        }
                        {/* <Timeline.Item><a href="#">Create a services site 2015-09-01</a></Timeline.Item>
                        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item> */}
                    </Timeline>
                    </div>
                </Affix>
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

export default connect(mapStateToProps, mapDispatchToProps)(ArticleInfo);