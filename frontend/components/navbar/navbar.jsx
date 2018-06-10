import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import LoggedInNavbarContainer from './logged_in_navbar_container';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let greeting;
    if (!this.props.currentUser) {
      greeting = () => (
       <header className="navbar-header">
       <Link to='/'><h1 className="title">Aperture</h1></Link>
        <div className="navbar-login">
            <Link to='/login' className="login-link">Log In</Link>
            &nbsp;
            &nbsp;
            <Link to='/signup' className="signup">Sign Up</Link>
        </div>
      </header>
      );
    } else {
      greeting = () => (
      <header className="navbar-header login">
        <Link to='/photos'><h1 className="title">Aperture</h1></Link>
        <LoggedInNavbarContainer />
      </header>
      );
    }

    return (
      greeting()
    );
  }
}

export default Navbar;