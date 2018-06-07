import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import LoggedInNavbarContainer from './logged_in_navbar_container'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let greeting;
    const title = <Link to='/'><h1 className="title">Aperture</h1></Link>
    if (!this.props.currentUser) {
      greeting = () => (
       <header className="navbar-header">
       {title}
        <div className="navbar-login">
            <Link to='/login' className="login-link">Log In</Link>
            &nbsp;
            &nbsp;
            <Link to='/signup' className="signup">Sign Up</Link>
        </div>
      </header>
      )
    } else {
      greeting = () => (
      <header className="navbar-header login">
        {title}
        <LoggedInNavbarContainer />
      </header>
      )
    }

    return (
      greeting()
    )
  }
}

export default Navbar;