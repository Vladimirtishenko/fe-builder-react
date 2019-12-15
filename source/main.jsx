import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Decorators
import autentification from '../modules/oauth/decorators/autentification.dec.jsx';

// Routes
import routes from '../routes/common.route.jsx';

// Components
import Error from '../common/components/error/error.jsx';

function mapStateToProps(state) {
    return {
        ...state
    };
}

@withRouter
@connect(mapStateToProps)
@autentification
class Main extends React.Component {
    render() {
        return (
            <Switch>
                {
                    routes && routes.length && routes.map((item) => {
                        const { path, component } = item;
                        return (
                            <Route key={path} exact path={path} component={component} />
                        );
                    })
                }
                <Route component={Error} />
            </Switch>
        );
    }
}

export default Main;
