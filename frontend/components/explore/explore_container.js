import {connect} from 'react-redux';
import Explore from './explore';
import { logOut } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { getPosts } from '../../actions/post_actions';

const mapStateToProps = (state) => {
    const currentUserId = state.session.id;
    const currentUser = state.entities.users[currentUserId];
    const posts = Object.values(state.entities.posts).reverse();
    return {
        currentUser,
        posts
    }
};

const mapDispatchToProps = (dispatch) => ({
    logOut: () => dispatch(logOut()),
    openModal: (modal, postId) => dispatch(openModal(modal, postId)),
    getPosts: () => dispatch(getPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Explore);