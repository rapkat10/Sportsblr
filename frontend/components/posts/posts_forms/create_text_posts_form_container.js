import { connect } from 'react-redux';
import TextPostsForm from './text_posts_form';
import { createPost } from '../../../actions/post_actions';
import { closeModal } from '../../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    const currentUser = state.entities.users[state.session.id];
    return ({
        post: {
            title: "",
            body: "",
            post_type: "text",
            user_id: currentUser.id
        },
        formType: "Post",
        currentUser: currentUser
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        action: (post) => dispatch(createPost(post)),
        closeModal: () => dispatch(closeModal())
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(TextPostsForm)