const initialState = {
    whichTableIsVisible: 1
}

export default (state = initialState, action)=>{
    switch (action.type) {
        case 'VISION_CHANGED':
            return {
                ...state, whichTableIsVisible: action.payload
            }
        default:
            return state;
    }
}