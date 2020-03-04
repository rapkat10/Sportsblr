import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { currentUser, logOut } = this.props;

        return (
            <div className="dashboard-div">              
                <img className="backgroundImage" src={window.dashboard} />
                <div className="nav-container">
                    <NavbarContainer />
                </div>
            </div>
        )
    }
}

export default Dashboard;
