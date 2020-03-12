import {connect} from 'react-redux';
import Dashboard from './dashboard';
import { logOut } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { getfollowFilteredPosts } from '../../actions/post_actions';

const mapStateToProps = (state) => {
    const currentUserId = state.session.id;
    const currentUser = state.entities.users[currentUserId];
    const posts = Object.values(state.entities.posts).reverse();

    const followingUsersIds = currentUser.followingIds;
    let filteredPosts = [];
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

const mapDispatchToProps = (dispatch) => ({
    logOut: () => dispatch(logOut()),
    openModal: (modal, postId) => dispatch(openModal(modal, postId)),
    getfollowFilteredPosts: (followedFilter) => 
        dispatch(getfollowFilteredPosts(followedFilter)),
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);