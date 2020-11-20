import React from 'react';

export default props => (
    <button onClick={props.onClick} disabled={props.disabled} hidden={props.hidden}
            className={'btn btn-' + props.classes}>{props.action}</button>
)