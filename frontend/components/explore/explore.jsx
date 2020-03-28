import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import ExplorePostsIndexContainer from './explore_post_index/explore_post_index_container';
import ExploreCanFollowsContainer from './explore_trending_blogs/explore_can_follows_container';

class Explore extends React.Component {
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
      <div className="explore-dashboard-div clearfix">
        <img className="backgroundImage" src={window.dashboard} />

        <div className="explore-posts-main-div">

          <div className="explore-posts-index-list">
            <ExplorePostsIndexContainer />
          </div>

          <div className="explore-recommended-blogs-div">
            <div className="explore-recommended-blogs---div">
              <h1 className="explore-RCB">Trending Blogs</h1>
              <ExploreCanFollowsContainer />
            </div>
          </div>

        </div>
        
      </div>
      <NavbarContainer />
    </>)
  }
}

export default Explore;
