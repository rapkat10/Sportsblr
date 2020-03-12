import {connect} from 'react-redux';
import Greeting from './greeting';
import { logOut } from '../../actions/session_actions';

const mapStateToProps = (state) => {
    const currentUserId = state.session.id;
    return {
        currentUser: state.entities.users[currentUserId],
    }
};

const mapDispatchToProps = (dispatch) => ({
    logOut: () => dispatch(logOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);