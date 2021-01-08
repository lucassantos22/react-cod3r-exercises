import React, {Component} from 'react';
import Table from './templates/table/Table';
import Form from './templates/form/Form';

import {Card, Nav} from 'react-bootstrap';

import {connect} from 'react-redux';
import {changeVision} from '../store/actions/isTableVisible';

const initialState = {
    isTableVisible: true
}

const mapStateToProps = state =>{
    return {
        isTableVisible: state.isTableVisible.isTableVisible
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        changeVision(trueOrFalse) {
            dispatch(changeVision(trueOrFalse));
        }
    }
}


class Home extends Component {

    constructor(props) {
        super(props);
    }

    state = {...initialState}

    render(){
        return(
            <>
            <Card>
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link active={this.props.isTableVisible ? true : false} onClick={() => this.props.changeVision(true)}>Lista</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link active={this.props.isTableVisible ? false : true} onClick={() => this.props.changeVision(false)}>Formulário</Nav.Link>
                    </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>
                    {this.props.isTableVisible ? <Table/> : <Form/>}
                </Card.Body>
            </Card>
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)