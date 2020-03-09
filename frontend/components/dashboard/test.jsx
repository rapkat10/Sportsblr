const postsList = posts.forEach((post, i) => {
    let settingIcon;
    let post_Dropdown;
    if (post.user_id === currentUser.id) {
        settingIcon =
            <div onClick={this.handdleDropdown} className="setting-icon-div">
                <i className="cog-icon fas fa-cog"></i>
            </div>;

    } else {
        settingIcon = "";
    };
    const currentElement = document.getElementsByClassName(`${post.id}`);
    if (currentElement.length === 1) {
        post_Dropdown = this.state.drop ?
            <SettingIconDropdown /> :
            "";
    }

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

    if (this.state.drop) {
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
        }
    } else {
        return post
    }

});