import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import LikesPostsIndexContainer from './likes_post_index/likes_post_index_container';
import LikesCanFollowsContainer from './likes_recommended_blogs/likes_can_follows_container';

class Likes extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { currentUser, posts } = this.props;
    if (posts.length === 0) return null;
    return (<>
      <div className="dashboard-div clearfix">
        <img className="backgroundImage" src={window.dashboard} />

        <div className="posts-main-div">
          <div className="posts-index-list">
            <h1 className="likes-page-title">{currentUser.liked_posts.length} likes</h1>
            <LikesPostsIndexContainer />
          </div>

          <div className="recommended-blogs-div">
            <div className="recommended-blogs---div">
              <h1 className="RCB">Recommended Blogs</h1>
              <LikesCanFollowsContainer />
            </div>
          </div>

        </div>

      </div>
      <NavbarContainer />
    </>)
  }
}

export default Likes;
