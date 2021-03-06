import 'babel-polyfill';
import React from 'react';
import {
  render
} from 'react-dom';
// eslint-disable-next-line import/default
import configureStore from './store/configureStore';
import {
  Provider
} from 'react-redux';
import {
  Router,
  browserHistory
} from 'react-router';
import routes from './routes';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorAction';
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());
render(
  <Provider store={store}>
  <Router history={
      browserHistory
    }
    routes={
      routes
    }
  />
  </Provider>,
  document.getElementById('app')
  );
