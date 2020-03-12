import * as UserApiUtil from '../util/users_api_util';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        users
    };
};

const receiveUser = (user) => {
    return {
        type: RECEIVE_USER,
        user
    };
};

export const getUsers = () => {
    return dispatch => {
        return UserApiUtil.getUsers()
            .then((users) => dispatch(receiveUsers(users)));
    };
};

export const getUser = (userId) => {
    return dispatch => {
        return UserAPIUtil.getUser(userId)
            .then((user) => dispatch(receiveUser(user)));
    };
};