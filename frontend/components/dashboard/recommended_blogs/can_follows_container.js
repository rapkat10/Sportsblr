 
import { connect } from 'react-redux';
import CanFollowIndex from './can_follows_index';
import { getPosts, getfollowFilteredPosts } from '../../../actions/post_actions';
import { createFollow, getCanFollows } from '../../../actions/follow_actions';

const mapStateToProps = (state) => {
    // debugger;
    const canFollows = Object.values(state.entities.follows.canFollows);
    const currentUserId = state.session.id;
    return {
        currentUser: state.entities.users[currentUserId],
        canFollows
    }
};

const mapDispatchToProps = dispatch => {
  return {
    createFollow: (userId, followedUserId) => dispatch(createFollow(userId, followedUserId)),
    getCanFollows: (userId) => dispatch(getCanFollows(userId)),
    getPosts: () => dispatch(getPosts()),
    getfollowFilteredPosts: (followedFilter) =>
      dispatch(getfollowFilteredPosts(followedFilter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CanFollowIndex);

