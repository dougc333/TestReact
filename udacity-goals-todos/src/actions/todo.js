import API from '../../node_modules/goals-todos-api'

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
//video removed Action suffix from all the functions and calls using these functions
export  function addTodoAction(todo) {
    return {
        type: ADD_TODO,
        todo,
    }
}

export  function removeTodoAction(id) {
    return {
        type: REMOVE_TODO,
        id,
    }
}

export  function toggleTodoAction(id) {
    return {
        type: TOGGLE_TODO,
        id,
    }
}

//instead of returning an object return a function. Good technique. 
export  function handleDeleteTodo(todo) {
    return (dispatch) => {
        dispatch(removeTodoAction(todo.id))
        return API.deleteTodo(todo.id).catch(() => {
            dispatch(addTodoAction(todo))
            alert('error removeItem adding back')
        })
    }
}
export function handleAddTodo(name, cb) {
    return (dispatch) => {
        return API.saveTodo(name)
            .then((todo) => {
                dispatch(addTodoAction(todo))
                cb()
            }).catch(() =>
                alert('error todo addItem')
            )
    }
}
export function handleToggle(id) {
    return (dispatch) => {
        dispatch(toggleTodoAction(id))
        return API.saveTodoToggle(id).catch(() => {
            dispatch(toggleTodoAction(id))
            alert('toggleItem addign back')
        })
    }
}


export default ADD_TODO