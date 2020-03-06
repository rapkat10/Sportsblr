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
            if (post.img_url) {
                return (
                <li key={i * i} className="post-1" key={post.id}>
                    <img className="post-img" src={post.img_url} />
                </li >
                )
            } else {
                return (
                <div key={post.title.length + i} className="post-1">
                    <li key={post.body.length + 1}>{post.title}</li>
                    <li key={post.id + 2 + i}>{post.body}</li>
                </div>
                )
            }
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
                        <div className="post-user-pic">
                            {/* <img className="user-img"
                                src={img_url}
                            /> */}
                            <div></div>
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
