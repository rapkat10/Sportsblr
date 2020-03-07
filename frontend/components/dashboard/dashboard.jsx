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
        // const postsList = posts.reverse().map((post, i) => {
        //     if (post.post_type === "Photo Form") {
        //         return (
        //             <li key={i * i} className="post-photo">
        //                 <img className="post-img" src={post.img_url} />
        //                 {post.body}
        //             </li >
        //         )
        //     } else if (post.post_type === "Quote Form") {
        //         return (
        //             <li key={Math.random() + 1} className="post-quote">
        //                 {post.title}
        //             </li>
        //         )
        //     } else if (post.post_type === "Link Form") {
        //         return ( 
        //             <li key={Math.random() + 1} className="post-link">
        //                 <a href={post.title} target="_blank">
        //                     {post.title}
        //                 </a>
        //             </li>
        //         )
        //     } else if (post.post_type === "Text Form") {
        //         return (
        //             <li key={Math.random() + i} className="post-text">
        //                 {post.title}
        //                 {post.body}
        //             </li>
        //         )
        //     }
        // });

        const postsList = posts.reverse().map((post, i) => {
            if (post.post_type === "Photo Form") {
                return (
                    <div key={i * i} className="post-photo">
                        <div className="post-img-user-pic-div">
                            <img className="post-img-user-pic" src={post.user_imgUrl} />
                        </div>
                        <div className="post-img-main">
                            <div className="post-img-header-div">
                                {post.users_Username}
                            </div>
                            <div className="post-img-div">
                                <img className="post-img" src={post.img_url} />
                            </div>
                            <div className="post-img-body-div">
                                {post.body}
                            </div>
                            <div className="post-img-footer-div">
                                More features being worked on!
                            </div>
                        </div>
                    </div >
                )
            } else if (post.post_type === "Quote Form") {
                return (
                    <div key={i * i} className="post-quote">
                        <div className="post-quo-user-pic-div">
                            <img className="post-quo-user-pic" src={post.user_imgUrl} />
                        </div>
                        <div className="post-quo-main">
                            <div className="post-quo-header-div">
                                {post.users_Username}
                            </div>
                            <div className="post-quo-title-div">
                                &ldquo;{post.title}&rdquo;
                            </div>
                            <div className="post-quo-body-div">
                                ~{post.body}~
                            </div>
                            <div className="post-quo-footer-div">
                                More features being worked on!
                            </div>
                        </div>
                    </div >
                )
            } else if (post.post_type === "Link Form") {
                return (
                    <div key={i * i} className="post-link">
                        <div className="post-link-user-pic-div">
                            <img className="post-link-user-pic" src={post.user_imgUrl} />
                        </div>
                        <div className="post-link-main">
                            <div className="post-link-header-div">
                                {post.users_Username}
                            </div>
                            <div className="post-link-title-div">
                                <a href={post.title} target="_blank">
                                    {post.title}
                                </a>
                            </div>
                            <div className="post-link-body-div">
                                {post.body}
                            </div>
                            <div className="post-link-footer-div">
                                More features being worked on!
                            </div>
                        </div>
                    </div >
                )
            } else if (post.post_type === "Text Form") {
                return (
                    <div key={i * i} className="post-text">
                        <div className="post-text-user-pic-div">
                            <img className="post-text-user-pic" src={post.user_imgUrl} />
                        </div>
                        <div className="post-text-main">
                            <div className="post-text-header-div">
                                {post.users_Username}
                            </div>
                            <div className="post-text-title-div">
                                {post.title}
                            </div>
                            <div className="post-text-body-div">
                                {post.body}
                            </div>
                            <div className="post-text-footer-div">
                                More features being worked on!
                            </div>
                        </div>
                    </div >
                )
            } else if (post.post_type === "Chat Form") {
                return (
                    <div key={i * i} className="post-chat">
                        <div className="post-chat-user-pic-div">
                            <img className="post-chat-user-pic" src={post.user_imgUrl} />
                        </div>
                        <div className="post-chat-main">
                            <div className="post-chat-header-div">
                                {post.users_Username}
                            </div>
                            <div className="post-chat-title-div">
                                {post.title}
                            </div>
                            <div className="post-chat-body-div">
                                {post.body}
                            </div>
                            <div className="post-chat-footer-div">
                                More features being worked on!
                            </div>
                        </div>
                    </div >
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
                        <div className="posts-index-list">
                            {postsList}
                        </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;
