import React from 'react';
import { Link } from 'react-router-dom';

class CanFollowIndexList extends React.Component {
    constructor(props) {
        super(props);
        this.follow = this.follow.bind(this);
    }

    follow() {
        this.props.createFollow(
            this.props.currentUser.id, 
            this.props.user.id
            ).then(() => this.props.getCanFollows(
                this.props.currentUser.id))
                    .then(() => this.props.getfollowFilteredPosts("followedFilter"));
    }

    render() {

        const { user, createFollow, currentUser } = this.props;

        return (
            <div>
                {user.username}
                <button
                    onClick={() => this.follow()}>
                    <i className="fa fa-plus-square"></i>
                </button>
            </div>
        );
    }
}

export default CanFollowIndexList;