import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

    constructor(props) {
        super(props);
        this.links = <>
            <Link to="/signup">Get Started</Link>
            <br />
            <br />
            <Link to="/login">Log In</Link>
        </>;
    }

    render() {
        
        const { currentUser, logOut } = this.props;
        const display = currentUser ? (
            <div>
                <h3>Welcome {currentUser.username}!</h3>
                <button onClick={logOut}>Logout</button>
            </div>
        ) : (
                <div>{this.links}</div>
            );
    
        return (
            <header>
                <h1>Hello from Greeting</h1>
                <div>
                    {display}
                </div>
            </header>
        )
    }
}

export default Greeting;
