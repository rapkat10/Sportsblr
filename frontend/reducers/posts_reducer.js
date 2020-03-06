import { 
    RECEIVE_POSTS, 
    RECEIVE_POST, 
    REMOVE_POST,
    CLEAR_POSTS
} from '../actions/post_actions';


export default (state = {}, action) => {
    Object.freeze(state);
    debugger;
    let newState = {};
    switch (action.type) {
        case RECEIVE_POSTS:
            return action.posts;
        case RECEIVE_POST:
            return Object.assign({}, state, 
                {[action.post.id]: action.post}
            );
        case REMOVE_POST:
            newState = Object.assign({}, state);
            delete newState[action.postId];
            return newState;
        case CLEAR_POSTS:
            return [];
        default:
            return state;
    }
};