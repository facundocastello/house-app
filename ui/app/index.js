import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import FirstComponent from './src/FirstComponent';

class App extends React.Component {
  render() {
    return (
      <div>
        <FirstComponent />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
