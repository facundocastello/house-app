import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './src/store';
import ToDosPage from './src/pages/ToDosPage';
import './index.css';
import TasksPage from './src/pages/TasksPage';

const App = () => (
  <Provider store={store}>
    <Router>
      <Link to='/todos'> To Dos </Link>
      <Link to='/tasks'> Tasks </Link>
      <Route path="/todos" component={ToDosPage} />
      <Route path="/tasks" component={TasksPage} />
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));
