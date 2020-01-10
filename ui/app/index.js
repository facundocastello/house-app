import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux'
import store from './src/store'

import FirstComponent from './src/FirstComponent';


class App extends React.Component {
  render() {
    return (
      <FirstComponent store={store}>
        asd
      </FirstComponent>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
