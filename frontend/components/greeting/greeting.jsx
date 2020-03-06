import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';

class Greeting extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getPosts();
    }


    render() {
        const { currentUser, posts } = this.props;
        const display = <>
            <h1 className="sportsblr">Sportsblr</h1>
            <Link className="get-started" to="/signup">Get Started</Link>        
            <Link className="log-in" to="/login">Log In</Link>
        </>
    
        return (
            <div className="splash-div">
                <div className="splash-home">
                    <img className="backgroundImage" src={window.snowboardURL} />
                    <div className="splash-box">{display}</div>
                </div>
                <div className="nav-container">
                    <NavbarContainer />
                </div>
            </div>
        )
    }
}

export default Greeting;
