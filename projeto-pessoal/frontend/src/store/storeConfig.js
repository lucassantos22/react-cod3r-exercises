import {createStore, combineReducers} from 'redux';
import isTableVisible from './reducers/isTableVisible';
import users from './reducers/users';

const reducers = combineReducers({
    isTableVisible,
    users
});

export default function storeConfig(){
    return createStore(reducers);
}