export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

import {
    createUser,
    login,
    logout
} from '../util/session_api_util';

const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const clearSessionErrors = () => ({
    type: CLEAR_SESSION_ERRORS
})


export const create_User = user => dispatch => (createUser(user)
    .then(user => (
        dispatch(receiveCurrentUser(user))), errors => (
        dispatch(receiveErrors(errors.responseJSON))
    ))
);


export const logIn = user => dispatch => (login(user)
    .then(user => (
        dispatch(receiveCurrentUser(user))), errors => (
        dispatch(receiveErrors(errors.responseJSON))
    ))
);

export const logOut = () => dispatch => logout()
    .then(() => dispatch(logoutCurrentUser())
);
