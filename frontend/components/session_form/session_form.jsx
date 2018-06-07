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
      last_name: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.history.push('/'));
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

    // if (this.props.formType === 'signup') {
    //   return (
    //     <div className="login-form-container">
    //       <form onSubmit={this.handleSubmit} className="login-form-box">
    //         Welcome to Aperture!
    //         <br/>
    //         Please {this.props.formType}
    //         {this.renderErrors()}
    //         <div className="login-form">
    //           <br/>
    //           <label>Username:
    //             <input type="text"
    //               value={this.state.username}
    //               onChange={this.update('username')}
    //               className="login-input"
    //             />
    //           </label>
    //           <br/>
    //           <label>Password:
    //             <input type="password"
    //               value={this.state.password}
    //               onChange={this.update('password')}
    //               className="login-input"
    //             />
    //           </label>
    //           <br/>
    //           <label>Email:
    //             <input type="text"
    //               value={this.state.email}
    //               onChange={this.update('email')}
    //               className="login-input"
    //             />
    //           </label>
    //           <br/>
    //           <label>First Name:
    //             <input type="text"
    //               value={this.state.firstName}
    //               onChange={this.update('firstName')}
    //               className="login-input"
    //             />
    //           </label>
    //           <br/>
    //           <label>Last Name:
    //             <input type="text"
    //               value={this.state.lastName}
    //               onChange={this.update('lastName')}
    //               className="login-input"
    //             />
    //           </label>
    //           <br/>
    //           <input className="session-submit" type="submit" value={this.props.formType} />
    //         </div>
    //       </form>
    //     </div>
    //   );
    // } else {
      return (
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            Welcome to Aperture!
            <br/>
            Please {this.props.formType}
            {this.renderErrors()}
            <div className="login-form">
              <br/>
              <label>Username:
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"
                />
              </label>
              <br/>
              <label>Password:
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                />
              </label>
              <br/>
              <input className="session-submit" type="submit" value={this.props.formType} />
            </div>
          </form>
        </div>
      );
    // }

    
  }
}

export default withRouter(SessionForm);