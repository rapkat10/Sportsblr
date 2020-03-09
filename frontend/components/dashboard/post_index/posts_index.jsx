import React from 'react';
import PostIndexList from './post_index_list';

class PostsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { nextUserId: null };
    }

    componentDidMount() {
        this.props.getPosts();
    }

    render() {

        const { posts, getPosts, currentUser, openModal, deletePost } = this.props;

        const postsList = posts.map((post, i) => {
            return <PostIndexList key={post.id} post={post}
                deletePost={deletePost}
                currentUser={currentUser}
                getPosts={getPosts}
                openModal={openModal} />;
        });


        return (
            <>{postsList}</>
        );
    }
}

export default PostsIndex;
