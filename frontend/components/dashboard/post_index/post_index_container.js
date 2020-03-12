 
import { connect } from 'react-redux';
import PostsIndex from './posts_index';
import {
  getfollowFilteredPosts,
  getPosts,
  deletePost
} from '../../../actions/post_actions';
import { openModal } from '../../../actions/modal_actions';
import { createLike, deleteLike } from '../../../actions/like_actions';
import {
  createFollow,
  deleteFollow,
  getCanFollows
} from '../../../actions/follow_actions';

const mapStateToProps = (state) => {
  const posts = Object.values(state.entities.posts).reverse();
  const currentUserId = state.session.id;
  return {
    currentUser: state.entities.users[currentUserId],
    posts
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(getPosts()),
    deletePost: (postId) => dispatch(deletePost(postId)),
    openModal: (modal, postId) => dispatch(openModal(modal, postId)),
    createLike: (postId) => dispatch(createLike(postId)),
    deleteLike: (postId, likeId) => dispatch(deleteLike(postId, likeId)),
    createFollow: (userId, followedUserId) => dispatch(createFollow(userId, followedUserId)),
    deleteFollow: (userId, followId) => dispatch(deleteFollow(userId, followId)),
    getCanFollows: (userId) => dispatch(getCanFollows(userId)),
    getfollowFilteredPosts: (followedFilter) =>
      dispatch(getfollowFilteredPosts(followedFilter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);