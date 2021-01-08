import React, {Component} from 'react';
import {connect} from 'react-redux';

import axios from 'axios';

import {Form, Button} from 'react-bootstrap';
import {changeVision} from '../../../store/actions/isTableVisible';

const URL = 'http://localhost:3001/users';

const initialStale = {
    id: '',
    first_name: '',
    last_name: '',
    birth_date: '',
    charge: ''
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

    sendUser = (e) =>{
        e.preventDefault();
        axios.post(URL, {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            birth_date: this.state.birth_date,
            charge: this.state.charge
        });
        this.props.changeVision(true);
    }

    render(){
        return(
            <>
            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Primeiro Nome</Form.Label>
                <Form.Control onChange={e => this.setState({first_name:e.target.value})} type="text"/>
                <Form.Text className="text-muted">
                Campo obrigatório
                </Form.Text>
            </Form.Group>
        
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Último Nome</Form.Label>
                <Form.Control type="text" onChange={e => this.setState({last_name:e.target.value})}/>
                <Form.Text className="text-muted">
                Campo obrigatório
                </Form.Text>
            </Form.Group>
        
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Data de Nascimento</Form.Label>
                <Form.Control type="date" onChange={e => this.setState({birth_date:e.target.value})}/>
                <Form.Text className="text-muted">
                Campo obrigatório
                </Form.Text>
            </Form.Group>
        
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Cargo</Form.Label>
                <Form.Control type="text" onChange={e => this.setState({charge:e.target.value})}/>
                <Form.Text className="text-muted">
                Campo obrigatório
                </Form.Text>
            </Form.Group>
        
            <Button variant="primary" type="submit" onClick={e => this.sendUser(e)}>
                Adicionar
            </Button>
            </Form>
            </>
        )
    }
} 

export default connect('', mapDispatchToProps)(FormComponent);