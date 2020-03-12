 
import { connect } from 'react-redux';
import PostsIndex from './posts_index';
import { getfollowFilteredPosts, deletePost } from '../../../actions/post_actions';
import { openModal } from '../../../actions/modal_actions';
import { createLike, deleteLike } from '../../../actions/like_actions';
import { createFollow, deleteFollow, getCanFollows } from '../../../actions/follow_actions';

const mapStateToProps = (state) => {
  const currentUserId = state.session.id;
  const currentUser = state.entities.users[currentUserId];
  const posts = Object.values(state.entities.posts).reverse();

  const followingUsersIds = currentUser.followingIds;
  let filteredPosts= [];
  posts.forEach(post => {
    if (followingUsersIds.includes(post.user_id)) {
      filteredPosts.push(post)
    } else if (currentUserId === post.user_id) {
      filteredPosts.push(post)
    };
  })

  return {
    currentUser,
    posts: filteredPosts
  }
};

const mapDispatchToProps = dispatch => {
  return {
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