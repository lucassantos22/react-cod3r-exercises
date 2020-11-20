import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {changeTitleValue} from './reducers/titleAction';

function mapStateToProps(state) {
    return {
        title: state.title.value
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({changeTitleValue}, dispatch)
}

class TargetValue extends Component {
    render() {
        return (
            <>
                <h1>{this.props.title}</h1>
                <button onClick={this.props.changeTitleValue}>Alterar String</button>
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TargetValue)