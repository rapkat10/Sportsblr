 import { connect } from 'react-redux';
import ExplorePostsIndex from './explore_posts_index';
import { getfollowFilteredPosts, deletePost } from '../../../actions/post_actions';
import { openModal } from '../../../actions/modal_actions';
import { createLike, deleteLike } from '../../../actions/like_actions';
import { createFollow, deleteFollow, getCanFollows } from '../../../actions/follow_actions';
import { getUser } from '../../../actions/user_actions';


const mapStateToProps = (state) => {
  const currentUserId = state.session.id;
  const currentUser = state.entities.users[currentUserId];
  const posts = Object.values(state.entities.posts).reverse();
  const canFollows = Object.values(state.entities.canFollows);

  return {
    currentUser,
    posts,
    canFollows
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: (userId) => dispatch(getUser(userId)),
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

export default connect(mapStateToProps, mapDispatchToProps)(ExplorePostsIndex);