import {
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button
} from 'antd'
import React, { Component } from 'react';
import Layout from '../components/Layout'
import { connect } from 'react-redux'
const FormItem = Form.Item
const Option = Select.Option
class about extends Component {
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
      <Layout>
        <div style={{ marginTop: 100 }}>
          <Button type="primary" shape="circle" icon="search" />
        </div>
      </Layout>
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

export default connect(mapStateToProps, mapDispatchToProps)(about);