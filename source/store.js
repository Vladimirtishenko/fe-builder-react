import thunk from 'redux-thunk';

import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers/root.rd.js';


const enhancer = compose(
    applyMiddleware(thunk),
);

export default function configureStore(initialState = {}) {
    const store = createStore(reducers, initialState, enhancer);
    return store;
}
