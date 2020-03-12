import React from 'react';
import { connect } from 'react-redux';
import { editMediaPost } from '../../../actions/post_actions';import { closeModal } from '../../../actions/modal_actions';
import EditMediaPostsForm from './edit_media_posts_form'

import { getfollowFilteredPosts } from '../../../actions/post_actions'; //?


const mapStateToProps = (state, ownProps) => {
  const formType = ownProps.formType;
  const post = ownProps.post;
  const currentUser = state.entities.users[state.session.id];
  return ({
      post: {
        title: post.title,
        body: post.body,
        post_type: formType,
        user_id: currentUser.id,
        id: post.id
      },
        img_url: post.img_url,
        audio_url: post.img_url,
        video_url: post.img_url,
      formType: formType,
      currentUser: currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return {
    action: (post, postId) => dispatch(editMediaPost(post, postId)),
    closeModal: () => dispatch(closeModal()),
    // getfollowFilteredPosts: (followedFilter) =>
    //     dispatch(getfollowFilteredPosts(followedFilter)) //?
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditMediaPostsForm);