import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let greeting;

    if (!this.props.currentUser) {
      greeting = 
        <div className="navbar-login">
            <Link to='/login' className="login">Log In</Link>
            &nbsp;
            &nbsp;
            <Link to='/signup' className="signup">Sign Up</Link>
        </div>;
    } else {
      greeting =
      <div className="navbar-greeting">
        <h2>Hello, {this.props.currentUser.username}</h2>
        <img src={this.props.currentUser.img_url} className="profile-pic"></img>
          &nbsp;
          &nbsp;
        <button onClick={this.props.logout} className="logout-button">Logout</button>
      </div>
    }

    return (
      <header className="navbar-header">
        <Link to='/'><h1 className="title">Aperture</h1></Link>
        {greeting}
      </header>
    )
  }
}

export default Navbar;