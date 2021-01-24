import React, {Component} from 'react';
import Table from './templates/table/Table';
import Form from './templates/form/Form';

import {Card, Nav} from 'react-bootstrap';

import {connect} from 'react-redux';
import {changeVision} from '../store/actions/isTableVisible';
import {updateTasks} from '../store/actions/tasks';

import axios from 'axios';

const URL = 'https://todo-backend-express.herokuapp.com/';

const mapStateToProps = state =>{
    return {
        isTableVisible: state.isTableVisible.isTableVisible,
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
                        <Nav.Link active={this.props.isTableVisible === 1 ? true : false} onClick={() => this.props.changeVision(1)}>Tarefas</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link active={this.props.isTableVisible === 2 ? true : false} onClick={() => this.props.changeVision(2)}>A fazer</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link active={this.props.isTableVisible === 3 ? true : false} onClick={() => this.props.changeVision(3)}>Concluídas</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link active={this.props.isTableVisible === 4 ? true : false} onClick={() => this.props.changeVision(4)}>Formulário</Nav.Link>
                    </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>
                    {this.props.isTableVisible === 1 ? <Table tasks={this.props.tasks} completed='trueAndFalse'/> : this.props.isTableVisible === 2 ? <Table tasks={this.filterTasksNotCompleteds()}/> : this.props.isTableVisible === 3 ? <Table tasks={this.filterTasksCompleteds()} completed={true}/> : <Form/>}
                </Card.Body>
            </Card>
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)