import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Logo from '../components/templates/Logo';
import Main from '../components/templates/Main';
import Nav from '../components/templates/Nav';
import Footer from '../components/templates/Footer';

export default () => (
    <div className='app'>
        <Logo/>
        <Nav/>
        <Main icon="home" title="Inicio" subtitle="Segundo projeto do capítulo React."/>
        <Footer/>
    </div>
)