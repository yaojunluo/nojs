import React, { Component } from 'react';
import {
    Row, Col
} from 'antd'
import Layout from '../components/Layout'
import Content from '../components/home/content'
import { withRouter } from 'next/router'
  class content extends Component {
      constructor(props) {
          super(props);
          this.state = { 

           };
      }
      componentDidMount(){
          console.log(this.props)
      }
      render() {
          return (
    <Layout>
    <Row type="flex" justify="center" align="middle" style={{
      boxSizing: 'border-box',
      padding:'20px'
    }}>

    <Col  xs={24} sm={24} md={20} lg={18} xl={16}>
      <Content _id={this.props.router.query.id} /> 
    </Col>
  </Row>
  </Layout>
          );
      }
  }

  export default withRouter(content);
