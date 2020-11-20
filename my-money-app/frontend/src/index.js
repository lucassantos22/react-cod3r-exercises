import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { applyMiddleware, createStore} from "redux";
import {Provider} from 'react-redux';
import reducers from "./reducers";
import promise from 'redux-promise';

const store = applyMiddleware(promise)(createStore)(reducers);
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));