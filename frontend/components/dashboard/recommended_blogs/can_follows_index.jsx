import React from 'react';
import CanFollowIndexList from './can_follows_index_list';

class CanFollowIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.getfollowFilteredPosts("followedFilter");
        this.props.getCanFollows(this.props.currentUser.id);
    }

    render() {

        const { currentUser, 
            canFollows, 
            createFollow,
            getCanFollows, 
            getfollowFilteredPosts } = this.props;

        const followItems = canFollows.map((user) => {
            return <CanFollowIndexList
                    key={user.id} 
                    user={user}
                    currentUser={currentUser}
                    createFollow={createFollow}
                    getCanFollows={getCanFollows}
                    getfollowFilteredPosts={getfollowFilteredPosts} 
                />;
        });

        return (
            <>
                {followItems}
            </>

        );
    }

}

export default CanFollowIndex;