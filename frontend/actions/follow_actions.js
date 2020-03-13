import * as FollowApiUtil from '../util/follows_api_util';
export const RECEIVE_CANFOLLOWS = 'RECEIVE_CANFOLLOWS';

import { receivePosts } from './post_actions';

const receiveCanFollows = (canFollows) => {
    return {
        type: RECEIVE_CANFOLLOWS,
        canFollows
    };
};

export const createFollow = (userId, followedUserId) => {
    return dispatch => {
        return FollowApiUtil.createFollow(userId, followedUserId)
            .then((posts) => dispatch(receivePosts(posts)));
    };
};

export const deleteFollow = (userId, followId) => {
    return dispatch => {
        return FollowApiUtil.deleteFollow(userId, followId)
            .then((posts) => dispatch(receivePosts(posts)));
    };
};

export const getCanFollows = (userId) => {
    return dispatch => {
        FollowApiUtil.getCanFollows(userId)
            .then((canFollows) => dispatch(receiveCanFollows(canFollows)));
    };
};