import React, {Component} from 'react';

import {Table, Button, Card} from 'react-bootstrap';
import { Check, TrashFill, Exclamation } from 'react-bootstrap-icons';

import axios from 'axios';

export default class TableComponent extends Component{

    constructor(props){
        super(props);
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

    render(){
        return(
            <>
            <Table striped hover>
                {this.props.tasks.length > 0 ? 
                    <>
                        <thead>
                            <tr>
                                <th>Status</th>
                                <th>Tarefa</th>
                                <th>Ordem</th>
                                {!this.props.completed || this.props.completed == 'trueAndFalse' ? <th>Ação</th> : null}
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.tasks.map(task=>(
                                <tr>
                                <td>{task.completed ? <Button variant='success'><Check size='20'/></Button> : <Button variant='warning'><Exclamation size='20'/></Button>}</td>
                                {this.props.completed === true? <td style={{textDecoration: "line-through"}}>{task.title}</td> : <td>{task.title}</td>}
                                <td>{task.order}</td>
                                {!task.completed ? <td><Button variant="danger" onClick={()=>this.deleteTask(task.url)}><TrashFill/></Button></td> : <Button variant="secondary"><TrashFill/></Button>}
                                </tr>
                            ))}
                        </tbody>
                    </>
                : 
                    <Card>
                    <Card.Body>
                        <Card.Title id='Sobre'>Lista vazia</Card.Title>
                        <Card.Text>
                            Ops! Não existem tarefas {this.props.completed === true ? 'concluídas' : !this.props.completed ? 'em andamento' : ''} cadastradas :(
                        </Card.Text>
                    </Card.Body>
                    </Card>
                }
            </Table>
        </>
        )
    }
}