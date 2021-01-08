const initialState = {
    isTableVisible: true
}

export default (state = initialState, action)=>{
    switch (action.type) {
        case 'VISION_CHANGED':
            return {
                ...state, isTableVisible: action.payload
            }
        default:
            return state;
    }
}