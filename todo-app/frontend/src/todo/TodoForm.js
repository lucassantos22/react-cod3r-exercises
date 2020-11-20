import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import Grid from '../template/Grid';
import Button from '../template/Button';
import {changeDescription, search, add, clear} from "./TodoActions";

class TodoForm extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.search();
    }

    render() {
        return (
            <form className="form-inline">
                <Grid cols='12 9 10'>
                    <input value={this.props.description} className="form-control" id="inputPassword2"
                           onChange={e => this.props.changeDescription(e)} placeholder="Tarefa"/>
                </Grid>
                <Grid cols='12 3 2'>
                    <Button onClick={() => this.props.add(this.props.description)} classes="primary ml-1" action='Adicionar' hidden={false}/>
                    <Button onClick={e => this.props.search(e)} classes="primary ml-1 btn-success" action='Pesquisar'
                            hidden={false}/>
                    <Button onClick={this.props.clear} classes="primary ml-1 btn-danger" action='Limpar'
                            hidden={false}/>
                </Grid>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        description: state.todo.description
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({changeDescription, search, add, clear}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);