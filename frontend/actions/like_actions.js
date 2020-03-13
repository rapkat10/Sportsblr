import * as LikeApiUtil from '../util/likes_api_util';
import { receivePost } from './post_actions';

export const createLike = (postId) => {
    return dispatch => {
        return LikeApiUtil.createLike(postId)
            .then((post) => dispatch(receivePost(post)));
    };
};

export const deleteLike = (postId, likeId) => {
    return dispatch => {
        return LikeApiUtil.deleteLike(postId, likeId)
            .then((post) => dispatch(receivePost(post)));
    };
};