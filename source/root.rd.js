import { combineReducers } from 'redux';

// Modules for combine reducers
import oauth from '../modules/oauth/reducers/oauth.rd.js';
import warnings from '../libraries/warnings/reducers/index.rd.js';

const root = combineReducers({
    oauth,
    warnings
}),
initialState = root({}, {});

export default (state, action) => {
    if (action.type === 'LOG_OUT') {
        localStorage.removeItem('authToken');
        state = initialState;
    }
    return root(state, action);
};
