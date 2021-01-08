import {createStore, combineReducers} from 'redux';
import isTableVisible from './reducers/isTableVisible';

const reducers = combineReducers({
    isTableVisible
});

export default function storeConfig(){
    return createStore(reducers);
}