import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      first_name: '',
      last_name: '',
      img_url: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearForm();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then( () => this.props.history.push('/photos'));
  }
  
  handleDemoSubmit(e) {
    e.preventDefault();
    this.props.login({ username: "photolover", password: "qwer0987" })
      .then( () => this.props.history.push('/photos'));
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const shared_form_section = () => {
      return (
      <div className="login-form">
        <br/>
        <label>Username:
          <br/>
          <input type="text"
            value={this.state.username}
            onChange={this.update('username')}
            className="login-input"
          />
        </label>
        <br/>
        <label>Password:
          <br/>
          <input type="password"
            value={this.state.password}
            onChange={this.update('password')}
            className="login-input"
          />
        </label>
      </div>
    );
  };

    const other_section = () => {
      return (
        <div>
        <label>Email:
          <br/> 
          <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              className="login-input"
            />
        </label>
        <br/>
        <label>First Name:
          <br/>
          <input type="text"
            value={this.state.first_name}
            onChange={this.update('first_name')}
            className="login-input"
          />
        </label>
        <br/>
        <label>Last Name:
          <br/>
          <input type="text"
            value={this.state.last_name}
            onChange={this.update('last_name')}
            className="login-input"
          />
        </label>
        <br/>
        <label>Profile Picture:
          <br/>
          <input type="text"
            value={this.state.img_url}
            onChange={this.update('img_url')}
            className="login-input"
          />
        </label>
      </div>
      );
    };

    return (
      <div className="auth-wrapper">
      <div className="auth-form">
        <form className="login-form-box">
          <br/>
          Welcome to Aperture!
          <br/>
          Please {this.props.formType}
          {this.renderErrors()}
          
          {shared_form_section()}
          { this.props.formType === 'Signup' ? other_section() : <br/> }
          <br/>
        <button onClick={this.handleSubmit} className="session-submit" type="submit">{this.props.formType}</button>
        <br/>
        <br/>
        <button 
          onClick={this.handleDemoSubmit} className="demo-login">
          Demo Login
        </button>
        <br/>
        <br/>

        </form>
      </div>
      </div>
    );

    
  }
}

export default withRouter(SessionForm);