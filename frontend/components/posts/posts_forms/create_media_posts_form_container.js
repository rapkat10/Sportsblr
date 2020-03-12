import React from 'react';
import { connect } from 'react-redux';
import { createMediaPost } from '../../../actions/post_actions';
import { closeModal } from '../../../actions/modal_actions';
import MediaPostsForm from './media_posts_form';

import { getfollowFilteredPosts } from '../../../actions/post_actions'; //?


const mapStateToProps = (state, ownProps) => {
    const formType = ownProps.formType;
    const currentUser = state.entities.users[state.session.id];
    return ({
        post: {
            title: "",
            body: "",
            post_type: formType,
            user_id: currentUser.id
        },
        formType: formType,
        currentUser: currentUser
    })
};

const mapDispatchToProps = (dispatch) => {
    return ({
        action: (post) => dispatch(createMediaPost(post)),
        closeModal: () => dispatch(closeModal()),
        // getfollowFilteredPosts: (followedFilter) =>
        //     dispatch(getfollowFilteredPosts(followedFilter)) //?
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaPostsForm)