import React, { Component } from 'react';
import logo from './logo.svg';

import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TestComponent from './TestComponent.js';
import TestComponent2 from './TestComponent2.js';
import './App.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class App extends Component {
  render() {
    return (
      <div className="App">
      <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <TestComponent />
          <TestComponent2 />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        </div>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
