import React from 'react';
import { Route } from 'react-router-dom';

import Login from '../containers/oauth.cv.jsx';

const login = () => (
    <Route exact path="/login" component={Login} />
);

export default login;
