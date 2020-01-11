import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';
import store from './src/store';

import ToDosPage from './src/pages/ToDosPage';

const App = () => (
  <Provider store={store}>
    <ToDosPage />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));
