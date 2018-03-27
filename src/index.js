import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


ReactDOM.render(
	<MuiThemeProvider>
		<App />
	</MuiThemeProvider>
	, document.getElementById('root')
)