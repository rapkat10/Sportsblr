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
            this.props.followingUser.id
        ).then(() => this.props.getCanFollows(this.props.currentUser.id));
    }

    render() {
        const { followingUser } = this.props;

        return (
            <div className="RCB-div">
                <div className="canfollow-user-img-div">
                    <img className="can-follow-user-img" src={followingUser.img_url} />
                    <p className="can-follow-username">{followingUser.username}</p>
                </div>
                <div className="follow-button-div">
                    <button className="follow-button"
                        onClick={() => this.follow()}>
                        <i title="Follow" className="fas fa-plus-square"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default CanFollowIndexList;