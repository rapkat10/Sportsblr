import {connect} from 'react-redux';
import SessionForm from './session_form';
import {
    create_User,
    logIn,
    clearSessionErrors
} from '../../actions/session_actions';

const mapStateToProps = ({ errors }) => {
    
    return {
        formType: 'Create User',
        errors: errors.session
    }
};

const mapDispatchToProps = (dispatch) => ({
    clearSessionErrors: (errors) => dispatch(clearSessionErrors(errors)),
    logIn: (user) => dispatch(logIn(user)),
    createUser: (user) => dispatch(create_User(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);