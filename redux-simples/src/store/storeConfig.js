import {createStore, combineReducers} from 'redux';
import numbers from './reducers/numbers';

const reducers = combineReducers({
    numbers
});

export default function storeConfig(){
    return createStore(reducers);
}