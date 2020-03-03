import {connect} from 'react-redux';
import Dashboard from './dashboard';
import { logOut } from '../../actions/session_actions';

const mapStateToProps = (state) => {
    const currentUserId = state.session.id;
    return {
        currentUser: state.entities.users[currentUserId]
    }
};

const mapDispatchToProps = (dispatch) => ({
    logOut: () => dispatch(logOut())  
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);