import React from 'react';
import { object, oneOfType } from 'prop-types';

import Login from '../routes/oauth.router.jsx';

const AutentificationDecorator = (WrapedComponent) => {
	class Autentification extends React.Component {
		static propTypes = {
			oauth: oneOfType([object]),
			history: oneOfType([object]).isRequired
		}

		static defaultProps = {
			oauth: {}
		}

		constructor(props) {
			super(props);

			const { oauth: { isAuthenticating } } = props;
			this.state = { autentification: isAuthenticating };
		}

		componentDidMount() {
			const { autentification } = this.state,
				  { history: { push } } = this.props;

			if (!autentification) {
				push('/login');
			}
		}

		componentDidUpdate() {
			const { autentification } = this.state,
				  {
					oauth: { isAuthenticating, user = {} },
					history: { push }
				  } = this.props;

			if (user && !autentification) {
				push('/');
				this.setState({ autentification: isAuthenticating });
			}

			if (!user && autentification) {
				push('/login');
				this.setState({ autentification: isAuthenticating });
			}
		}

		render() {
			const { autentification } = this.state;

			if (autentification) {
				return (
					<WrapedComponent {...this.props} />
				);
			}

			return (
				<Login />
			);
		}
	}

	return Autentification;
};

export default AutentificationDecorator;
