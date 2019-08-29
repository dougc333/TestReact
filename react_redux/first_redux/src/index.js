
//this is the same as index10.js
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

//Use consts instead of strings
const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const ADD_GOAL = 'ADD_GOAL'
const REMOVE_GOAL = 'REMOVE_GOAL'

function addToDoAction(todo){
  return {
    type:ADD_TODO,
    todo
  }
}

function removeToDoAction(id){
  return{
    type:REMOVE_TODO,
    id
  }
}

function toggleToDoAction(id){
  return{
    type:TOGGLE_TODO,
    id
  }
}

function addGoalAction(goal){
  return{
    type:ADD_GOAL,
    goal
  }
}

function removeGoalAction(id){
  return{
    type:REMOVE_GOAL,
    id
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
    case 'ADD_TODO':
      return state.concat([action.todo]);
    case 'REMOVE_TODO':
      return state.filter((todo)=>todo.id!==action.id);
    case 'TOGGLE_TODO':
      return state.map((todo)=> todo.id!==action.id ? todo :
      Object.assign({},todo,{complete:!todo.complete}));
    default:
      return state
  }
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

store.dispatch(addToDoAction({
  id:2,
  name: 'Go gym',
  complete:true
}))

store.dispatch(removeToDoAction(1))

store.dispatch(toggleToDoAction(0))

store.dispatch(addGoalAction({
  id:0,
  name:'learn redux'
}))

store.dispatch(addGoalAction({
  id:1,
  name:'lose weight too fat'
}))

store.dispatch(removeGoalAction(0))
