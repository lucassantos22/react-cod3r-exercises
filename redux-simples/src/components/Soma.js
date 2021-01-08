import React from 'react';
import {connect} from 'react-redux';

import Card from './Card';

const Soma = props => {

    const {min, max} = props;

    return (
        <Card blue title="Soma dos Números">
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{min + max}</strong>
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

export default connect(mapStateToProps)(Soma);