import React from 'react';
import { connect } from 'react-redux';
import { createPost, createMediaPost } from '../../../actions/post_actions';
import { closeModal } from '../../../actions/modal_actions';
import MediaPostsForm from './media_posts_form';

const mapStateToProps = (state) => {
    const currentUser = state.entities.users[state.session.id];
    return ({
        post: {
            title: "",
            content: "",
            post_type: "photo",
            author_id: currentUser.id
        },
        formType: "Post",
        currentUser: currentUser
    })
};

const mapDispatchToProps = (dispatch) => {
    return ({
        action: (post) => dispatch(createMediaPost(post)),
        closeModal: () => dispatch(closeModal())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaPostsForm)