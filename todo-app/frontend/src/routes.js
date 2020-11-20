import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Todo from './todo/Todo';
import About from './about/About';

export default _ => (
    <BrowserRouter>
        <Switch>
            <Route path="/todos" component={Todo} />
            <Route path="/about" component={About} />
            <Route path="*" component={Todo}/>
        </Switch>
    </ BrowserRouter>
)