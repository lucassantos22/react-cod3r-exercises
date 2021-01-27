import {createStore, combineReducers} from 'redux';
import whichTableIsVisible from './reducers/whichTableIsVisible';
import tasks from './reducers/tasks';
import loading from './reducers/loading';

const reducers = combineReducers({
    whichTableIsVisible,
    tasks,
    loading
});

export default function storeConfig(){
    return createStore(reducers);
}