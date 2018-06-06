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
        <div>
          <Link to='/login'>Log In</Link>
          <Link to='/signup'>Sign Up</Link>
        </div>;
    } else {
      greeting =
      <div>
        <h2>Hello, {this.props.currentUser.username}</h2>
        <button onClick={this.props.logout}>Logout</button>
      </div>
    }

    return (
      <header>
        <h1>Aperture</h1>
        {greeting}
      </header>
    )
  }
}

export default Navbar;