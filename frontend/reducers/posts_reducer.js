import { 
    RECEIVE_POSTS, 
    RECEIVE_POST, 
    REMOVE_POST
} from '../actions/post_actions';


export default (state = {}, action) => {
    let newState = Object.assign({}, state);
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_POSTS:
            return Object.assign({}, state, action.posts)
        case RECEIVE_POST:
            return Object.assign({}, state, 
                {[action.post.id]: action.post}
            );
        case REMOVE_POST:
            delete newState[action.postId];
            return newState;
        default:
            return state;
    }
};