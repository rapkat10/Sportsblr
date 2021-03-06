import React from 'react';
import CanFollowIndexList from './can_follows_index_list';

class CanFollowIndex extends React.Component {
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
            return <CanFollowIndexList
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

export default CanFollowIndex;