import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { currentUser, logOut } = this.props;
        const display = currentUser ? (
            <div>
                <h3>Welcome {currentUser.username}!</h3>
                <button className="logout" onClick={logOut}>Logout</button>
            </div>
        ) : (
                <>
                    <Link to="/signup">Get Started</Link>
                    <br />
                    <br />
                    <Link to="/login">Log In</Link>
                </>
            );
    
        return (
            <div>
                <nav>
                    {display}
                </nav>
            </div>
        )
    }
}

export default Greeting;
