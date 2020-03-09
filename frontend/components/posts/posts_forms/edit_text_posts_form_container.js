import { connect } from 'react-redux';
import EditTextPostsForm from './edit_text_posts_form';
import { updatePost, getPosts } from '../../../actions/post_actions';
import { closeModal } from '../../../actions/modal_actions';

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
        formType: formType,
        currentUser: currentUser
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        action: (post) => dispatch(updatePost(post)),
        getPosts: () => dispatch(getPosts()),
        closeModal: () => dispatch(closeModal())
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTextPostsForm)