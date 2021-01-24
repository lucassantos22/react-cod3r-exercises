// Action Creator
export const updateTasks = (taskList)=>{
    return {
        type: 'UPDATE_TASK',
        payload: taskList
    }
}