import React, {Component} from 'react';
import Table from './templates/table/Table';
import Form from './templates/form/Form';

import {Card, Nav} from 'react-bootstrap';

import {connect} from 'react-redux';
import {changeVision} from '../store/actions/isTableVisible';

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

    render(){
        return(
            <>
            <Card>
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link active={this.props.isTableVisible === 1 ? true : false} onClick={() => this.props.changeVision(1)}>Tarefas</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link active={this.props.isTableVisible === 2 ? true : false} onClick={() => this.props.changeVision(2)}>A fazer</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link active={this.props.isTableVisible === 3 ? true : false} onClick={() => this.props.changeVision(3)}>Concluídas</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link active={this.props.isTableVisible === 4 ? true : false} onClick={() => this.props.changeVision(4)}>Formulário</Nav.Link>
                    </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>
                    {this.props.isTableVisible === 1 ? <Table/> : this.props.isTableVisible === 2 ? <Table/> : <Form/>}
                </Card.Body>
            </Card>
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)