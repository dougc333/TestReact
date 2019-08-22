

function createStore(reducer){
  //1. state
  //2. get state
  //3. listen to changes on state
  //4. update state
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
    getState, subscribe,dispatch
  }
}


function goals (state = [], action) {
  switch(action.type) {
    case 'ADD_GOAL' :
      return state.concat([action.goal])
    case 'REMOVE_GOAL' :
      return state.filter((goal) => goal.id !== action.id)
    default :
      return state
  }
}

function todos(state=[], action){
  switch (action.type){
    case: 'ADD_TODO':
      return state.concat([action.todo]);
    case: 'REMOVE_TODO':
      return state.filter((todo)=>todo.id!==action.id);
    case: 'TOGGLE_TODO':
      return state.map((todo)=> todo.id!==action.id ? todo :
      Object.assign({},todo,{complete:!todo.complete}));
    default:
      return state
  }
}
  
    return state
}

function app (state = {}, action) {
  return {
    todos: todos(state.todos, action),
    goals: goals(state.goals, action),
  }
}


const store = createStore(app)

store.subscribe(()=>{
  console.log('new state;',store.getState())

})

store.dispatch({
  type:'ADd_TODO',
  todo: {
    id:0,
    name: 'redux',
    complete:false
  }
})





