 
import { connect } from 'react-redux';
import LikesPostsIndex from './likes_posts_index';
import { deletePost } from '../../../actions/post_actions';
import { openModal } from '../../../actions/modal_actions';
import { createLike, deleteLike } from '../../../actions/like_actions';
import { createFollow, deleteFollow, getCanFollows } from '../../../actions/follow_actions';
import { getUser } from '../../../actions/user_actions';

const mapStateToProps = (state) => {
  const currentUserId = state.session.id;
  const currentUser = state.entities.users[currentUserId];
  const liked_posts = Object.values(currentUser.liked_posts).reverse();
  const posts = Object.values(state.entities.posts).reverse();
  
  let likedPostsIds = [];
  liked_posts.forEach(post => {
    likedPostsIds.push(post.id);
  })

  let likeFilteredPosts = [];

  posts.forEach(post => {
    if (likedPostsIds.includes(post.id)) {
      likeFilteredPosts.push(post)
    }
  })

  return {
    currentUser,
    posts: likeFilteredPosts
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
    getCanFollows: (userId) => dispatch(getCanFollows(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LikesPostsIndex);