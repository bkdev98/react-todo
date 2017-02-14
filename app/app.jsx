var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');
import Login from 'Login';

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

// store.subscribe(() => {
//   var state = store.getState();
//   console.log('New state', state);
//   TodoAPI.setTodos(state.todos);
// });

// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

store.dispatch(actions.startAddTodos());

//  Load foundation
$(document).foundation();

//  App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Router path="/">
        <Router path="todos" component={TodoApp}></Router>
        <IndexRoute component={Login}></IndexRoute>
      </Router>
    </Router>
  </Provider>,
  document.getElementById('app')
);
