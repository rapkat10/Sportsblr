import * as FollowApiUtil from '../util/follows_api_util';
export const RECEIVE_CANFOLLOWS = 'RECEIVE_CANFOLLOWS';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

const receiveCanFollows = (canFollows) => {
    return {
        type: RECEIVE_CANFOLLOWS,
        canFollows
    };
};


const receiveFollow = (follow) => {
    return {
        type: RECEIVE_FOLLOW,
        follow
    };
};

const removeFollow = (followId) => {
    return {
        type: REMOVE_FOLLOW,
        followId
    };
};


export const createFollow = (userId, followedUserId) => {
    return dispatch => {
        return FollowApiUtil.createFollow(userId, followedUserId)
            .then((follow) => dispatch(receiveFollow(follow)));
    };
};

export const deleteFollow = (userId, followId) => {
    return dispatch => {
        return FollowAPIUtil.unfollowUser(userId, followId)
            .then(() => dispatch(removeFollow(followId)));
    };
};

export const getCanFollows = (userId) => {
    return dispatch => {
        FollowApiUtil.getCanFollows(userId)
            .then((canFollows) =>
                dispatch(receiveCanFollows(canFollows)));
    };
};