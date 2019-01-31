import React from 'react';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { CombineRoutes } from '../routes/common.route.jsx';

function mapStateToProps(state) {
    return {
        ...state
    };
}

@withRouter
@connect(mapStateToProps)
class Main extends React.Component {
    render() {
        return (
            <CombineRoutes />
        );
    }
}

export default Main;
