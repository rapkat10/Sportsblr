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
                <div className="nav-container">
                    <NavbarContainer />
                </div>

                <nav className="nav-home">
                    <div>
                        <img className="backgroundImage" src={window.dashboard} />
                    </div>
                </nav>
                <h1 class="dashboard">Dashboard</h1>
            </div>
        )
    }
}

export default Dashboard;
