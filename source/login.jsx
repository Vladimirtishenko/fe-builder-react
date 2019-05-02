import React from 'react';
import { func } from 'prop-types';

import { ValidatorForm } from '../../../libraries/validation/index.js';
import Input from '../../../common/components/form/input.jsx';

class LoginForm extends React.Component {
	static propTypes = {
		submit: func.isRequired
	}

	render() {
		const { submit } = this.props;

		return (
            <ValidatorForm onSubmit={submit}>
				<Input
					validators={['required', 'isEmail']}
					errorMessages={['This field is required', 'Email pattern is not valid']}
					label="Email"
					name="email"
					autoComplete="no-password"
				/>
				<Input
					validators={['required']}
					errorMessages={['This field is required']}
					label="Password"
					name="password"
					autoComplete="no-password"
					type="password"
				/>
                <button type="submit">Sign in</button>
            </ValidatorForm>
        );
	}
}

export default LoginForm;
