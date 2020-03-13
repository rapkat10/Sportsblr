import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import postsReducer from "./posts_reducer";
import canFollowsReducer from './canFollows_reducer';

export default combineReducers({
    users: usersReducer,
    posts: postsReducer,
    canFollows: canFollowsReducer
});
