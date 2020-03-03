import { connect } from 'react-redux';
import { logOut } from '../../actions/session_actions';
import Navbar from './navbar';

const mapStateToProps = (state) => {
    const currentUserId = state.session.id;
    return {
        currentUser: state.entities.users[currentUserId]
    }
};

const mapDispatchToProps = (dispatch) => ({
    logOut: () => dispatch(logOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);