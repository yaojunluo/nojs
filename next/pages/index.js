import {
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
  Row, Col
} from 'antd'
import Layout from '../components/Layout'
import Blog from '../components/home/blog'
const FormItem = Form.Item
const Option = Select.Option

export default () => (

  <Layout>
    <Row type="flex" justify="center" align="middle" style={{
      boxSizing: 'border-box',
      padding:'20px'
    }}>
    <Col  xs={24} sm={24} md={20} lg={18} xl={16}>
      <Blog /> 
    </Col>
  </Row>
  </Layout>
)
