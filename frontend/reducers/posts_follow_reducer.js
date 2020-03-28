import {
  RECEIVE_FOLLOW_POSTS,
  RECEIVE_POST,
  REMOVE_POST
} from '../actions/post_actions';

export default (state = {}, action) => {
  let newState = Object.assign({}, state);
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FOLLOW_POSTS:
      return action.postsFollowFiltered;
      case RECEIVE_POST:
        return Object.assign({}, state, {
          [action.post.id]: action.post
        });
      case REMOVE_POST:
        delete newState[action.postId];
        return newState;
    default:
      return state;
  }
};