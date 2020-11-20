import React from "react";

export default props => (
    <li className='treeview'>
        <a href>
            <i className={`fa fa-${props.icon}`}></i> {props.label}
        </a>
        <ul className='treeview-menu'>
            {props.children}
        </ul>
    </li>
)