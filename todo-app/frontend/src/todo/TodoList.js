import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {update} from "./TodoActions";
import {del} from "./TodoActions";

const TodoList = props => (
    <table className="table">
        <thead className="thead-dark">
        <tr>
            <th scope="col">Descrição</th>
            <th scope="col">Data de Criação</th>
            <th scope="col">Status</th>
            <th scope="col">Ação</th>
            <th scope="col">Ação</th>
        </tr>
        </thead>
        <tbody>
        {props.list ? props.list.map((value, index) => {
            return (
                <tr key={index}>
                    <td>{value.description}</td>
                    <td>{value.createdAt}</td>
                    <td>{value.done ? 'Concluído' : 'Pendente'}</td>
                    <td>
                        <button onClick={() => props.update(value)} type="button" className="btn btn-info">{value.done ? 'Em processo' : 'Concluir'}</button>
                    </td>
                    <td>
                        <button onClick={() => props.del(value['_id'])} type="button" className="btn btn-danger">Excluir</button>
                    </td>
                </tr>
            );
        }): false}
        </tbody>
    </table>
)

function mapStateToProps(state){
    return {
        list: state.todo.list
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({update, del}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)