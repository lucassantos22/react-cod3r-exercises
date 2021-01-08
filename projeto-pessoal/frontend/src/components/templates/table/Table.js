import React, {Component} from 'react';
import {Table, Button} from 'react-bootstrap';

import axios from 'axios';

const URL = 'http://localhost:3001/users';

const initialState = {
    users:[]
}

export default class TableComponent extends Component{

    deleteUser = async (id)=>{
        const confirmation = window.confirm('Tem certeza?');
        if (confirmation){
            await axios.delete(`${URL}/${id}`);
            const newUserList = this.state.users.filter(user=>user.id != id);
            this.setState({users: newUserList});
        } 
    }

    async componentWillMount(){
        const users = await axios.get(URL);
        this.setState({users: users.data});
    }

    state = {...initialState};

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
                    {this.state.users.map(user=>(
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