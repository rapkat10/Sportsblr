import React from 'react';
import LikesPostIndexList from './likes_post_index_list';

class LikesPostsIndex extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {

        const { posts, deletePost, 
            currentUser, openModal,
            createLike, deleteLike,
            createFollow, deleteFollow, 
            getCanFollows, canFollows,
            getUser } = this.props;
        
        const postsList = posts.map((post, i) => {
            return <LikesPostIndexList 
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
                canFollows={canFollows}
                getUser={getUser}
            />;
        });

        return (
            <>{postsList}</>
        );
    }
}

export default LikesPostsIndex;
