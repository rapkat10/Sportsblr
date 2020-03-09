import { connect } from 'react-redux';
import PostNav from './posts_nav';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    const currentUserId = state.session.id;
    return {
        currentUser: state.entities.users[currentUserId],
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: modal => dispatch(openModal(modal))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostNav)