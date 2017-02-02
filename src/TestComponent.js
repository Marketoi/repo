import React from 'react';
import TextField from 'material-ui/TextField';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

const TestComponent = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <TextField
        hintText="Hint Text"
      /><br />
    </div>
  </MuiThemeProvider>
  );

export default TestComponent;
