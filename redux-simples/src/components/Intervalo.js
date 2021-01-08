import './Intervalo.css';
import React from 'react';
import {connect} from 'react-redux';

import Card from './Card';
import {changeMinNumber, changeMaxNumber} from '../store/actions/numbers';

const Intervalo = props => {

    const {min, max} = props;

    return (
        <Card red title="Intervalo de Números">
            <div className='Intervalo'>
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min} onChange={e => props.changeMin(+e.target.value)}/>
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max} onChange={e => props.changeMax(+e.target.value)}/>
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        min: state.numbers.min,
        max: state.numbers.max,     
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeMin(newNumber) {
            dispatch(changeMinNumber(newNumber));
        },
        changeMax(newNumber) {
            dispatch(changeMaxNumber(newNumber));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);