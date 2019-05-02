import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
	object,
	oneOfType
} from 'prop-types';

import * as authorization from '../actions/oauth.action.js';

import LoginForm from '../components/login.jsx';

import EventHandling from '../../../libraries/warnings/index.jsx';

import serialize from '../../../helpers/serialize.helper.js';

const mapStateToProps = (state) => {
	return { ...state.oauth };
},

mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators({
			...authorization
		}, dispatch),
		dispatch
	};
};

@connect(mapStateToProps, mapDispatchToProps)
class Login extends React.Component {
	static propTypes = {
		actions: oneOfType([object]).isRequired
	}

	handleSubmit(e) {
		e.preventDefault();

		const form = e && e.target,
			  creds = serialize(form),
			  { actions: { login } } = this.props;

		login(creds);
	}

	render() {
		return (
			<React.Fragment>
				<EventHandling />
				<LoginForm submit={::this.handleSubmit} {...this.props} />
			</React.Fragment>
		);
	}
}

export default Login;
