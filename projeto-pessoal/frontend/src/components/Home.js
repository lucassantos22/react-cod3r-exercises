import React, {Component} from 'react';
import Table from './templates/table/Table';
import Form from './templates/form/Form';

import {Card, Nav} from 'react-bootstrap';

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
        const tasks = await axios.get(URL);
        this.props.updateTasks(tasks.data);
    }

    deleteTask = async (url)=>{
        const confirmation = window.confirm('Tem certeza?');
        if (confirmation){
            const id = url.split('/')[1];
            await axios.delete(`${URL}/${id}`);
            const newUserList = this.props.tasks.filter(task=>task.url != url);
            this.props.updateTasks(newUserList);
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
                        <Nav.Link active={this.props.whichTableIsVisible === 1 ? true : false} onClick={() => this.props.changeVision(1)}>Tarefas</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link active={this.props.whichTableIsVisible === 2 ? true : false} onClick={() => this.props.changeVision(2)}>A fazer</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link active={this.props.whichTableIsVisible === 3 ? true : false} onClick={() => this.props.changeVision(3)}>Concluídas</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link active={this.props.whichTableIsVisible === 4 ? true : false} onClick={() => this.props.changeVision(4)}>Formulário</Nav.Link>
                    </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>
                    {this.props.whichTableIsVisible === 1 ? <Table deleteTask={url=>this.deleteTask(url)} tasks={this.props.tasks} completed='trueAndFalse'/> 
                    : this.props.whichTableIsVisible === 2 ? <Table deleteTask={url=>this.deleteTask(url)} tasks={this.filterTasksNotCompleteds()}/> 
                    : this.props.whichTableIsVisible === 3 ? <Table deleteTask={url=>this.deleteTask(url)} tasks={this.filterTasksCompleteds()} completed={true}/> 
                    : <Form/>}
                </Card.Body>
            </Card>
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)