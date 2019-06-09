import React, { Component } from 'react';
class EditArea extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }
    editChange=(e)=>{
        console.log(this.refs.content);
    }
    render() {
        return (
            <div>
                <div>
                    <div className="edit-area" contentEditable="true" ref="content" type="text" onInput={this.editChange}>
                    <h2>123</h2>
                    </div>
                </div>

                <div className="edit-tool" onClick={this.editChange}>
                    13
                </div>
            </div>
        );
    }
}

export default EditArea;