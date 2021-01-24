import {createStore, combineReducers} from 'redux';
import whichTableIsVisible from './reducers/whichTableIsVisible';
import users from './reducers/tasks';

const reducers = combineReducers({
    whichTableIsVisible,
    users
});

export default function storeConfig(){
    return createStore(reducers);
}