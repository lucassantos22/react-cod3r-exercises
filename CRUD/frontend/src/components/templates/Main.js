import React from 'react';

import Header from './Header';
import './Main.css';

export default props => (
    <>
        <Header {...props}/>
        <main className='conteudo'>
            Conteúdo
        </main>
    </>
)