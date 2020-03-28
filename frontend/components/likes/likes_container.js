import {connect} from 'react-redux';
import Likes from './likes';
import { logOut } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { getPosts } from '../../actions/post_actions';

const mapStateToProps = (state) => {
    const currentUserId = state.session.id;
    const currentUser = state.entities.users[currentUserId];
    // debugger;
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

const mapDispatchToProps = (dispatch) => ({
    logOut: () => dispatch(logOut()),
    openModal: (modal, postId) => dispatch(openModal(modal, postId)),
    getPosts: () => dispatch(getPosts())
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Likes);