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
        const { posts, getPosts, deletePost, 
            currentUser, openModal,
            createLike, deleteLike } = this.props;

        const postsList = posts.map((post, i) => {
            return <PostIndexList 
                key={post.id} 
                post={post}
                getPosts={getPosts}
                deletePost={deletePost}
                currentUser={currentUser}
                openModal={openModal}
                createLike={createLike}
                deleteLike={deleteLike}
            />;
        });

        return (
            <>{postsList}</>
        );
    }
}

export default PostsIndex;
