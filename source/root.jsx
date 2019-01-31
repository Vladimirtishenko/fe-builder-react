import React, { Component } from 'react';
import { Provider } from 'react-redux';

import {
  browserHistory,
  BrowserRouter as Router,
  Switch,
  Link
} from 'react-router-dom';

import configureStore from '../store/store.js';

import Main from './main.jsx'

const store = configureStore({});

class Root extends Component
{
    constructor(props, context)
    {
    	super(props, context);
    }

    render(){

    	return (
    		<Provider store={store}>

                  <Router history={browserHistory}>
                        <Main />
                  </Router>

    		</Provider>
    	)
    }
}

export default Root;
