var riot = require('riot')
var redux = require('redux')
//var thunk = require('redux-thunk') ダメだった
var thunk = require('redux-thunk').default
var createLogger = require('redux-logger')

const logger = createLogger();

require('./tag/todo.tag')
require('./tag/todo-list.tag')
require('./tag/todo-form.tag')
require('./tag/loding-gif.tag')
require('./tag/error-message.tag')

var reducer = function(state = {tasks: []}, action) {
  switch(action.type) {
    case 'TASKS_LOADED':
      return Object.assign({}, state, {tasks: action.data})
    case 'TOGGLE_LOADING':
      return Object.assign({}, state, {isLoading: action.data})
    case 'TASK_ADDED':
      return Object.assign({}, state, {tasks: state.tasks.concat(action.data)})
    case 'TASK_COMPLETION_CHANGED':
      var taskIndex = state.tasks.findIndex(function(task){
        return task.id == action.data.id
      })
      var newTasks = [
        ...state.tasks.slice(0,taskIndex),
        Object.assign({},state.tasks[taskIndex],{isComplete:action.data.isComplete}),
        ...state.tasks.slice(taskIndex+1)
      ]
      return Object.assign({},state,{tasks:newTasks})
    case 'SHOW_ERROR':
      return Object.assign({},state,{isError:true, errorMessage:action.data})
    case 'HIDE_ERROR':
      return Object.assign({},state,{isError:false, errorMessage:''})
    default:
      return state
  }
}

var createStoreWithMiddleware = redux.compose(
  redux.applyMiddleware(thunk, logger)
)(redux.createStore)

var reduxStore = createStoreWithMiddleware(reducer)

document.addEventListener('DOMContentLoaded', () => {
  riot.mount('*', {store:reduxStore})
})
