import React, {Component} from 'react';
import {connect} from 'react-redux';

import axios from 'axios';

import {Form, Button} from 'react-bootstrap';
import {changeVision} from '../../store/actions/whichTableIsVisible';
import {updateTasks} from '../../store/actions/tasks';
import {updateLoading} from '../../store/actions/loading';

const URL = 'https://todo-backend-express.herokuapp.com/';

const initialStale = {
    title: '',
    order: ''
}

const mapStateToProps = state =>{
    return {
        tasks: state.tasks.tasks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeVision(trueOrFalse){
            dispatch(changeVision(trueOrFalse))
        },
        updateTasks(tasks){
            dispatch(updateTasks(tasks))
        },
        updateLoading(trueOrFalse){
            dispatch(updateLoading(trueOrFalse));
        }
    }
}

class FormComponent extends Component {

    constructor(props){
        super(props);
    }

    state = {...initialStale};

    sendTask = async (e) =>{
        e.preventDefault();
        if (this.state.title.length === 0){
            alert('A tarefa deve ter um título');
            return;
        }
        if (this.state.title.length > 40){
            alert('A tarefa não deve ultrapassar 40 caracteres');
            return;
        }
        this.props.updateLoading(true);
        try{
            axios.post(URL, {
                title: this.state.title,
                order: this.props.tasks.length + 1
            });
            const tasks = await axios.get(URL);
            this.props.updateTasks(tasks.data)
        } finally {
            this.props.updateLoading(false);
        }
        this.props.changeVision(1);
    }

    render(){
        return(
            <>
            <h3>Cadastrar</h3>
            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Tarefa</Form.Label>
                <Form.Control onChange={e => this.setState({title:e.target.value})} type="text" required/>
                <Form.Text className="text-muted">
                Campo obrigatório
                </Form.Text>
            </Form.Group>
        
            <Button variant="primary" type="submit" onClick={e => this.sendTask(e)}>
                Adicionar
            </Button>
            </Form>
            </>
        )
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);