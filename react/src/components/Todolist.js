import React, { Component } from 'react';
import '../assets/css/todo.css';
import Storage from '../model/storage'

class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            task:[]
        };
    }
    
    inputKeyUp=(e)=>{

        if(e.keyCode === 13){
            let newTask = this.state.task;
            newTask.push({
                title:e.target.value,
                checked: false
            })
            Storage.set('todolist',newTask);
            this.setState({
                task: newTask
            })
            e.target.value = '';
        }

    }

    taskChecked(key){
        console.log(key);
        let newTask = this.state.task;
        newTask[key].checked = !newTask[key].checked;
        this.setState({
            task: newTask
        })
        
        Storage.set('todolist',newTask);
    }

    removeTask(key){
        console.log(key)
        let newTask = this.state.task;
        newTask.splice(key,1);
        this.setState({
            task: newTask
        })
        Storage.set('todolist',newTask);
    }

    editTask(key){
        let rkey = 'edit'+key;
        let newTask = this.state.task;
        newTask[key].title = this.refs[rkey].value;
        this.setState({
            task: newTask
        })
        Storage.set('todolist',newTask);
    }
    componentDidMount(){
        let todolist = Storage.get('todolist');
        //console.log(todolist);
        this.setState({
            task: todolist
        })
    }
    render() {
        return (
            <div id="todo">
                <div className="navTop">
                    <div className="toCenter">
                        <span className='logo'>ToDoList</span>
                        <input className='addtodo' type="text" placeholder="添加ToDo" onKeyUp={this.inputKeyUp} />
                    </div>
                </div>
                <div className="list doing">
                    <div className="title">
                        <h2>正在进行</h2>
                        <span>1</span>
                    </div>
                    <ul className="task">

                        {
                            this.state.task.map((value,key)=>{
                                if(!value.checked){
                                    return (
                                        <li key={key}>
                                            <p>
                                                <input className="check" type="checkbox" defaultChecked={value.checked} onClick={this.taskChecked.bind(this,key)}/>
                                                {/* <span>{value.title}</span> */}
                                                <input className="vtitle" type="text" ref={'edit'+key} defaultValue={value.title} onChange={this.editTask.bind(this,key)}></input>
                                            </p>
                                                <a href="javascript:void(0)" onClick={this.removeTask.bind(this,key)}>-</a> 
                                        </li>);
                                }else{
                                    return '';
                                }
                            })
                        }
                    </ul>
                </div>
                <div className="list done">
                <div className="title">
                        <h2>已经完成</h2>
                        <span>1</span>
                    </div>
                    <ul className="task">
                        {
                            this.state.task.map((value,key)=>{
                                if(value.checked){
                                    return (
                                        <li key={key}>
                                            <p>
                                                <input className="check" type="checkbox" defaultChecked={value.checked} onClick={this.taskChecked.bind(this,key)}/>
                                                <span>{value.title}</span>
                                            </p>
                                                <a href="javascript:void(0)" onClick={this.removeTask.bind(this,key)}>-</a> 
                                            </li>);
                                }else{
                                    return '';
                                }
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Todolist;