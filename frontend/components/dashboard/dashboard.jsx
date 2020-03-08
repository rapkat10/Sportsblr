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

            let settingIcon;
            if (post.user_id === currentUser.id) {
                settingIcon = <i className="cog-icon fas fa-cog"></i>;
            }

            const isLiked = "far fa-heart";
                // : "fa fa-heart";
            
            const footer = <div className="footer-flex-div">
                <p>More features being worked on!</p>
                <i className={isLiked}></i>
                {settingIcon}
                {/* {this.state.clicked ? dropdown : <></>} */}
            </div>;

            if (post.post_type === "Photo Form") {
                return (
                    <div key={i * i} className="post-media">
                        <div className="post-media-user-pic-div">
                            <img className="post-media-user-pic" src={post.user_imgUrl} />
                        </div>
                        <div className="post-media-main">
                            <div className="post--header-div">
                                {post.users_Username}
                            </div>
                            <div className="post-media-div">
                                <img className="post-media-content" src={post.img_url} />
                            </div>
                            <div className="post-media-body-div">
                                {post.body}
                            </div>
                            <div className="post-all-footer-div">
                                {footer}
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
                            <div className="post--header-div">
                                {post.users_Username}
                            </div>
                            <div className="post-quo-title-div">
                                &ldquo;{post.title}&rdquo;
                            </div>
                            <div className="post-quo-body-div">
                                ~{post.body}~
                            </div>
                            <div className="post-all-footer-div">
                                {footer}
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
                            <div className="post--header-div">
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
                            <div className="post-all-footer-div">
                                {footer}
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
                            <div className="post--header-div">
                                {post.users_Username}
                            </div>
                            <div className="post-text-title-div">
                                {post.title}
                            </div>
                            <div className="post-text-body-div">
                                {post.body}
                            </div>
                            <div className="post-all-footer-div">
                                {footer}
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
                            <div className="post--header-div">
                                {post.users_Username}
                            </div>
                            <div className="post-chat-title-div">
                                {post.title}
                            </div>
                            <div className="post-chat-body-div">
                                {post.body}
                            </div>
                            <div className="post-all-footer-div">
                                {footer}
                            </div>
                        </div>
                    </div >
                )
            } else if (post.post_type === "Video Form") {
            return (
                <div key={i * i} className="post-media">
                    <div className="post-media-user-pic-div">
                        <img className="post-media-user-pic" src={post.user_imgUrl} />
                    </div>
                    <div className="post-media-main">
                        <div className="post--header-div">
                            {post.users_Username}
                        </div>
                        <video className="post-media-div" controls>
                            <source src={post.video_url} />
                        </video>
                        <div className="post-media-body-div">
                            {post.body}
                        </div>
                        <div className="post-all-footer-div">
                            {footer}
                            </div>
                    </div>
                </div >
            )
            } else if (post.post_type === "Audio Form") {
                return (
                    <div key={i * i} className="post-media">
                        <div className="post-media-user-pic-div">
                            <img className="post-media-user-pic" src={post.user_imgUrl} />
                        </div>
                        <div className="post-media-main">
                            <div className="post--header-div">
                                {post.users_Username}
                            </div>
                            <audio className="post-media-audio-div" controls>
                                <source src={post.audio_url} />
                            </audio>
                            <div className="post-media-body-div">
                                {post.body}
                            </div>
                            <div className="post-all-footer-div">
                                {footer}
                            </div>
                        </div>
                    </div >
                )
            }  
        });

        return (

            <>

                <div className="dashboard-div clearfix">

                    <img className="backgroundImage" src={window.dashboard} />


                    <div className="posts-main-div">

                        <div className="posts-index-list">

                            <div className="posts-form-div">
                                <div className="current-user-pic">
                                    <img className="user-img"
                                        src={img_url} />
                                </div>
                                <PostsNavContainer />
                            </div>

                            {postsList}

                        </div>

                        <div className="recommended-blogs-div">
                            Recommended Blogs Coming soon....
                        </div>
                    </div>

                </div>

                <NavbarContainer />

            </>

        //     <div className="dashboard-div">

        //         <img className="backgroundImage" src={window.dashboard} />
                
        //         <div className="nav-container">
        //             <NavbarContainer />
        //         </div>

        //         <div className="posts-main-div">

        //             <div className="posts-index-list">

        //                 <div className="posts-form-div">
        //                     <div className="current-user-pic">
        //                         <img className="user-img"
        //                             src={img_url}/>
        //                     </div>
        //                     <PostsNavContainer />
        //                 </div>

        //                 {postsList}

        //             </div>

        //             <div className="recommended-blogs-div">
        //                 Recommended Blogs Coming soon....
        //             </div>
        //         </div>    

        //  </div>
        )
    }
}

export default Dashboard;
