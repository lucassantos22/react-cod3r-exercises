import React from 'react';
import {connect} from 'react-redux';

import Card from './Card';

const Sorteio = props => {

    const {min, max} = props;

    return (
        <Card purple title="Sorteio de um Número">
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{parseInt(Math.random() * (max - min) + min)}</strong>
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        min: state.numbers.min,
        max: state.numbers.max
    }
}

export default connect(mapStateToProps)(Sorteio);