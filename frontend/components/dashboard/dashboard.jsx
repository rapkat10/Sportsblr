import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';
import PostsNavContainer from '../posts/posts_nav_container';


class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        
        const { currentUser, posts, logOut } = this.props;
        if (posts.length === 0) return null;
        const img_url = currentUser.img_url;
        const postsList = posts.reverse().map((post, i) => {
            if (post.post_type === "Photo Form") {
                return (
                    <li key={i * i} className="post-photo">
                        <img className="post-img" src={post.img_url} />
                        {post.body}
                    </li >
                )
            } else if (post.post_type === "Quote Form") {
                return (
                    <li key={Math.random() + 1} className="post-quote">
                        {post.title}
                    </li>
                )
            } else if (post.post_type === "Link Form") {
                <li key={Math.random() + 1} className="post-link">
                    <a href={post.title} target="_blank">
                        {post.title}
                    </a>
                </li>
            } else {
                return (
                    <li key={Math.random() + i} className="post-text">
                        {post.title}
                        {post.body}
                    </li>
                )
            }
        });

        const postsUserPhoto = posts.reverse().map((post, i) => {
            return (
                <div key={i * i} className="post-user-pic">
                    <img className="post-user-img" src={post.img_url} />
                </div >
            )
        });

        return (
            <div className="dashboard-div">              
                <img className="backgroundImage" src={window.dashboard} />
                <div className="nav-container">
                    <NavbarContainer />
                </div>

                <div className="posts-main-div">
                    <div className="posts-form-div">
                        <div className="current-user-pic">
                            <img className="user-img"
                                src={img_url} 
                            />
                        </div>
                        <PostsNavContainer />
                    </div>

                    <div className="posts-index-div">
                        <div className="pic-column">
                            {postsUserPhoto}
                        </div>
                        <ul className="posts-index-list">
                            {postsList}
                        </ul>
                        {/* <PostIndexContainer /> */}
                    </div>

                </div>
            </div>
        )
    }
}

export default Dashboard;
