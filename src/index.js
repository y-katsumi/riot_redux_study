var riot = require('riot')
var redux = require('redux')
var thunk = require('redux-thunk')

require('./tag/todo.tag')
require('./tag/todo_form.tag')

var reducer = function(state = {title: 'Default title'}, action) {
  console.log(action)
  switch(action.type) {
    case 'CHANGE_TITLE':
      // var newState = {title: action.data}
      // return newState
      return Object.assign({}, state, {title: action.data})
    default:
      return state
  }
}

var createStoreWithMiddleware = redux.compose(
  redux.applyMiddleware(thunk)
)(redux.createStore)

var reduxStore = redux.createStore(reducer)

document.addEventListener('DOMContentLoaded', () => {
  riot.mount('*', {store:reduxStore})
})
