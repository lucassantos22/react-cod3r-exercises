// Action Creator
export function changeMinNumber(newNumber){
    return {
        type: 'NUM_MIN_CHANGED',
        payload: newNumber
    }

}

// Action Creator
export function changeMaxNumber(newNumber){
    return {
        type: 'NUM_MAX_CHANGED',
        payload: newNumber
    }

}