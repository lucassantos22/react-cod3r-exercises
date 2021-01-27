import React, {Component} from 'react';
import Table from './templates/Table';
import Form from './templates/Form';

import {Card, Nav, Spinner} from 'react-bootstrap';
import {Check, CardText, ListTask, Exclamation} from 'react-bootstrap-icons';

import {connect} from 'react-redux';
import {changeVision} from '../store/actions/whichTableIsVisible';
import {updateTasks} from '../store/actions/tasks';
import {updateLoading} from '../store/actions/loading';

import axios from 'axios';

const URL = 'https://todo-backend-express.herokuapp.com/';

const mapStateToProps = state =>{
    return {
        whichTableIsVisible: state.whichTableIsVisible.whichTableIsVisible,
        tasks: state.tasks.tasks,
        loading: state.loading.loading
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        changeVision(trueOrFalse) {
            dispatch(changeVision(trueOrFalse));
        },
        updateTasks(userList){
            dispatch(updateTasks(userList));
        },
        updateLoading(trueOrFalse){
            dispatch(updateLoading(trueOrFalse));
        }
    }
}

class Home extends Component {

    constructor(props) {
        super(props);
    }

    async componentWillMount(){
        this.props.updateLoading(true);
        try {
            await this.updateTasks();
        } finally {
            this.props.updateLoading(false);
        }
    }

    async componentDidUpdate(prevState){
        if (prevState.loading !== this.props.loading) return;
        this.updateTasks(); 
    }

    async updateTasks(){
        const tasks = await axios.get(URL);
        this.sortTasksByOrder(tasks.data);
        if (JSON.stringify(tasks.data) == JSON.stringify(this.props.tasks)) {
            return;  
        } 
        this.props.updateTasks(tasks.data);
    }

    sortTasksByOrder(taskList){
        taskList.sort((firstTask, secondTask)=>{
            return firstTask.order < secondTask.order ? -1 : firstTask.order > secondTask.order ? 1 : 0; 
        });
    }

    async completeTask(url, completed){
        await axios.patch(url,
        {
            completed
        });
        await this.updateTasks();
    }

    async deleteCompletedTasks(){
        this.props.updateLoading(true);
        const completedTasks = this.props.tasks.filter(task=>task.completed);
        try {
            for(const completedTask of completedTasks){
                await axios.delete(completedTask.url)
            }
            if (completedTasks.length === 0){
                alert('Não existem tarefas completas no momento');
                return;
            }
            await this.updateTasks();
        } finally {
            this.props.updateLoading(false);
        }
    }

    async editTask(url, title){
        if (title.length === 0) {
            alert('A tarefa deve ter um título');
        }
        this.props.updateLoading(true);
        try {
            await axios.patch(url,
            {
                title
            });
            await this.updateTasks();
        } finally {
            this.props.updateLoading(false);
        }
    }

    async deleteTask(url){
        const confirmation = window.confirm('Tem certeza que deseja excluir?');
        if (confirmation){
            this.props.updateLoading(true);
            try {
                await axios.delete(url);
                await this.updateTasks();
            } finally {
                this.props.updateLoading(false);
            }
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
            {
                this.props.loading ? <Spinner animation="border" variant="info" style={{position: 'absolute', zIndex: '1', left: '50%', top: '40%'}}/>
                : null    
            }
            <Card>
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link active={this.props.whichTableIsVisible === 1 ? true : false} onClick={() => this.props.changeVision(1)}><ListTask/></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link active={this.props.whichTableIsVisible === 2 ? true : false} onClick={() => this.props.changeVision(2)}><Exclamation/></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link active={this.props.whichTableIsVisible === 3 ? true : false} onClick={() => this.props.changeVision(3)}><Check/></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link active={this.props.whichTableIsVisible === 4 ? true : false} onClick={() => this.props.changeVision(4)}><CardText/></Nav.Link>
                    </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>
                    {this.props.whichTableIsVisible === 1 ? 
                    <Table
                        title='Tarefas'
                        deleteTask={url=>this.deleteTask(url)} 
                        completeTask={(url, completed)=>this.completeTask(url, completed)} 
                        editTask={(url, title)=>this.editTask(url, title)}
                        tasks={this.props.tasks} 
                        completed='trueAndFalse'
                        deleteCompletedTasks={()=>this.deleteCompletedTasks()}/> 
                    : this.props.whichTableIsVisible === 2 ? 
                    <Table
                        title='A fazer'
                        deleteTask={url=>this.deleteTask(url)} 
                        completeTask={(url, completed)=>this.completeTask(url, completed)}
                        editTask={(url, title)=>this.editTask(url, title)}
                        tasks={this.filterTasksNotCompleteds()}
                        deleteCompletedTasks={()=>this.deleteCompletedTasks()}/> 
                        : this.props.whichTableIsVisible === 3 ? 
                    <Table 
                        title='Conluídas'
                        deleteTask={url=>this.deleteTask(url)} 
                        completeTask={(url, completed)=>this.completeTask(url, completed)}
                        editTask={(url, title)=>this.editTask(url, title)}
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