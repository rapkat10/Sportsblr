import React from 'react';
import SettingIconDropdown from './settingIconDropdown';

class PostsIndex extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            drop: false,
        }
        this.handdleDropdown = this.handdleDropdown.bind(this);
    }

    handdleDropdown() {
        debugger;
        const value = this.state.drop ? false : true;
        this.setState({ drop: value });
    }

    render() {
        const { currentUser, posts, logOut } = this.props;

        const postsList = posts.map((post, i) => {
            let settingIcon;
            let post_Dropdown;
            if (post.user_id === currentUser.id) {
                settingIcon =
                    <div onClick={this.handdleDropdown} className="setting-icon-div">
                        <i className="cog-icon fas fa-cog"></i>
                    </div>;
                
                // const currentElement = document.getElementsByClassName(`${post.id}`);
                // if (currentElement.length === 1) {
                //     post_Dropdown = this.state.drop ?
                //         <SettingIconDropdown /> :
                //         "";
                // }

            } else {
                settingIcon = "";
            };

            const isLiked = "far fa-heart";
            // : "fa fa-heart";

            const footer = <div className="footer-flex-div">
                <p>More features being worked on!</p>
                <p></p>
                {settingIcon ? "" : <></>}
                <i className={isLiked}></i>
                {settingIcon}
                {post_Dropdown}
            </div>;

            const uniqueClassName = post.id + " post-media";
            if (post.post_type === "Photo Form") {
                return (
                    <div key={i * i} className={uniqueClassName}>
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
                const uniquequoteClassName = post.id + " post-quote";
                return (
                    <div key={i * i} className={uniquequoteClassName}>
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
                const uniquelinkClassName = post.id + " post-link";
                return (
                    <div key={i * i} className={uniquelinkClassName}>
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
                const uniquetextClassName = post.id + " post-text";
                return (
                    <div key={i * i} className={uniquetextClassName}>
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
                const uniquechatClassName = post.id + " post-chat";
                return (
                    <div key={i * i} className={uniquechatClassName}>
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
                    <div key={i * i} className={uniqueClassName}>
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
                    <div key={i * i} className={uniqueClassName}>
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

        newpostslist = postsList.forEach((post, i) => {
            
        });


        return (
            <>{newpostslist}</>
        )
    }
}


export default PostsIndex;