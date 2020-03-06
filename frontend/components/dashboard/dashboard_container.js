import {connect} from 'react-redux';
import Dashboard from './dashboard';
import { logOut, clearErrors } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    const posts = Object.values(state.entities.posts);
    const currentUserId = state.session.id;
    return {
        currentUser: state.entities.users[currentUserId],
        posts
    }
};

const mapDispatchToProps = (dispatch) => ({
    logOut: () => dispatch(logOut()),
    clearErrors: () => dispatch(clearErrors())
    // openModal: (modal, postId) => dispatch(openModal(modal, postId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);