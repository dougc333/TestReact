

function createStore(reducer){
  
  let state 
  listeners = []

  const getState = ()=> state
  const subscribe = (listner)=>{
    listeners.push(listner)
    return ()=>{
      listeners = listeners.filter((l)=>l!=listner)
    }
  }

  const dispatch = (action)=>{
    state = reducer(state,action)
    listeners.forEach((l)=>l())
  }

  return {
    getState, sbuscribe,dispatch
  }
}





function todos(state=[], action){
  if (action.type==='ADD_TODO')
    return state.concat([action.todo])
  return getState
}





