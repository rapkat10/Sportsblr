import {connect} from 'react-redux';
import Dashboard from './dashboard';
import { logOut } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { getfollowFilteredPosts } from '../../actions/post_actions';

const mapStateToProps = (state) => {
    const currentUserId = state.session.id;
    const currentUser = state.entities.users[currentUserId];
    const posts = Object.values(state.entities.postsFollowFiltered).reverse();

    return {
        currentUser,
        posts
    }
};

const mapDispatchToProps = (dispatch) => ({
    logOut: () => dispatch(logOut()),
    openModal: (modal, postId) => dispatch(openModal(modal, postId)),
    getfollowFilteredPosts: (followedFilter) => 
        dispatch(getfollowFilteredPosts(followedFilter))
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);