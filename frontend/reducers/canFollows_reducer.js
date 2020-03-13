import { RECEIVE_CANFOLLOWS } from '../actions/follow_actions';

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CANFOLLOWS:
            return action.canFollows;
        default:
            return state;
    }
};
