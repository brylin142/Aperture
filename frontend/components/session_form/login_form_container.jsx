import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, receiveErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'Login',
  navLink: <Link to='/Signup'>Sign Up</Link>,  
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  processForm: (user) => dispatch(login(user)),
  clearForm: () => dispatch(receiveErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
