import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";
class Redirects extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Redirect
                to={{
                pathname: "/index"
                }}
            />
        );
    }
}

export default Redirects;