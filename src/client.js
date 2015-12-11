import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import ReactDOM from 'react-dom';
import App from './App';
import { createHistory, useBasename } from 'history';

const history = useBasename(createHistory)({
  basename: '/countdown-clock',
});

const Routes = (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={App} />
    </Route>
  </Router>
);


ReactDOM.render(Routes, document.getElementById('root'));
