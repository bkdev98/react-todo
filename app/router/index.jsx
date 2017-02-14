import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import TodoApp from 'TodoApp';
import Login from 'Login';
import firebase from 'app/firebase/';

var requireLogin = (nextState, replace, next) => {
  if (!firebase.auth().currentUser) {
    replace('/');
  }
  next();
};

var redirectIfLogin = (nextState, replace, next) => {
  if (firebase.auth().currentUser) {
    replace('/todos');
  }
  next();
};

export default (
  <Router history={hashHistory}>
    <Router path="/">
      <Router path="todos" component={TodoApp} onEnter={requireLogin}></Router>
      <IndexRoute component={Login} onEnter={redirectIfLogin}></IndexRoute>
    </Router>
  </Router>
);
