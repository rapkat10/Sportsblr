import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const display = <>
            <h1 className="sportsblr">Sportsblr</h1>
            <p className="slogan">Dedication + Motivation = success</p>
            <Link className="get-started" to="/signup">Get Started</Link>        
            <Link className="log-in" to="/login">Log In</Link>
        </>

        return (
            <>
                <div className="splash-logo-div">
                    <Link to="/"><strong className="splash-logo">S</strong></Link>
                    <ul className="about-links">
                        <li title="linkedIn">
                            <a href="https://www.linkedin.com/in/rapkat-amin-33b82b1a4/"
                                target="_blank">
                                <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                        </li>
                        <li title="GitHub">
                            <a href="https://github.com/rapkat10" target="_blank">
                                <i className="fab fa-github fa-2x"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="splash-home">
                    <img className="backgroundImage" src={window.snowboardURL} />
                    <div className="splash-box">{display}</div>
                </div>
            </>
        )
    }
}

export default Greeting;
