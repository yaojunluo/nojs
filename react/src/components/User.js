import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import UserInfo from './User/UserInfo';
import UserData from './User/UserData';
import UserFollow from './User/UserFollow';
import UserContent from './User/UserContent';
import '../assets/css/user.css';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         };
    }
    
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        return (
            <div>
                <div>
                    <UserInfo />
                </div>
                    <Router>
                <Row gutter={16}>
                    <Col span={5}>
                    <div className="user-nav">
                    <ul>
                        <li><Link to="/index/user">我的资料</Link></li>
                        <li><Link to="/index/user/follow">我的收藏</Link></li>
                        <li><Link to="/index/user/follow">我的关注</Link></li>
                        <li><Link to="/index/user/info">我的动态</Link></li>
                    </ul>
                </div>
                <div className="user-copyright">
                    <span>加入于</span>
                    <span>2019年05月16日</span>
                </div>
                    </Col>
                    <Col span={19}>
                    <div>

                        <Route path="/index/user/info" component={UserContent} />
                        <Route path="/index/user/follow" component={UserFollow} />
                        <Route exact path="/index/user" component={UserData} />
                    </div>
                    </Col>
                </Row>
                    </Router>
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

export default connect(mapStateToProps, mapDispatchToProps)(User);