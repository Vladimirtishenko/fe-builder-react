import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import reducers from '../reducers/root.rd.js';
import thunk from 'redux-thunk'

const enhancer = compose(
    applyMiddleware(thunk)
);

export default function configureStore(initialState = {}) {
    const store = createStore(reducers, initialState, enhancer);
    return store;
}
