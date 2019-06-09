import React, { Component } from 'react';
import { List, Avatar, Affix } from 'antd';
import axios from 'axios';
import config from '../../basic/confing';
let {host} = config;

class LeftList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            sortName:[],
            initLoading: true,
            loading: false,
            data: [],
            list: [],
            top: 70,
            bottom: 10,
            recommend:[],
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
    componentDidMount(){
        axios.get(host+'/public/recommend').then((res) => {
            console.log(res)
            this.setState({
                recommend: res.data
            })
        }).catch((error) => {
            console.log(error)
        })
    }
    render() {
        //const { initLoading, loading, list } = this.state;
        // const loadMore =
        // !initLoading && !loading ? (
        //     <div
        //     style={{
        //         textAlign: 'center',
        //         marginTop: 12,
        //         height: 32,
        //         lineHeight: '32px',
        //     }}
        //     >
        //     <Button onClick={this.onLoadMore}>loading more</Button>
        //     </div>
        // ) : null;
        return (
            <div className="ViewRight">
            <Affix offsetBottom={this.state.bottom} >
            <div className="RightTop">
                <div className="SortPag">
                    <span>推荐作者</span>
                </div>
                <List
                    className="avaterClass"
                    itemLayout="horizontal"
                    split={false}
                    size="small"
                    dataSource={this.state.recommend}
                    renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                        avatar={<Avatar src={item.avatarUrl}/>}
                        title={<a href="https://ant.design">{item.nickName}</a>}
                        description={item.profile}
                        />
                    </List.Item>
                    )}
                />
                {/* <div className="BottomPag">
                    <a href="#">查看更多</a>
                </div> */}
            </div>
            </Affix>
            
            <Affix offsetTop={this.state.top}>
                <div className="copyright">
                © <a href="http://Aluo.ink">Aluo.ink</a> 版权所有 &nbsp;
                备案号：
                <a href="http://www.beian.miit.gov.cn">
                粤ICP备19008991号

                </a>
                
                </div>
            </Affix>
            </div>
         );
    }
}

export default LeftList;