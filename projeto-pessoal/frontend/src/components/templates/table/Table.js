import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateUsers} from '../../../store/actions/users';

import {Table, Button} from 'react-bootstrap';

import axios from 'axios';

const URL = 'http://localhost:3001/users';

const mapStateToProps = state =>{
    return {
        users: state.users.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateUsers(userList){
            dispatch(updateUsers(userList));
        }
    }
}

class TableComponent extends Component{

    constructor(props){
        super(props);
    }

    deleteUser = async (id)=>{
        const confirmation = window.confirm('Tem certeza?');
        if (confirmation){
            await axios.delete(`${URL}/${id}`);
            const newUserList = this.props.users.filter(user=>user.id != id);
            this.props.updateUsers(newUserList);
        } 
    }

    async componentWillMount(){
        const users = await axios.get(URL);
        this.props.updateUsers(users.data);
    }

    render(){
        return(
            <>
            <Table striped hover>
                <thead>
                    <tr>
                    <th>Primeiro Nome</th>
                    <th>Último Nome</th>
                    <th>Data de Nascimento</th>
                    <th>Cargo</th>
                    <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.users.map(user=>(
                        <tr>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.birth_date}</td>
                        <td>{user.charge}</td>
                        <td><Button variant="outline-danger" onClick={()=>this.deleteUser(user.id)}>Apagar</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent)