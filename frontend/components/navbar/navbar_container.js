import { connect } from 'react-redux';
import { logOut } from '../../actions/session_actions';
import { clearPosts } from '../../actions/post_actions';
import Navbar from './navbar';

const mapStateToProps = (state) => {
    const currentUserId = state.session.id;
    return {
        currentUser: state.entities.users[currentUserId]
    }
};

const mapDispatchToProps = (dispatch) => ({
    logOut: () => dispatch(logOut()),
    clearPosts: () => dispatch(clearPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);