import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class List extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: ''
        };
    }
    //第一个参数state键名，第二个参数ref（可选）默认与键名相同

    rModel(key,ref) {
        let rkey = key;
        if(ref.length > 0){
            rkey = ref;
        }
        let pn = {};
        pn[key] = this.refs[rkey].value;
        this.setState(pn)
    }

    render() {
        return (
            <div>
                <input ref="names" onChange={this.rModel.bind(this,'name','names')} value={this.state.name}></input>
                <h1>{this.state.name}</h1>
                {console.log(this.props)}
            </div>
        );
    }
}

export default List;