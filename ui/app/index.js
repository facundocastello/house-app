import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './src/store';
import ToDosPage from './src/pages/ToDosPage';
import './index.css';
import TasksPage from './src/pages/TasksPage';
import Menu from './src/components/Menu';
import styled, { createGlobalStyle } from 'styled-components';
import { colors } from './src/utils/constants';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${colors.font};
    margin: 0px; 
    background-color: ${colors.background};
    font-family: monospace;
  }
`;

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Router>
      <Menu />
      <Route path='/todos' component={ToDosPage} />
      <Route path='/tasks' component={TasksPage} />
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));
