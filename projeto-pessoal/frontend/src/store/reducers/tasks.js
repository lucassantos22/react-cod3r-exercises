const INITIAL_STATE = {
    tasks: []
}

export default (state=INITIAL_STATE, action)=> {
    switch (action.type) {
        case 'UPDATE_TASK':
            return {
                ...state, tasks: action.payload
            }
        default:
            return state;
    }
}