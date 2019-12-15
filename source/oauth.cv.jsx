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

const mapStateToProps = (state) => {
	return {
		...state.oauth,
		realTimeForm: state.form
	};
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
		actions: oneOfType([object]).isRequired,
		realTimeForm: oneOfType([object])
	}

	static defaultProps = {
		realTimeForm: {}
	}

	handleSubmit() {
		const {
			actions: { login },
			realTimeForm: {
				signin: {
					values
				}
			}
		} = this.props;

		login(values);
	}

	render() {
		return (
			<React.Fragment>
				<EventHandling />
				<LoginForm
					onSubmit={::this.handleSubmit}
					{...this.props}
				/>
			</React.Fragment>
		);
	}
}

export default Login;
