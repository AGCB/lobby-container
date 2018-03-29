import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App.js';
import rootReducer from './reducers/rootReducer'
import store from "./store";


ReactDOM.render(
	<Provider store={store}>
			<App />
	</Provider>
	, document.getElementById('root')
)
