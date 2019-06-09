import React, { Component } from 'react';
import { Comment, Form, Button, List, Input, message } from 'antd';
import moment from 'moment';
import { connect } from 'react-redux';
import axios from 'axios';

import config from '../../../basic/confing';
let { host } = config;

const TextArea = Input.TextArea;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div>
    <Form.Item>
      <TextArea rows={2} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        评论
      </Button>
    </Form.Item>
  </div>
);
const success = (text) => {
  message.success(text);
};

const error = (text) => {
  message.error(text);
};

const warning = (text) => {
  message.warning(text);
};
class ArticleComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      submitting: false,
      value: '',
    };
  }
  handleSubmit = () => {
    if (this.props.auth === false) {
      error('请先登录')
    } else {
      let {user, tweet} = this.props;

      if (!this.state.value) {
        return;
      }

      this.setState({
        submitting: true,
      });

      let data = {
        tweet,
        author: user.nickName,
        avatar: user.avatarUrl,
        openId: user.openId,
        content: this.state.value,
        datetime: new Date(),
      }
      axios.post(host+'/api/comment',data).then(res=>{
        console.log(res)
      }).catch(error=>{
        console.error(error);
      })
      console.log(user.openId);
      setTimeout(() => {
        success('评论成功')
        this.setState({
          submitting: false,
          value: '',
          comments: [
            {
              tweet: data.tweet,
              author: data.author,
              avatar: data.avatar,
              openid: data.openId,
              content: data.content,
              datetime: moment(data.datetime).fromNow(),
            },
            ...this.state.comments,
          ],
        });
      }, 1000);
    }
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };


  componentDidMount() {
    console.log(this.props)
    axios.get(host+'/public/comment',{
      params: { tweet: this.props.tweet }
    }).then(res=>{
      console.log(res.data);
      let comments = [];
      let n = res.data.length;
      for(let i = 0; i < n; i++){
        comments.push({
          tweet: res.data[i].tweet,
          author: res.data[i].author,
          avatar: res.data[i].avatar,
          openid: res.data[i].openId,
          content: res.data[i].content,
          datetime: moment(res.data[i].datetime).fromNow(),
        })
      }
      this.setState({
        comments
      })
    }).catch(error=>{
      console.error(error);
    })
  }
  render() {
    const { comments, submitting, value } = this.state;
    return (
      <div>

        <Comment
          // avatar={
          //     <Avatar
          //     src="http://localhost:3001/img/407.jpg"
          //     alt="Han Solo"
          //     />
          // }
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
        {comments.length > 0 && <CommentList comments={comments} />}

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

export default connect(mapStateToProps, mapDispatchToProps)(ArticleComment);