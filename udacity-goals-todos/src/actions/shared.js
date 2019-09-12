import API from 'goals-todos-api'


export const RECEIVE_DATA = 'RECEIVE_DATA'
function receiveDataAction(todos,goals){
    return{
      type:RECEIVE_DATA,
      todos,
      goals
    }
}
  
function handleInitialData(){
    return(dispatch)=>{
      return Promise.all([
      API.fetchTodos(),
      API.fetchGoals()])
      .then(([todos,goals])=>{
        //console.log('todos:',todos)
        //console.log('goals:',goals)
        dispatch(receiveDataAction(todos,goals))
      })
    }
  }