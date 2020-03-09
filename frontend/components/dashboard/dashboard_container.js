import {connect} from 'react-redux';
import Dashboard from './dashboard';
import { logOut, clearErrors } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { getPosts } from '../../actions/post_actions';

const mapStateToProps = (state) => {
    const posts = Object.values(state.entities.posts).reverse();
    const currentUserId = state.session.id;
    return {
        currentUser: state.entities.users[currentUserId],
        posts
    }
};

const mapDispatchToProps = (dispatch) => ({
    logOut: () => dispatch(logOut()),
    openModal: (modal, postId) => dispatch(openModal(modal, postId)),
    getPosts: () => dispatch(getPosts()),

    
    // clearErrors: () => dispatch(clearErrors()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);