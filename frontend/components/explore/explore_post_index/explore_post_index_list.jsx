import React from 'react';

class ExplorePostIndexList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            drop: false,
            unfollowDrop: false,
        }
        this.clickEdit = this.clickEdit.bind(this);
        this.handleDropdown = this.handleDropdown.bind(this);
        this.handleUnfollowDropdown = this.handleUnfollowDropdown.bind(this);
        this.like = this.like.bind(this);
        this.unlike = this.unlike.bind(this);

        this.unfollow = this.unfollow.bind(this);
        this.follow = this.follow.bind(this);
    }

    handleDropdown() {
        const value = this.state.drop ? false : true;
        this.setState({drop: value})
    }

    handleUnfollowDropdown() {
        const value = this.state.unfollowDrop ? false : true;
        this.setState({ unfollowDrop: value })
    }

    clickEdit() {
        this.props.openModal(
            [`Edit ${this.props.post.post_type}`,
            this.props.post]
            );
        this.handleDropdown();
    }

    like(postId) {
        this.props.createLike(postId)
            .then(this.props.getUser(this.props.currentUser.id));
    }

    unlike(postId, likeId) {
        this.props.deleteLike(postId, likeId)
            .then(this.props.getUser(this.props.currentUser.id));
    }

    follow(user_id) {
        this.props.createFollow(
            this.props.currentUser.id,
            user_id
        ).then(() => this.props.getCanFollows(this.props.currentUser.id));
    }

    unfollow() {
        this.props.deleteFollow(
            this.props.currentUser.id,
            this.props.currentUser.followId
        ).then(() => this.props.getCanFollows(this.props.currentUser.id));
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
            footer = <div className="explore-footer-flex-div">
                <p className="explore-likes-count">{post.numLikes} Likes</p>
                <p className="explore-msg">More features being worked on!</p>
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
            footer = <div className="explore-footer-flex-div">
                <p className="explore-likes-count">{post.numLikes} Likes</p>
                <p className="explore-msg">More features being worked on!</p>
                {likerId ? likedheart : notlikedheart}
            </div>
        }

        let selectedFollowAction;
        const canFollows = this.props.canFollows;
        let canFollowIds = [];
        canFollows.forEach(canFollow => {
            canFollowIds.push(canFollow.id)
        });

        if (canFollowIds.includes(post.user_id)) {
             selectedFollowAction = <button 
            onClick={() => this.follow(post.user_id)}>Follow</button>;
        } else {
            selectedFollowAction = <button 
            onClick={() => this.unfollow()}>Unfollow</button>;
        }

        let userPostInfoDropdown;
        if (post.user_id !== currentUser.id) {
            userPostInfoDropdown = this.state.unfollowDrop ?
                <>
                    <div onClick={this.handleUnfollowDropdown} className="explore-close-dropdown"></div>
                    <div className="explore-user-post-info-dropdown-div">
                        <div className="explore-dropdown-username-div">
                            <p>{post.users_Username}</p>
                        </div>
                        <div className="explore-unfollow-buttn-div">
                            <i className="explore-user-dropdown-icon fas fa-user fa-lg"></i>
                            {selectedFollowAction}
                        </div>
                    </div> 
                </>
                : <></>;
        }

        if (post.post_type === "Photo Form") {
            return (
                <div key={i * i} className="explore-post-media">
                    <div className="explore-post-media-main">
                        <div className="explore-post--header-div">
                            <div className="explore-post--user-pic-div">
                                <div className="explore-user-img----div">
                                    <img onClick={this.handleUnfollowDropdown}
                                        title={post.users_Username}
                                        className="explore-post--user-pic"
                                        src={post.user_imgUrl}
                                    />
                                    {userPostInfoDropdown}
                                </div>
                            </div>
                            <p>{post.users_Username}</p>
                        </div>
                        <div className="explore-post-media-div">
                            <img className="explore-post-media-content" src={post.img_url} />
                        </div>
                        <div className="explore-post-media-body-div">
                            {post.body}
                        </div>
                        <div className="explore-post-all-footer-div">
                            {footer}
                        </div>
                    </div>
                </div >
            )
        } else if (post.post_type === "Quote Form") {
            return (
                <div key={i * i} className="explore-post-quote">
                    <div className="explore-post-quo-main">
                        <div className="explore-post--header-div">
                            <div className="explore-post--user-pic-div">
                                <div className="explore-user-img----div">
                                    <img onClick={this.handleUnfollowDropdown}
                                        title={post.users_Username}
                                        className="explore-post--user-pic"
                                        src={post.user_imgUrl}
                                    />
                                    {userPostInfoDropdown}
                                </div>
                            </div>
                            <p>{post.users_Username}</p>
                        </div>
                        <div className="explore-post-quo-title-div">
                            &ldquo;{post.title}&rdquo;
                        </div>
                        <div className="explore-post-quo-body-div">
                            ~{post.body}~
                        </div>
                        <div className="explore-post-all-footer-div">
                            {footer}
                        </div>
                    </div>
                </div >
            )
        } else if (post.post_type === "Link Form") {
            return (
                <div key={i * i} className="explore-post-link">
                    <div className="explore-post-link-main">
                        <div className="explore-post--header-div">
                            <div className="explore-post--user-pic-div">
                                <div className="explore-user-img----div">
                                    <img onClick={this.handleUnfollowDropdown}
                                        title={post.users_Username}
                                        className="explore-post--user-pic"
                                        src={post.user_imgUrl}
                                    />
                                    {userPostInfoDropdown}
                                </div>
                            </div>
                            <p>{post.users_Username}</p>
                        </div>
                        <div className="explore-post-link-title-div">
                                <a href={post.title} target="_blank">
                                    {post.title}
                                </a>
                        </div>
                        <div className="explore-post-link-body-div">
                            {post.body}
                        </div>
                        <div className="explore-post-all-footer-div">
                            {footer}
                        </div>
                    </div>
                </div >
            )
        } else if (post.post_type === "Text Form") {
            return (
                <div key={i * i} className="post-text">
                    <div className="explore-post-text-main">
                        <div className="explore-post--header-div">
                            <div className="explore-post--user-pic-div">
                                <div className="explore-user-img----div">
                                    <img onClick={this.handleUnfollowDropdown}
                                        title={post.users_Username}
                                        className="explore-post--user-pic"
                                        src={post.user_imgUrl}
                                    />
                                    {userPostInfoDropdown}
                                </div>
                            </div>
                            <p>{post.users_Username}</p>
                        </div>
                        <div className="explore-post-text-title-div">
                            {post.title}
                        </div>
                        <div className="explore-post-text-body-div">
                            {post.body}
                        </div>
                        <div className="explore-post-all-footer-div">
                            {footer}
                        </div>
                    </div>
                </div >
            )
        } else if (post.post_type === "Chat Form") {
            return (
                <div key={i * i} className="explore-post-chat">
                    <div className="explore-post-chat-main">
                        <div className="explore-post--header-div">
                            <div className="explore-post--user-pic-div">
                                <div className="explore-user-img----div">
                                    <img onClick={this.handleUnfollowDropdown}
                                        title={post.users_Username}
                                        className="explore-post--user-pic"
                                        src={post.user_imgUrl}
                                    />
                                    {userPostInfoDropdown}
                                </div>
                            </div>
                            <p>{post.users_Username}</p>
                        </div>
                        <div className="explore-post-chat-title-div">
                            {post.title}
                        </div>
                        <div className="explore-post-chat-body-div">
                            {post.users_Username}: {post.body}
                        </div>
                        <div className="explore-post-all-footer-div">
                            {footer}
                        </div>
                    </div>
                </div >
            )
        } else if (post.post_type === "Video Form") {
            return (
                <div key={i * i} className="explore-post-media">
                    <div className="explore-post-media-main">
                        <div className="explore-post--header-div">
                            <div className="explore-post--user-pic-div">
                                <div className="explore-user-img----div">
                                    <img onClick={this.handleUnfollowDropdown}
                                        title={post.users_Username}
                                        className="explore-post--user-pic"
                                        src={post.user_imgUrl}
                                    />
                                    {userPostInfoDropdown}
                                </div>
                            </div>
                            <p>{post.users_Username}</p>
                        </div>
                        <video className="explore-post-media-div" controls>
                            <source src={post.video_url} />
                        </video>
                        <div className="explore-post-media-body-div">
                            {post.body}
                        </div>
                        <div className="explore-post-all-footer-div">
                            {footer}
                        </div>
                    </div>
                </div >
            )
        } else if (post.post_type === "Audio Form") {
            return (
                <div key={i * i} className="explore-post-media">
                    <div className="explore-post-media-main explore-audio-main">
                        <div className="explore-post--header-div">
                            <div className="explore-post--user-pic-div">
                                <div className="explore-user-img----div">
                                    <img onClick={this.handleUnfollowDropdown}
                                        title={post.users_Username}
                                        className="explore-post--user-pic"
                                        src={post.user_imgUrl}
                                    />
                                    {userPostInfoDropdown}
                                </div>
                            </div>
                            <p>{post.users_Username}</p>
                        </div>
                        <audio className="explore-post-media-audio-div" controls>
                            <source src={post.audio_url} />
                        </audio>
                        <div className="explore-post-media-body-div">
                            {post.body}
                        </div>
                        <div className="explore-post-all-footer-div">
                            {footer}
                        </div>
                    </div>
                </div >
            )
        }
    }
}


export default ExplorePostIndexList;