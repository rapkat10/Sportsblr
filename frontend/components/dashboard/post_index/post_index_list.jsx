import React from 'react';

class PostIndexList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            drop: false
        }
        this.clickEdit = this.clickEdit.bind(this);
        this.handleDropdown = this.handleDropdown.bind(this);
    }

    handleDropdown() {
        const value = this.state.drop ? false : true;
        this.setState({drop: value})
    }

    clickEdit() {
        this.props.openModal(
            [`Edit ${this.props.post.post_type}`,
            this.props.post]
            );
        this.handleDropdown();
    }

    render() {
        const { currentUser, post, deletePost, openModal } = this.props;
        const i = post.id

        const isLiked = "far fa-heart";
        // : "fa fa-heart";

        let footer;
        if (post.user_id === currentUser.id) {
            footer = <div className="footer-flex-div">
                <p>More features being worked on!</p>
                <p></p>
                <i className={isLiked}></i>
                <div className="setting-icon-div">
                    <i onClick={this.handleDropdown} className="cog-icon fas fa-cog"></i>
                </div>
                {(this.state.drop) ? (
                    <>
                        <div onClick={this.handleDropdown} className="close-dropdown"></div>
                        <div className="setting-dropwdown-div">
                            <ul>
                                <li onClick={() => this.clickEdit()}>
                                    Edit
                            </li>
                                <li onClick={() => deletePost(post.id)}>
                                    Delete
                            </li>
                            </ul>
                        </div>
                    </>
                    )
                    : <></>}
            </div>
        } else {
            footer = <div className="footer-flex-div">
                <p>More features being worked on!</p>
                <p></p>
                <i className={isLiked}></i>
            </div>
        }

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
                <div key={i * i} className=" post-quote">
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
    }
}


export default PostIndexList;