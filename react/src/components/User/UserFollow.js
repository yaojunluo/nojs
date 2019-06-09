import React, { Component } from 'react';
import { List,Avatar } from 'antd';

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

class UserFollow extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className="user-content">
                <div>
                    <h3>我的关注</h3>
                    <List
                        size="large"
                        dataSource={data}
                        renderItem={item => (
                            <List.Item key={item.id}>
                            <List.Item.Meta
                              avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                              }
                              title={<a href="https://ant.design">{item}</a>}
                              description={'811822704@qq.com'}
                            />
                            </List.Item>
                        )}
                    />
                </div>

            </div>
        );
    }
}

export default UserFollow;