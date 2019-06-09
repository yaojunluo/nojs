import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from 'antd';
import { Layout } from 'antd';
import { Row, Col } from 'antd';


import HomeHeader from './Home/HomeHeader';

const { Header, Footer, Sider, Content } = Layout;

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: 'Luo'
        }
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
                            {/* <IndexMain /> */}
                            {

                            this.props.routes.map((route,key)=>{

                                return   <Route key={key} exact path={route.path} component={route.component} />
                            })
                            }
                            {/* {
                                this.props.routes.map((route, i) => {
                                console.log(route,route.exact)
                                if(route.exact){
                                return (
                                    <Route
                                    key={i}
                                    exact
                                    path={route.path}
                                    render={props => (
                                        <route.component {...props} routes={route.routes} />
                                    )}
                                    />
                                )
                                }else{
                                return (
                                    <Route
                                    key={i}
                                    path={route.path}
                                    render={props => (
                                        <route.component {...props} routes={route.routes} />
                                    )}
                                    />
                                )
                                }

                            })} */}
                        </Col>
                        </Row>
                    </Content>
                </Layout>
            </div>
        )
    }
}

export default Home;