import React, { Component } from 'react';
import { Row, Col, Upload, message } from 'antd';
import nojs from '../../assets/img/nojs.png';
import { Button, notification, Tooltip, Popover, Tag, Input, Icon } from 'antd';
import storage from '../../model/storage';
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import { connect } from 'react-redux';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import '../../assets/css/edit.css';
import config from '../../basic/confing';
let { host } = config;

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

var idGroup = [];



function titleAddId(hid) {
    var str = "",
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    // 随机产生
    for (let i = 0; i < 4; i++) {
        let range = Math.round(Math.random() * (arr.length));
        str += arr[range]
        if (i === 3) {
            for (let n = 0; n < idGroup.length; n++) {
                if (str === idGroup[n]) {
                    i = 0;
                    str = "";
                }
            }
        }
    }
    console.log(str, arr.length);
    return str;
}

const openNotificationWithIcon = (type, msg) => {
    notification[type]({
        message: msg,
        //   description:
        //     'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
};

// function hoverContent(props){
//     (<div>
//     {this.state.label.map((value, i) => {
//         return (<Tag closable onClose={this.log}>
//             {value}
//         </Tag>)
//     })}
// </div>);
// }

class NoEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            hovered: false,
            title: '',
            text: '',
            imageUrl: '',
            eye: true,
            realtime: 12,
            anav: false,
            label: ['前端'],
            inputVisible: false,
            inputValue: '',
            eyeicon: [
                {
                    title: '关闭实时显示',
                    icon: 'eye-invisible'
                }, {
                    title: '开启实时显示',
                    icon: 'eye'
                }
            ]
        };
    }

    modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote', 'code-block'],

            [{ 'header': 1 }, { 'header': 2 }],               // custom button values
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
            [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
            [{ 'direction': 'rtl' }],                         // text direction

            [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
            [{ 'header': [2, 3, 4, 5, 6, false] }],

            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            [{ 'font': [] }],
            [{ 'align': [] }],

            ['image', 'clean']
        ],
    };

    //   formats = [
    //     'header',
    //     'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block',
    //     'list', 'bullet', 'indent',
    //     'link', 'image'
    //   ];


    handleHoverChange = visible => {
        this.setState({
            hovered: visible,
            clicked: false,
        });
    };

    handleClickChange = visible => {
        this.setState({
            clicked: visible,
            hovered: false,
        });
    };

    handleChange = (value) => {
        //console.log(value)
        this.setState({ text: value })
        let { title, text } = this.state;
        if (title !== '' || text !== '') {
            let data = { title, text };
            //console.log(data);
            storage.set('draft', data);
        } else {
            storage.remove('draft');
        }
    }

    titleChange = () => {
        this.setState({ title: this.refs.title.value })
        let { title, text } = this.state;
        if (title !== '' || text !== '') {
            let data = { title, text };
            console.log(data);
            storage.set('draft', data);
        } else {
            storage.remove('draft');
        }
    }

    saveText = () => {
        let { title, text } = this.state;
        if (title !== '' || text !== '') {
            let data = { title, text };
            console.log(data);
            storage.set('draft', data);
        } else {
            openNotificationWithIcon('error', '标题或内容为空')
        }
    }
    textTitleNav = (value) => {
        let end = 0;
        let start = 0;
        let valuenum = value.split('</h2>').length - 1;
        for (let i = 0; i < valuenum; i++) {
            start = value.indexOf('<h2>', end) + 4;
            end = value.indexOf('</h2>', start);
            let hid = value.substring(start, end);
            let aid = titleAddId(hid);
            let item = {
                title: hid,
                id: aid
            }
            idGroup.push(item)
            value = value.replace('<h2>' + hid, '<h2 id="' + aid + '">' + hid);
        }
        console.log(value, start, end, idGroup)
        this.setState({
            anav: true
        })
        return value;
    }
    submitText = () => {
        let { label,title, text, imageUrl, anav } = this.state;
        let { openId, nickName } = this.props.user;
        text = this.textTitleNav(text);
        let data = {
            title,
            openId,
            author: nickName,
            text,
            coverImg: imageUrl,
            nav: idGroup,
            label
        }
        if (title !== '' && text !== '' && anav === true) {
            console.log(this.state);
            axios.post(host + '/api/new', data).then((res) => {
                storage.remove('draft');
                this.setState({
                    anav: false,
                    title: '',
                    text: ''
                })
                idGroup = [];
            })

        } else {
            idGroup = [];
            console.log(title, anav)
            openNotificationWithIcon('error', '标题或内容为空')
        }

    }

    openRealTime = () => {
        if (this.state.eye) {
            this.setState({
                eye: false,
                realtime: 24
            })
        } else {
            this.setState({
                eye: true,
                realtime: 12
            })
        }
    }
    //图片状态改变后转换成base64
    imgChange = (info) => {
        console.log(info.file.status);
        if (info.file.status === 'uploading') {
            getBase64(info.file.originFileObj, imageUrl =>

                this.setState({
                    imageUrl
                }),
            );
            if (this.state.imageUrl !== '')
                openNotificationWithIcon('success', '图片上传成功');
        }

    };

    //生命周期
    componentDidMount() {
        console.log(this.props)
        if (storage.get('draft')) {
            let { title, text } = storage.get('draft');
            this.setState({ title, text });
        }

    }

    handleClose = removedTag => {
        const label = this.state.label.filter(tag => tag !== removedTag);
        console.log(label);
        this.setState({ label });
    };

    showInput = () => {
        this.setState({ inputVisible: true }, () => this.input.focus());
    };

    handleInputChange = e => {
        this.setState({ inputValue: e.target.value });
    };

    handleInputConfirm = () => {
        const { inputValue } = this.state;
        let { label } = this.state;
        if (inputValue && label.indexOf(inputValue) === -1) {
            label = [...label, inputValue];
        }
        console.log(label);
        this.setState({
            label,
            inputVisible: false,
            inputValue: '',
        });
    };

    saveInputRef = input => (this.input = input);
    render() {
        let { eye, eyeicon } = this.state;
        const { label, inputVisible, inputValue } = this.state;

        return (
            <div id="NoEdit">
                {this.props.auth ? '' : <Redirect
                    to={{
                        pathname: "/index"
                    }}
                />}
                <Row className="edit-bottom-border">
                    <Col span={24}>
                        <div className="edit-nav">
                            <input placeholder="在这里输入标题" className="edit-title" ref="title" value={this.state.title} onChange={this.titleChange} />
                            <div className="edit-nav-icon">
                                <Link to="/"><img src={nojs} alt={"logo"} /></Link>
                                <Popover
                                    style={{ width: 500 }}
                                    content={
                                        <div>
                                            {label.map((tag, index) => {
                                                const isLongTag = tag.length > 20;
                                                const tagElem = (
                                                    <Tag key={tag} closable onClose={() => this.handleClose(tag)}>
                                                        {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                                                    </Tag>
                                                );
                                                return isLongTag ? (
                                                    <Tooltip title={tag} key={tag}>
                                                        {tagElem}
                                                    </Tooltip>
                                                ) : (
                                                        tagElem
                                                    );
                                            })}
                                            {inputVisible && (
                                                <Input
                                                    ref={this.saveInputRef}
                                                    type="text"
                                                    size="small"
                                                    style={{ width: 78 }}
                                                    value={inputValue}
                                                    onChange={this.handleInputChange}
                                                    onBlur={this.handleInputConfirm}
                                                    onPressEnter={this.handleInputConfirm}
                                                />
                                            )}
                                            {!inputVisible && (
                                                <Tag onClick={this.showInput} style={{ background: '#fff', borderStyle: 'dashed' }}>
                                                    <Icon type="plus" /> New Tag
                                          </Tag>
                                            )}
                                        </div>
                                    }
                                    title="当前标签"
                                    trigger="hover"
                                    visible={this.state.hovered}
                                    onVisibleChange={this.handleHoverChange}
                                >
                                    <Button shape="circle" icon={"tag"} size={"small"} />
                                </Popover>
                                <Tooltip title={"上传封面图"}>
                                    <Upload
                                        name="avatar"
                                        action="/edit"
                                        showUploadList={false}
                                        beforeUpload={beforeUpload}
                                        onChange={this.imgChange}
                                    >
                                        <Button shape="circle" icon={"picture"} size={"small"} />

                                    </Upload>
                                </Tooltip>
                                <Tooltip title={eye ? eyeicon[0].title : eyeicon[1].title}>
                                    <Button shape="circle" icon={eye ? eyeicon[0].icon : eyeicon[1].icon} size={"small"} onClick={this.openRealTime} />
                                </Tooltip>
                                <Tooltip title="保存草稿">
                                    <Button shape="circle" icon="save" size={"small"} onClick={this.saveText} />
                                </Tooltip>
                                <Tooltip title="发布文章">
                                    <Button type="primary" shape="round" icon="download" size={"small"} onClick={this.submitText} >
                                        发布
                                </Button>
                                </Tooltip>
                            </div>

                        </div>
                    </Col>
                </Row>
                <Row className="show-nav">
                    <Col span={this.state.realtime}>
                        <div className="text-editor">
                            <ReactQuill modules={this.modules} value={this.state.text} onChange={this.handleChange} />
                        </div>
                    </Col>
                    <Col span={24 - this.state.realtime} className="html-content ql-snow">
                        {/* <div className="MainPic">
                            {
                                this.state.imageUrl !== '' ? <img src={this.state.imageUrl} alt="main"></img> : ''
                            }

                        </div> */}
                        <div className="ql-editor" dangerouslySetInnerHTML={{ __html: this.state.text }} />
                    </Col>
                </Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(NoEdit);