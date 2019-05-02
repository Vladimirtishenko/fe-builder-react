import jwtDecode from 'jwt-decode';
import { LOG_IN, LOG_OUT } from '../constants/oauth.const.js';
import { SET_WARNINGS } from '../../../libraries/warnings/constant/warnings.const.js';

export function login(credentials) {
    return (dispatch) => {
        (async () => {
            const autentification = {
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI0Zm1lZjN1NDMyM3IyMzQzZ2ZuMmkzMiIsIm5hbWUiOiJKb2huIERvZSIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20ifQ.n1xHUsNNti1MvNgtgx8GPNnNCsWFzABwGHeZaaVFMAw'
            };
            if (autentification) {
                localStorage.authToken = autentification.token;

                dispatch({
                    type: LOG_IN,
                    user: jwtDecode(autentification.token)
                });
            }
        })();
    };
}

export function logout() {
    return (dispatch) => {
        dispatch({
            type: LOG_OUT
        });
    };
}
