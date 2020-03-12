import { RECEIVE_CANFOLLOWS, RECEIVE_FOLLOW } from '../actions/follow_actions';

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CANFOLLOWS:
            return action.canFollows;
        case RECEIVE_FOLLOW:
            let newState = Object.assign({}, state);
            delete(newState[action.follow.followedUserId]);
            return newState;
        default:
            return state;
    }
};
