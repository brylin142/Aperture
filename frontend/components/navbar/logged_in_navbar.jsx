import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class LoggedInNavbar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className="navbar-greeting">
          <h2>Hello, {this.props.currentUser.username}</h2>
          <img src={this.props.currentUser.img_url} className="profile-pic"></img>
            &nbsp;
            &nbsp;
          <button onClick={this.props.logout} className="logout-button">Logout</button>
        </div>
    )
  }
}

export default LoggedInNavbar;