import React, {Component} from 'react';
import {connect} from 'react-redux';

import axios from 'axios';

import {Form, Button} from 'react-bootstrap';
import {changeVision} from '../../../store/actions/whichTableIsVisible';

const URL = 'https://todo-backend-express.herokuapp.com/';

const initialStale = {
    title: '',
    order: ''
}

const mapDispatchToProps = dispatch => {
    return {
        changeVision(trueOrFalse){
            dispatch(changeVision(trueOrFalse))
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
        if (this.state.title.length === 0 || this.state.order.length === 0){
            alert('Todos os campos devem ser preenchidos');
            return;
        }
        axios.post(URL, {
            title: this.state.title,
            order: this.state.order
        });
        this.props.changeVision(1);
    }

    render(){
        return(
            <>
            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Tarefa</Form.Label>
                <Form.Control onChange={e => this.setState({title:e.target.value})} type="text" required/>
                <Form.Text className="text-muted">
                Campo obrigatório
                </Form.Text>

                <Form.Label>Ordem</Form.Label>
                <Form.Control onChange={e => this.setState({order:e.target.value})} type="number" required/>
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

export default connect('', mapDispatchToProps)(FormComponent);