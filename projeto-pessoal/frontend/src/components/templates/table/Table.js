import React from 'react';

import {Table, Button, Card} from 'react-bootstrap';
import { Check, TrashFill, Exclamation } from 'react-bootstrap-icons';

export default props => (

    <Table striped hover>
        {props.tasks.length > 0 ? 
            <>
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Tarefa</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {props.tasks.map(task=>(
                        <tr>
                            <td>{task.completed ? <Button onClick={()=>props.completeTask(task.url, false)} variant='success'><Check size='20'/></Button> : <Button onClick={()=>props.completeTask(task.url, true)} variant='warning'><Exclamation size='20'/></Button>}</td>
                            {task.completed === true? <td style={{textDecoration: "line-through"}}>{task.title}</td> : <td>{task.title}</td>}
                            {!task.completed ? <td><Button variant="danger" onClick={()=>props.deleteTask(task.url)}><TrashFill/></Button></td> : <td><Button variant="secondary" disabled><TrashFill/></Button></td>}
                        </tr>
                    ))}
                </tbody>
                <br/>
                {props.completed ?
                    <Button variant="primary"  size="sm" onClick={()=>props.deleteCompletedTasks()}>
                        Limpar tarefas concluídas
                    </Button>
                    : null
                }
            </>
        : 
            <Card>
            <Card.Body>
                <Card.Title id='Sobre'>Lista vazia</Card.Title>
                <Card.Text>
                    Ops! Não existem tarefas {props.completed === true ? 'concluídas' : !props.completed ? 'em andamento' : ''} cadastradas :(
                </Card.Text>
            </Card.Body>
            </Card>
        }
    </Table>
    
)