import axios from 'axios';

const URL = 'http://localhost:8000/api/todos';

export const changeDescription = e =>{
    return {
        type: 'DESCRIPTION_CHANGED',
        payload: e.target.value
    }
};

export const search = (e) => {
    if(e){
        e.preventDefault();
    }
    return (dispatch, getState) => {
        const description = getState().todo.description;
        const search = description ? `&description__regex=${description}` : '';
        axios.get(`${URL}?sort=-createdAt${search}`).then(
            res=>dispatch({type: 'TODO_SEARCH', payload: res.data}));
    };
};

export const add = description => {
    return dispatch => {
        axios.post(URL, {description}).then(()=>dispatch(clear())).then(()=>dispatch(search()));
    }
};

// export const add = description => {
//     const request = axios.post(URL, {description});
//     return [{
//         type: 'TODO_ADDED',
//         payload: request
//     },
//     search()]
// };

export const update = obj => {
    return dispatch => {
        axios.put(`${URL}/${obj._id}`, {
            done: !obj.done
        }).then(()=>dispatch(search()));
    }
};

export const del = id => {
    return dispatch => {
        if (id) {
            axios.delete(`${URL}/${id}`).then(()=>dispatch(search()));
        };
    };
};

export const clear = e=>{
    e.preventDefault();
    return [{type: 'TODO_CLEAR'},search()];
};