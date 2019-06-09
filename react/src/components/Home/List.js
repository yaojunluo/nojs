import React, { Component } from 'react';
import { Icon, Button, List, Skeleton } from 'antd';
import { Link } from "react-router-dom";
import axios from 'axios';
import config from '../../basic/confing';
let {host} = config;

// import reqwest from 'reqwest';

class LeftList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortName: [],
            initLoading: true,
            loading: false,
            data: [],
            list: [],
            top: 70,
            bottom: 10,
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
        axios.get(host+'/public/new').then((res)=>{
            console.log(res.data.reverse())
            this.setState({
                list: res.data
            })
        }).catch((err)=>{
            console.log(err)
        })
    }

    render() {
        const { initLoading, loading, list } = this.state;
        const loadMore =
            !initLoading && !loading ? (
                <div
                    style={{
                        textAlign: 'center',
                        marginTop: 12,
                        height: 32,
                        lineHeight: '32px',
                    }}
                >
                    <Button onClick={this.onLoadMore}>loading more</Button>
                </div>
            ) : null;
        return (
            <div className="ViewLeft">
                <div className="SortPag">
                    <ul>
                        <li><span>最新</span></li><i className="iborder" />
                        <li><span>热门</span></li><i className="iborder" />
                        <li><span>评论</span></li>
                    </ul>


                </div>
                <div className="LoadingList">
                    <List
                        className="demo-loadmore-list"
                        //loading={initLoading}
                        itemLayout="horizontal"
                        loadMore={loadMore}
                        dataSource={list}
                        renderItem={item => (
                            <List.Item actions={item.coverImg?[<img className="listimg" src={item.coverImg} alt={'coverimage'}/>]:[]}>
                                <Skeleton title={false} loading={item.loading} active>
                                    <div className="listTitle">
                                        <div className="SectionName">{item.label.map((v,i)=>{
                                            if(i > 0){
                                                return '·'+v;
                                            }else{
                                                return ''+v;
                                            }
                                        })}</div>
                                        <div className="TextTitle">
                                            <h2>
                                               <Link to={'/content/'+item._id}>{item.title}</Link>
                                            </h2>
                                        </div>
                                        <div className="ListGrpup">
                                            <Button.Group size="small">
                                                <Button>
                                                    <Icon type="heart" theme="filled" />
                                                    <span>{item.awesome}</span>
                                                </Button>
                                                <Button>
                                                    <Icon type="message" theme="filled" />
                                                    <span>{item.comment}</span>
                                                </Button>
                                            </Button.Group>
                                        </div>
                                    </div>

                                </Skeleton>
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        );
    }
}

export default LeftList;