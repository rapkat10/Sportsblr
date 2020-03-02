import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logOut }) => {
    const display = currentUser ? (
        <div>
            <h3>Welcome {currentUser.username}!</h3>
            <button onClick={logOut}>Logout</button>
        </div>
    ) : (
            <div>
                <Link to="/signup">Get Started</Link>
                <br/> 
                <br/>
                <Link to="/login">Log In</Link>
            </div>
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
