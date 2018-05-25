import ActionTypes from './TodoActionTypes'
import TodoDispatcher from './TodoDispatcher'

const Actions = {
  addTodo(text) {
    TodoDispatcher.dispatcher({
      type: TodoActionTypes.ADD_TODO,
      text
    })
  }
}

export default Actions
