import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USERS, RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_POSTS } from '../actions/post_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return {
                [action.currentUser.id]: action.currentUser
            };
        case RECEIVE_USERS:
              return Object.assign({}, state, action.users);
        case RECEIVE_USER:
            return Object.assign({}, state, {
                [action.user.id]: action.user
            });
        case RECEIVE_POSTS:
            return Object.assign({}, state, action.users);
        default:
            return state;
    }
};