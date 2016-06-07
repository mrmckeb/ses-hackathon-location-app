import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppLayout from './AppLayout';

export default class App extends Component {

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme() }>
        <AppLayout />
      </MuiThemeProvider>
    );
  }

}
