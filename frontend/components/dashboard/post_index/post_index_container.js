 
import { connect } from 'react-redux';
import PostsIndex from './posts_index';
import { getPosts, deletePost } from '../../../actions/post_actions';
import { openModal } from '../../../actions/modal_actions';

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
    deletePost: postId => dispatch(deletePost(postId)),
    openModal: (modal, postId) => dispatch(openModal(modal, postId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);