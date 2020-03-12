import { combineReducers } from 'redux';
import canFollowsReducer from './canFollows_reducer';

export default combineReducers({
  canFollows: canFollowsReducer
});