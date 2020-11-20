import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import titleReducer from './reducers/titleReducer';

const reducers = combineReducers({
    title: titleReducer
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={createStore(reducers)}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
