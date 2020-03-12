import * as LikeApiUtil from '../util/likes_api_util';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

import { receivePost } from './post_actions';

const receiveLike = (like) => {
    return {
        type: RECEIVE_LIKE,
        like
    };
};

const removeLike = (likeId) => {
    return {
        type: REMOVE_LIKE,
        likeId
    };
};

export const createLike = (postId) => {
    return dispatch => {
        return LikeApiUtil.createLike(postId)
            .then((post) => dispatch(receivePost(post)));
    };
};
//receive post

export const deleteLike = (postId, likeId) => {
    return dispatch => {
        return LikeApiUtil.deleteLike(postId, likeId)
            .then((post) => dispatch(receivePost(post)));
    };
};