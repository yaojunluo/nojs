import React, { Component } from 'react';
import { Row, Col, Layout } from 'antd';


import HomeHeader from './Home/HomeHeader';
import MainContent from './Home/MainContent';

const { Header, Content } = Layout;

class Contents extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: 'Luo'
        }
    }
    
    componentDidMount(){
        console.log(this.props.match.params.aid);
    }

    render(){
        return (
            <div className="App">
                <Layout>
                    <Header>
                        <HomeHeader />
                        {/* <Row  className="HeadTag">
                        <Col xs={24} sm={24} md={24} lg={20} xl={16}>
                            你好
                        </Col>
                        </Row> */}
                    </Header>
                    <Content>
                        <Row type="flex" justify="center">
                        <Col xs={24} sm={24} md={24} lg={20} xl={16}>
                              <MainContent tweet={this.props.match.params.aid}/> 
                        </Col>
                        </Row>
                    </Content>
                </Layout>
            </div>
        )
    }
}

export default Contents;