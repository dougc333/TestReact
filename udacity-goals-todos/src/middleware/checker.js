import ADD_TODO from '../actions/todo'
import ADD_GOAL from '../actions/goals'


const checker=(store)=>(action)=>(next)=> {
    return function(next){
      return function(action){
        //have access to store,next and action
        if(
          action.type===ADD_TODO &&
          action.todo.name.toLowerCase().includes('bitcoin')
        )
        {
          return alert('bad idea')
        }
        if(
          action.type===ADD_GOAL && action.goal.name.toLowerCase().includes('bitcoin')        
        ){
          return alert('still bad idea')
        }
          return next(action)
        }
    }
}
  
export default checker
