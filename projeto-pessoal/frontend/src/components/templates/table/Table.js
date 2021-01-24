import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateTasks} from '../../../store/actions/tasks';

import {Table, Button} from 'react-bootstrap';
import { Check, TrashFill } from 'react-bootstrap-icons';

import axios from 'axios';

const URL = 'https://todo-backend-express.herokuapp.com/';

const mapStateToProps = state =>{
    return {
        tasks: state.users.tasks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateTasks(userList){
            dispatch(updateTasks(userList));
        }
    }
}

class TableComponent extends Component{

    constructor(props){
        super(props);
    }

    deleteUser = async (url)=>{
        const confirmation = window.confirm('Tem certeza?');
        if (confirmation){
            const id = url.split('/')[1];
            await axios.delete(`${URL}/${id}`);
            const newUserList = this.props.tasks.filter(task=>task.url != url);
            this.props.updateTasks(newUserList);
        } 
    }

    async componentWillMount(){
        const tasks = await axios.get(URL);
        this.props.updateTasks(tasks.data);
    }

    render(){
        return(
            <>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Tarefa</th>
                        <th>Ordem</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.tasks.map(task=>(
                        <tr>
                        <td><Button variant='success'>{task.completed}<Check size='20'/></Button></td>
                        <td>{task.title}</td>
                        <td>{task.order}</td>
                        <td><Button variant="danger" onClick={()=>this.deleteUser(task.url)}><TrashFill/></Button>{' '}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent)