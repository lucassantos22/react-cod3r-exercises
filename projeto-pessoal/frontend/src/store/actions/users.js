// Action Creator
export const updateUsers = (userList)=>{
    return {
        type: 'UPDATE_USERS',
        payload: userList
    }
}