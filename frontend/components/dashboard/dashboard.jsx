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
        const postsList = posts.reverse().map(post => {
            return <li key={post.id}>
                <img className="post-img" src={post.img_url}/>
            </li>
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
                            <li>post1</li>
                            {/* <li>post2</li>
                            <li>post3</li>
                            <li>post4</li>
                            <li>post5</li> */}
                            {/* {postsList} */}
                        </ul>
                        {/* <PostIndexContainer /> */}
                    </div>

                </div>
            </div>
        )
    }
}

export default Dashboard;
