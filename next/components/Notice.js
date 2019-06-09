import React, { Component } from 'react';
import { message, Button } from 'antd';
import { connect } from 'react-redux'

const success = () => {
  message.success('This is a message of success');
};

const error = () => {
  message.error('This is a message of error');
};

const warning = () => {
  message.warning('This is message of warning');
};
class Notice extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }
    render() {
        return (
            <div>
                {console.log('通知模式启动')}
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

export default connect(mapStateToProps, mapDispatchToProps)(Notice);