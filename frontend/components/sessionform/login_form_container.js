import {connect} from 'react-redux';
import SessionForm from './session_form';
import { logIn, clearSessionErrors } from '../../actions/session_actions';

const mapStateToProps = ({ errors }) => {
    return {
        formType: 'login',
        errors: errors.session
    }
};

const mapDispatchToProps = (dispatch) => ({
    clearSessionErrors: (errors) => dispatch(clearSessionErrors(errors)),
    logIn: (user) => dispatch(logIn(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);