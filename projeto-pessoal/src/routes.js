import React from "react";
import {Switch, Route} from 'react-router-dom';

import Home from './components/Home';
import Sobre from './components/Sobre';
import Error404 from './components/templates/404';

export default props => (
    <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/sobre" component={Sobre} />
        <Route path='*' component={Error404} />
    </Switch>
)