import React from 'react';
import PostIndexList from './post_index_list';

class PostsIndex extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {

        const { posts, deletePost, 
            currentUser, openModal,
            createLike, deleteLike,
            createFollow, deleteFollow, getCanFollows } = this.props;
        
        const postsList = posts.map((post, i) => {
            return <PostIndexList 
                key={post.id} 
                post={post}
                deletePost={deletePost}
                currentUser={currentUser}
                openModal={openModal}
                createLike={createLike}
                deleteLike={deleteLike}
                createFollow={createFollow}
                deleteFollow={deleteFollow}
                getCanFollows={getCanFollows}
            />;
        });

        return (
            <>{postsList}</>
        );
    }
}

export default PostsIndex;
