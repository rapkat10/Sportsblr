import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { clicked: false };
        this.handleIconClick = this.handleIconClick.bind(this);
    }

    handleIconClick() {
        const value = this.state.clicked ? false : true;
        this.setState({ clicked: value });
    }

    render() {

        const { currentUser, logOut } = this.props;
        const loggedin = currentUser ? "main-nav nav-loggedin" : "";
        const logolink = currentUser ? ("/dashboard") : ("/");

        const button = <span className="logout-dropdown-button"
            onClick={logOut}> Log out
        </span>;

        const dropdown = <>
            <div className="user-dropdown-div">
                <li className="account-dropdown"><span>ACCOUNT</span></li>
                <li className="logout-dropdown-li">{button}</li>
            </div>
        </>;

        const wholepage = <div onClick={this.handleIconClick} className="click-it"></div>;

        const rightNav = (
            <>
                <ul className="icon-list">
                    <li title="dashboard">
                        <Link to="/">
                            <i className="fas fa-home fa-lg"></i>
                        </Link>
                    </li>
                    <li title="Account" className="icon-li">
                        <i onClick={this.handleIconClick} className="fas fa-user fa-lg"></i>
                    </li>
                    {this.state.clicked ? dropdown : <></>}
                </ul>
            </>
        );
        
        const flexLogo = currentUser ? "flex-logo" : "logo-splash";
        const mainNav = (
            <div className={loggedin}>
                <div className="flex-box-nav">
                    <div className={flexLogo}>
                        <Link to="/"><strong className="logo">S</strong></Link>
                    </div>
                    <div className="flex-icon">
                        {currentUser ? rightNav : <></>}
                    </div>
                </div>
            </div>
        );

        return (
            <>
                {this.state.clicked ? wholepage : <></>}
                {mainNav}
            </>
        )
    }
}

export default Navbar;




// -----------------------------------------------------------------

// class Navbar extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = { clicked: false};
//         this.handleIconClick = this.handleIconClick.bind(this);
//     }

//     handleIconClick() {
//         const value = this.state.clicked ? false : true;
//         this.setState({ clicked: value });
//     }

//     render() {

//         const { currentUser, logOut } = this.props;
//         const loggedin = currentUser ? "main-nav nav-loggedin" : "main-nav";
//         const logolink = currentUser ? ("/dashboard") : ("/");

//         const dashboardbutton = <Link to="/dashboard">
//             <strong className="dashboard">Dashboard</strong>
//         </Link>;

//         const button = <span className="logout-dropdown-button"
//             onClick={logOut}> Logout
//         </span>;

//         const dropdown = <>
//             <div className="user-dropdown-div">
//                 <li className="logout-dropdown-li">{button}</li>
//                 <li className="account-dropdown"><span>Account</span></li>
//             </div>
//         </>;

//         const wholepage = <div onClick={this.handleIconClick} className="click-it"></div>;

//         const rightNav = (
//             <>
//                 <ul>
//                     <li className="icon-li">
//                         <i onClick={this.handleIconClick} className="fas fa-user fa-lg"></i>
//                         <p className="account">Account</p>
//                     </li>
//                     {this.state.clicked ? dropdown : <></>}
//                 </ul>                          
//             </>
//         );

//         const leftNav = (
//             <section className={loggedin}>
//                 <Link to={logolink}><strong className="logo">S</strong></Link>
//                 {currentUser ? dashboardbutton : <></>}
//                 {currentUser ? rightNav : <></>}
//             </section>
//         );

//         return (
//             <nav className="navbar">
//                 {leftNav}
//                 {this.state.clicked ? wholepage : <></>}
//             </nav>
//         )
//     }
// }

// export default Navbar;

