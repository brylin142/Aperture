import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import LoggedInNavbar from './logged_in_navbar';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id]
  };

};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()) 
});

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInNavbar);
