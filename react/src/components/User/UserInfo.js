import React, { Component } from 'react';
import { Icon } from 'antd';
import backg from '../../assets/img/bg.jpg';
import { connect } from 'react-redux';
import axios from 'axios';

import config from '../../basic/confing';
let { host } = config;

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            user: {}
         };
    }
    componentDidMount(){
        console.log(this.props) 
        let {user} = this.props;
        this.setState({
            user
        })
    }

    render() {
        let {user} = this.state;
        return (
            <div id="user-info">
                <img src={backg} className="user-info-bg" alt={'background'}/>
                <div className="user-info-box">
                    <div className="info-box-left">
                        <img src={user.avatarUrl} className="info-head" alt={'avatarUrl'}/>
                        <div className="info-box-name">
                            <h3>{user.nickName}</h3>
                            <p><Icon type="environment" theme="filled" /><span>{user.city}</span></p>
                        </div>
                    </div>
                    <div className="info-box-material">
                        {/* <ul className="material">
                            <li>
                                <a href="#">10</a>
                                <span className="material_top">话题</span>
                            </li>
                            <i className="iborder"/>
                            <li>
                                <a href="#">10</a>
                                <span className="material_top">关注</span>
                            </li>
                            <i className="iborder"/>
                            <li>
                                <a href="#">10</a>
                                <span className="material_top">收藏</span>
                            </li>
                        </ul> */}
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);