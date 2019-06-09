import React, { Component } from 'react';
import { Link } from "react-router-dom";
class UserNav extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }
    render() {
        return (
            <div>
                <div className="user-nav">
                    <ul>
                        <li><Link to="/index/user">我的动态</Link></li>
                        <li><Link to="/index/user/follow">我的收藏</Link></li>
                        <li><Link to="/index/user/follow">我的关注</Link></li>
                        <li><Link to="/index/user/info">我的资料</Link></li>
                    </ul>
                </div>
                <div className="user-copyright">
                    <span>加入于</span>
                    <span>2019年05月16日</span>
                </div>
            </div>
        );
    }
}

export default UserNav;