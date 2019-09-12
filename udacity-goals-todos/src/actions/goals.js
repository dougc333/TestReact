import API from '../../node_modules/goals-todos-api'

export const ADD_GOAL = 'ADD_GOAL'
export const REMOVE_GOAL = 'REMOVE_GOAL'

export function addGoalAction (goal) {
    return {
      type: ADD_GOAL,
      goal,
    }
  }
 export function removeGoalAction (id) {
    return {
      type: REMOVE_GOAL,
      id,
    }
  }


  function handleAddGoal(name,cb){
    return (dispatch)=>{
      return API.saveGoal(name)
      .then((goal)=>{
        dispatch(addGoalAction(goal))
        cb()
      })
      .catch(()=>
        alert("goal addItem error")
      )
    }
}

function handleDeleteGoal(goal){
  return (dispatch) => {
    dispatch(removeGoalAction(goal.id))

    return API.deleteGoal(goal.id)
    .catch( ()=>{
      dispatch(addGoalAction(goal))
      alert('an error goadd added back')
    })
  }
}
export default ADD_GOAL