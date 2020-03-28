import React from 'react';
import ExploreCanFollowIndexList from './explore_can_follows_index_list';

class ExploreCanFollowIndex extends React.Component {
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
            getCanFollows } = this.props;
        const canFollowsLimit = canFollows.slice(0, 4);
        const followlists = canFollowsLimit.map((followingUser) => {
            return <ExploreCanFollowIndexList
                    key={followingUser.id} 
                    followingUser={followingUser}
                    currentUser={currentUser}
                    createFollow={createFollow}
                    getCanFollows={getCanFollows}
                />;
        });

        return (
            <>
                {followlists}
            </>

        );
    }

}

export default ExploreCanFollowIndex;