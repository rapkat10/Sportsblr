import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';

import CreateTextPostsContainer from '../posts/posts_forms/create_text_posts_form_container';
import CreateMediaPostsContainer from '../posts/posts_forms/create_media_posts_form_container';


const Modal = ({ modal, closeModal }) => {
    if (!modal) {
        return null;
    }

    let component;

    switch (modal.modal) {
        case 'Text Form':
            component = <CreateTextPostsContainer formType="Text Form" />;
            break;
        case 'Quote Form':
            component = <CreateTextPostsContainer formType="Quote Form" />;
            break;
        case 'Link Form':
            component = <CreateTextPostsContainer formType="Link Form" />;
            break;
        case 'Chat Form':
            component = <CreateTextPostsContainer formType="Chat Form"/>;
            break;
        case 'Photo Form':
            component = <CreateMediaPostsContainer formType="Photo Form"/>;
            break;
        case 'Audio Form':
            component = <CreateMediaPostsContainer formType="Audio Form"/>;
            break;
        case 'Video Form':
            component = <CreateMediaPostsContainer formType="Video Form"/>;
            break;
        case 'edit-text':
        case 'edit-chat':
        case 'edit-link':
        case 'edit-quote':
            component = <EditTextContainer postId={modal.postId} />;
            break;
        case 'edit-photo':
        case 'edit-video':
        case 'edit-audio':
            component = <EditMediaContainer postId={modal.postId} />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}


const mapStateToProps = (state) => {
    // const currentUserId = state.session.id;
    return {
        modal: state.ui.modal,
        // currentUser: state.entities.users[currentUserId]
    }
};

const mapDispatchToProps = (dispatch) => {
    return ({
        closeModal: () => dispatch(closeModal()),
        openModal: () => dispatch(openModal())
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);