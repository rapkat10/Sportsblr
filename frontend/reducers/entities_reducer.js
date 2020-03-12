import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import postsReducer from "./posts_reducer";
import followsReducer from './follows_reducer';

export default combineReducers({
    users: usersReducer,
    posts: postsReducer,
    follows: followsReducer
});
