import {connect} from 'react-redux';
import SessionForm from './session_form';
import { create_User, logIn, clearSessionErrors } from '../../actions/session_actions';

import { getfollowFilteredPosts } from '../../actions/post_actions'; //?


const mapStateToProps = ({ errors }) => {
    return {
        formType: 'Create User',
        errors: errors.session
    }
};

const mapDispatchToProps = (dispatch) => ({
    clearSessionErrors: (errors) => dispatch(clearSessionErrors(errors)),
    logIn: (user) => dispatch(logIn(user)),
    createUser: (user) => dispatch(create_User(user)),
    getfollowFilteredPosts: (followedFilter) =>
        dispatch(getfollowFilteredPosts(followedFilter)), //?
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);