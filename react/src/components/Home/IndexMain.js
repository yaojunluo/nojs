import React, { Component } from 'react';
import { Row, Col } from 'antd';
import LeftList from './List';
import RightList from './RightList';


class IndexMain extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        };
    }

    
    render() {
        return (
            <Row justify="start" gutter={20} >
            <Col xs={24} sm={24} md={24} lg={17} xl={17}>
                <LeftList />
            </Col>
            <Col xs={0} lg={7} xl={7}>
                <RightList />
            </Col>
            </Row>
        );
    }
}

export default IndexMain;