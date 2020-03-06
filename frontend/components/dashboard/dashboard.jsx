import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';
import PostsNavContainer from '../posts/posts_nav_container';

// import PostIndexContainer from '../post/post_index_container';
// import Form from '../post/forms/form';
// import Layout from '../layout/layout';
// import SidebarLayout from '../layout/sidebar_layout';


class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }



    render() {
        const { currentUser, posts, logOut } = this.props;
        const img_url = currentUser.img_url;

        // const postsList = posts.map(post => {
        //     return <li>post</li>
        // });

        return (
            <div className="dashboard-div">              
                <img className="backgroundImage" src={window.dashboard} />
                <div className="nav-container">
                    <NavbarContainer />
                </div>

                {/* <div className='content-left'>
                    <div className="user-bar">
                        <Link to={`/users/${this.props.currentUser.id}`}>
                            <img className="user-img"
                                src={this.props.currentUser.photoUrl} /></Link>
                        <Form />
                    </div>
                    <PostIndexContainer />
                </div> */}

                <div className="posts-main-div">

                    <div className="posts-form-div">
                        <div className="current-user-pic">
                            
                        </div>
                        <PostsNavContainer />
                    </div>

                    <div className="posts-index-div">
                        <div className="post-user-pic"></div>
                        <ul className="posts-index-list">
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
