import React from 'react';
import { Provider } from 'react-redux';

import { BrowserRouter as Router } from 'react-router-dom';

import configureStore from '../store/store.js';

import Main from './main.jsx';

const store = configureStore({});

class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Main />
                </Router>
            </Provider>
        );
    }
}

export default Root;
