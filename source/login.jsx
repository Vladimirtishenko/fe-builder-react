import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { func } from 'prop-types';

import Input from '../../../common/components/form/input.jsx';

import { required, email } from '../../../helpers/validation.helper.js';

@reduxForm({ form: 'signin', enableReinitialize: true })
class LoginForm extends React.Component {
	static propTypes = {
		handleSubmit: func.isRequired
	}

	render() {
		const { handleSubmit } = this.props;

		return (
            <form onSubmit={handleSubmit}>
				<Field
					component={Input}
					validate={[required, email]}
					label="Email"
					name="email"
					autoComplete="no-password"
				/>
				<Field
					component={Input}
					validate={[required]}
					label="Password"
					name="password"
					autoComplete="no-password"
					type="password"
				/>
                <button type="submit">Sign in</button>
            </form>
        );
	}
}

export default LoginForm;
