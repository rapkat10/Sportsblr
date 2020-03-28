import React from 'react';
import LikesCanFollowIndexList from './likes_can_follows_index_list';

class LikesCanFollowIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getCanFollows(this.props.currentUser.id);
    }

    render() {
        const { currentUser, 
            canFollows, 
            createFollow,
            getCanFollows,
            getfollowFilteredPosts } = this.props;
        const canFollowsLimit = canFollows.slice(0, 4);
        const followlists = canFollowsLimit.map((followingUser) => {
            return <LikesCanFollowIndexList
                    key={followingUser.id} 
                    followingUser={followingUser}
                    currentUser={currentUser}
                    createFollow={createFollow}
                    getCanFollows={getCanFollows}
                    getfollowFilteredPosts={getfollowFilteredPosts}
                />;
        });

        return (
            <>
                {followlists}
            </>

        );
    }

}

export default LikesCanFollowIndex;