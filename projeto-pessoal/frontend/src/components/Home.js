import React, {Component} from 'react';
import Table from './templates/table/Table';
import Form from './templates/form/Form';

import {Card, Nav} from 'react-bootstrap';
import {Check, CardText, ListTask, Exclamation} from 'react-bootstrap-icons';

import {connect} from 'react-redux';
import {changeVision} from '../store/actions/whichTableIsVisible';
import {updateTasks} from '../store/actions/tasks';

import axios from 'axios';

const URL = 'https://todo-backend-express.herokuapp.com/';

const mapStateToProps = state =>{
    return {
        whichTableIsVisible: state.whichTableIsVisible.whichTableIsVisible,
        tasks: state.users.tasks
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        changeVision(trueOrFalse) {
            dispatch(changeVision(trueOrFalse));
        },
        updateTasks(userList){
            dispatch(updateTasks(userList));
        }
    }
}

class Home extends Component {

    constructor(props) {
        super(props);
    }

    async componentWillMount(){
        this.updateTasks();
    }

    async componentDidUpdate(){
        this.updateTasks(); 
    }

    async updateTasks(){
        const tasks = await axios.get(URL);
        if (JSON.stringify(tasks.data) == JSON.stringify(this.props.tasks)) return
        this.props.updateTasks(tasks.data);
    }

    async completeTask(url, completed){
        await axios.patch(url,
        {
            completed
        });
        await this.updateTasks();
    }

    async deleteCompletedTasks(){
        const completedTasks = this.props.tasks.filter(task=>task.completed);
        for(const completedTask of completedTasks){
            await axios.delete(completedTask.url)
        }
        await this.updateTasks();
    }

    deleteTask = async (url)=>{
        const confirmation = window.confirm('Tem certeza?');
        if (confirmation){
            const id = url.split('/')[1];
            await axios.delete(`${URL}/${id}`);
            const newUserList = this.props.tasks.filter(task=>task.url != url);
            this.props.updateTasks(newUserList);
            await this.updateTasks();
        }
    }

    filterTasksCompleteds(){
        return this.props.tasks.filter(task=>task.completed);
    }

    filterTasksNotCompleteds(){
        return this.props.tasks.filter(task=>!task.completed);
    }

    render(){
        return(
            <>
            <Card>
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link active={this.props.whichTableIsVisible === 1 ? true : false} onClick={() => this.props.changeVision(1)}><ListTask/> Tarefas</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link active={this.props.whichTableIsVisible === 2 ? true : false} onClick={() => this.props.changeVision(2)}><Exclamation/> A fazer</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link active={this.props.whichTableIsVisible === 3 ? true : false} onClick={() => this.props.changeVision(3)}><Check/> Concluídas</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link active={this.props.whichTableIsVisible === 4 ? true : false} onClick={() => this.props.changeVision(4)}><CardText/> Formulário</Nav.Link>
                    </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>
                    {this.props.whichTableIsVisible === 1 ? 
                    <Table deleteTask={url=>this.deleteTask(url)} 
                        completeTask={(url, completed)=>this.completeTask(url, completed)} 
                        tasks={this.props.tasks} 
                        completed='trueAndFalse'
                        deleteCompletedTasks={()=>this.deleteCompletedTasks()}/> 
                    : this.props.whichTableIsVisible === 2 ? 
                    <Table deleteTask={url=>this.deleteTask(url)} 
                        completeTask={(url, completed)=>this.completeTask(url, completed)} 
                        tasks={this.filterTasksNotCompleteds()}
                        deleteCompletedTasks={()=>this.deleteCompletedTasks()}/> 
                        : this.props.whichTableIsVisible === 3 ? 
                    <Table deleteTask={url=>this.deleteTask(url)} 
                        completeTask={(url, completed)=>this.completeTask(url, completed)} 
                        tasks={this.filterTasksCompleteds()} 
                        completed={true}
                        deleteCompletedTasks={()=>this.deleteCompletedTasks()}/> 
                    : <Form/>}
                </Card.Body>
            </Card>
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)