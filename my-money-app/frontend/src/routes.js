import React from "react";
import { Router, Route, Redirect, hashHistory} from "react-router";

import Dashboard from "./dashboard/Dashboard";
import BillyngCycle from "./billingCycle/BillyngCycle";

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard}/>
        <Route path='/billingCycles' component={BillyngCycle}/>
        <Redirect from='*' to={BillyngCycle}/>
    </Router>
)