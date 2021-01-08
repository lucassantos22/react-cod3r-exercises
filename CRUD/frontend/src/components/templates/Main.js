import React from 'react';

import Header from './Header';
import './Main.css';

export default props => (
    <>
        <Header {...props}/>
        <main className='conteudo container-fluid '>
            <div className='p-3 mt-3'>
                {props.children}
            </div>
        </main>
    </>
)