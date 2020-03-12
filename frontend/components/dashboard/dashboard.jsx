import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';
import PostsNavContainer from '../posts/posts_nav_container';
import PostsIndexContainer from './post_index/post_index_container';
import CanFollowsContainer from './recommended_blogs/can_follows_container';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getfollowFilteredPosts("followedFilter");
    }

    render() {
        const { currentUser, posts } = this.props;
        // if (posts.length === 0) return null; //?
        return (<>
            <div className="dashboard-div clearfix">
                <img className="backgroundImage" src={window.dashboard} />
                <div className="posts-main-div">
                    <div className="posts-index-list">
                        <div className="posts-form-div">
                            <div className="current-user-pic">
                                <img className="user-img"
                                    src={currentUser.img_url} />
                            </div>
                            <PostsNavContainer />
                        </div>
                        <PostsIndexContainer />
                    </div>
                    <div className="recommended-blogs-div">
                        Recommended Blogs Coming soon....
                        <CanFollowsContainer />
                    </div>
                </div>
            </div>
            <NavbarContainer />
        </>)
    }
}

export default Dashboard;
