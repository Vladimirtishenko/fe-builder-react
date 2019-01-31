import React from 'react'
import { combineReducers } from 'redux'

// Modules for combine reducers
import oauth from '../modules/oauth/reducers/oauth.rd.js'

const root = combineReducers({
    oauth
});

const initialState = root({}, {});

export default (state, action) => {

  if(action.type == 'LOG_OUT'){
    localStorage.removeItem('authToken');
    state = initialState;
  }

  return root(state, action);
}
