import {connect} from 'react-redux';
import SessionForm from './session_form';
import { create_User } from '../../actions/session_actions';

const mapStateToProps = ({ errors }) => {
    
    return {
        formType: 'Create User',
        errors: errors.session
    }
};

const mapDispatchToProps = (dispatch) => ({
    createUser: (user) => dispatch(create_User(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);