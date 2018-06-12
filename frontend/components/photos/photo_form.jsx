import React from 'react';
import { withRouter } from 'react-router-dom';

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.photo;
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(() => this.props.history.push(`/photos/${this.state.id}`));
  }

  render() {
    return (
      this.state ?
      <div className="change-form-container">
        <h3>{this.props.formType}</h3>
        <br/>
        <form onSubmit={this.handleSubmit} className="change-form">
          <label>Title: 
            <br/>
            <input
              type="text"
              value={this.state.title}
              onChange={this.update('title')} 
              className="change-form-container-input" />
          </label>
          <br/>
          <br/>
          
          <label>Description: 
            <br/>
            <input
              type="text"
              value={this.state.description}
              onChange={this.update('description')}
              className="change-form-container-input" />
          </label>
          <br/>
          <br/>

          <label>Image URL: 
            <br/>
            <input
              type="text"
              value={this.state.img_url}
              onChange={this.update('img_url')}
              className="change-form-container-input" />
          </label>
          <br/>
          <br/>

          <input type="submit" value={this.props.formType} className="change-form-submit"/>
        </form>
      </div>
      : null
    );
  }
}

export default withRouter(PhotoForm);