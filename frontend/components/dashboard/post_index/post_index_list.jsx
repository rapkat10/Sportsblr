import React from 'react';

class PostIndexList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            drop: false
        }
        this.clickEdit = this.clickEdit.bind(this);
        this.handleDropdown = this.handleDropdown.bind(this);
        this.like = this.like.bind(this);
        this.unlike = this.unlike.bind(this);
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

    like(postId) {
        this.props.createLike(postId).then(() => {
            this.props.getfollowFilteredPosts("followedFilter")
        });
    }

    unlike(postId, likeId) {
        this.props.deleteLike(postId, likeId).then(() => {
            this.props.getfollowFilteredPosts("followedFilter");
        });
    }

    componentDidMount() {
        this.props.getfollowFilteredPosts("followedFilter");
    }

    render() {
        const { currentUser, post, deletePost, openModal } = this.props;
        const i = post.id;

        let likerId;
        post.likerIds.forEach(liker_id => {
            if (liker_id === currentUser.id) {
                likerId = liker_id;
            }
        })

        let notlikedheart;
        let likedheart;
        if (likerId) {
            likedheart = <div title="Like">
                <i className="likedheart fa fa-heart"
                            onClick={() => this.unlike(post.id, post.userlikeId)}>
                        </i>
                </div>;
        } else {
            notlikedheart = <div title="Like">
                        <i className="far fa-heart"
                            onClick={() => this.like(post.id)}>
                        </i>
                </div>
        }
 
        let footer;
        if (post.user_id === currentUser.id) {
            footer = <div className="footer-flex-div">
                <p>More features being worked on!</p>
                <p></p>
                {likerId ? likedheart : notlikedheart}
                <div title="Post Options" className="setting-icon-div">
                    <i onClick={this.handleDropdown} className="cog-icon fas fa-cog"></i>
                </div>
                {(this.state.drop) ? (
                    <>
                        <div onClick={this.handleDropdown} className="close-dropdown"></div>
                        <div className="setting-dropwdown-div">
                            <ul>
                                <li title="Edit" onClick={() => this.clickEdit()}>
                                    Edit
                                </li>
                                <li title="Delete" onClick={() => deletePost(post.id)}>
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
                {likerId ? likedheart : notlikedheart}
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