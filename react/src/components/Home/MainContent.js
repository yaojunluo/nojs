import React, { Component } from 'react';
import { Row, Col, Skeleton } from 'antd';
import ArticleDetails from './Content/ArticleDetails';
import ArticleInfo from './Content/ArticleInfo';
import axios from 'axios';
import config from '../../basic/confing';
let {host} = config;

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortName: [],
      initLoading: true,
      loading: false,
      contentLoading: true,
      data: [],
      list: [],
      top: 70,
      bottom: 10,
      content: {},
      datas: [
        {
          title: 'Ant Design Title 1',
        },
        {
          title: 'Ant Design Title 2',
        },
        {
          title: 'Ant Design Title 3',
        }
      ]
    };
  }

  componentDidMount() {
    console.log(this.props)
    axios.get(host+'/public/tweet', {
      params: { '_id': this.props.tweet }
    }).then((res) => {
      console.log(res)
      this.setState({
        contentLoading: false,
        content: res.data
      })
    }).catch((error) => {
      console.log(error)
    })
    
  }


  render() {
     const { content } = this.state;
    // const loadMore =
    //   !initLoading && !loading ? (
    //     <div
    //       style={{
    //         textAlign: 'center',
    //         marginTop: 12,
    //         height: 32,
    //         lineHeight: '32px',
    //       }}
    //     >
    //       <Button onClick={this.onLoadMore}>loading more</Button>
    //     </div>
    //   ) : null;
    return (
      <Row justify="start" gutter={20}>
        <Col xs={24} sm={24} md={24} lg={17} xl={17}>
          {
            this.state.contentLoading ? <Skeleton active paragraph={{ rows: 38 }} /> : <ArticleDetails content={content} tweet={this.props.tweet}/>
          }

        </Col>
        <Col xs={0} lg={7} xl={7}>
          {
            this.state.contentLoading ? <Skeleton avatar paragraph={{ rows: 3 }} /> : <ArticleInfo  content={content} tweet={this.props.tweet} />
          }

        </Col>
      </Row>
    );
  }
}

export default MainContent;