import React, { Component } from 'react';
import {
    Row, Col, Tag, List, Menu, Avatar, Upload, Icon, message, Button, Card
} from 'antd'
import Layout from '../../components/Layout'
import { connect } from 'react-redux'
import Content from '../../components/home/content'
import { withRouter } from 'next/router'

import Axios from 'axios';
import HOST from '../../config/host'

const { SubMenu } = Menu;
const host = HOST.host;
const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);
function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
        message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
}
class user extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                title: 'koa2 常用获取get、post值的方法 以及 Axios请求'
            }, {
                title: 'koa2 常用获取get、post值的方法 以及 Axios请求'
            }],
            loading: false,
        };
    }
    componentDidMount() {
        console.log(this.props)
        // Axios.get(host + '/public/new').then((res) => {
        //     console.log(res)
        //     this.setState({
        //         data: res.data
        //     })
        //     this.props.NoticeSussess('加载成功')
        // }).catch((err) => {
        //     this.props.NoticeError('服务器错误')
        // })
    }
    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
    };
    handleClick = (e) => {
        console.log('click', e);
    }
    render() {
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const imageUrl = this.state.imageUrl;
        return (
            <Layout>
                <Row type="flex" justify="center" align="middle" style={{
                    boxSizing: 'border-box',
                    padding: '20px'
                }}>
                    <Col xs={24} sm={24} md={20} lg={18} xl={16}>
                        <Row >
                            <Col xs={24} sm={24} md={24} lg={8} xl={7} style={{ backgroundColor: '#ffffff', padding: '10px', marginRight: '15px', marginBottom: '20px',boxShadow:'0px 0px 1px rgba(0, 0, 0, 0.03)' }}>
                                <div className="upload_head">
                                    <Upload
                                        name="avatar"
                                        showUploadList={false}
                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                        beforeUpload={beforeUpload}
                                        onChange={this.handleChange}
                                    >
                                        <div className="avater_img">
                                            <img src={'/static/img/123.jpg'} alt="avatar" style={{ borderRadius: '50%', width: '100px', height: '100px' }} />
                                            <Button type="primary" shape="circle" icon="picture" />
                                        </div>
                                        {/* {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton} */}
                                    </Upload>
                                </div>
                                <div className="name_email">
                                    <h4>Nojs</h4>
                                    <p>nojspro@gmail.com</p>
                                </div>
                                <div>

                                    <Menu onClick={this.handleClick} style={{ width: "100%", border: 'none' }} mode="vertical">
                                        <Menu.Item key="1" className="ant-menu-item-selected">
                                            <Icon type="home" theme="filled" />
                                            <span>用户主页</span>
                                        </Menu.Item>
                                        <Menu.Item key="2">
                                            <Icon type="contacts" theme="filled" />
                                            <span>用户资料</span>
                                        </Menu.Item>
                                        <Menu.Item key="3">
                                            <Icon type="smile" theme="filled" />
                                            <span>我的博文</span>
                                        </Menu.Item>
                                        <Menu.Item key="4">
                                            <Icon type="setting" theme="filled" />
                                            <span>设置</span>
                                        </Menu.Item>
                                    </Menu>
                                </div>
                            </Col>
                            <Col sm={24} md={24} lg={15} xl={16}>
                                <div className="user_index">
                                    <Card title="我的资料">
                                        <div>
                                            <p>nojspro@gmail.com</p>
                                            <p>广东/中山</p>
                                            <p>
                                                Things will develop in the opposite direction when they become extreme
                                            </p>

                                        </div>
                                    </Card>

                                    <Card title="我的动态">
                                        <p>
                                            <a href="#">admin</a>点赞了<a href="#">Things will develop in the opposite</a>
                                        </p>
                                        <p>
                                            <a href="#">admin</a>点赞了<a href="#">Things will develop in the opposite</a>
                                        </p>
                                    </Card>
                                    <Card title="我的博文">
                                        <List
                                            itemLayout="vertical"
                                            dataSource={this.state.data}
                                            renderItem={item => (
                                                <List.Item
                                                    key={item.title}
                                                >
                                                    <List.Item.Meta
                                                        title={<a href={'/content?id=' + item._id} style={{ fontSize: '18px' }}>{item.title}</a>}
                                                        description={<p style={{ fontSize: '12px' }}>前端 React   2019-6-9 14:00:31</p>}
                                                    />
                                                </List.Item>
                                            )}
                                        />
                                    </Card>
                                </div>
                            </Col>
                        </Row>

                    </Col>
                </Row>
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
        LoginOut: () => dispatch({ type: 'loginOut' }),
        NoticeSussess: (value) => dispatch({ type: 'success', value }),
        NoticeError: (value) => dispatch({ type: 'error', value }),
        NoticeWarning: (value) => dispatch({ type: 'warning', value }),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(user));
