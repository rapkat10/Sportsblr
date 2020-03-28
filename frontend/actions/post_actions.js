import * as PostsApiUtil from '../util/posts_api_util';
import * as MediaApiUtil from '../util/media_posts_api_util';
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_FOLLOW_POSTS = "RECEIVE_FOLLOW_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";

export const receiveFollowFilteredPosts = (res) => {
    return {
        type: RECEIVE_FOLLOW_POSTS,
        postsFollowFiltered: res.posts,
        users: res.users
    }
}

export const receivePosts = (res) => {
    return {
        type: RECEIVE_POSTS,
        posts: res.posts,
        users: res.users
    }
}

export const receivePost = (post) => {
    return {
        type: RECEIVE_POST,
        post
    }
}

const removePost = (id) => {
    return {
        type: REMOVE_POST,
        postId: id
    }
}

export const getPosts = () => dispatch => {
    return PostsApiUtil.getPosts().then((posts) => {
        return dispatch(receivePosts(posts));
    });
};

export const getfollowFilteredPosts = (followedFilter) => dispatch => {
    return PostsApiUtil.getfollowFilteredPosts(followedFilter).then((posts) => {
        return dispatch(receiveFollowFilteredPosts(posts));
    });
};

export const getPost = (id) => dispatch => {
    return PostsApiUtil.getPost(id).then((post) => {
        return dispatch(receivePost(post));
    });
};

export const createPost = (post) => dispatch => {
    return PostsApiUtil.createPost(post).then((post) => {
        return dispatch(receivePost(post));
    });
};

export const updatePost = (post) => dispatch => {
    return PostsApiUtil.updatePost(post).then((post) => {
        return dispatch(receivePost(post));
    });
};
        
export const deletePost = (postId) => dispatch => {
    return PostsApiUtil.deletePost(postId).then(() => {
        return dispatch(removePost(postId));
    });
};

export const createMediaPost = (formData) => dispatch => {
    return MediaApiUtil.createMediaPost(formData).then((post) => {
        return dispatch(receivePost(post))
    })
};

export const editMediaPost = (formData, post) => dispatch => {
    return MediaApiUtil.editMediaPost(formData, post).then((post) => {
        return dispatch(receivePost(post))
    })
};