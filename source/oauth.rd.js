import jwtDecode from 'jwt-decode';
import { LOG_OUT, LOG_IN } from '../constants/oauth.const.js';

const initialState = (token => ({
	isAuthenticating: !!token,
	user: token ? jwtDecode(token) : null
}))(localStorage.authToken);

export default function oauth(state = initialState, action) {
	switch (action.type) {
		case LOG_IN:
			return {
				isAuthenticating: true,
				user: action.user
			};

		case LOG_OUT:
			localStorage.removeItem('authToken');

			return {
				...state,
				isAuthenticating: false,
				user: null
			};

		default:
			return state;
	}
}
