import {connect} from 'react-redux';
import Greeting from './greeting';
import { logOut } from '../../actions/session_actions';
import { getPosts } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
    const currentUserId = state.session.id;
    // const posts = Object.values(state.entities.posts);
    return {
        currentUser: state.entities.users[currentUserId],
        // posts
    }
};

const mapDispatchToProps = (dispatch) => ({
    logOut: () => dispatch(logOut()),
    getPosts: () => dispatch(getPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);