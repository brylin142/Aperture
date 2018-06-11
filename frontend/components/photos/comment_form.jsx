import React from 'react';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateBody() {
    return e => this.setState({ body: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = merge({}, this.state, { photo_id: this.props.match.params.photoId });
    debugger;
    this.props.createComment(comment);
    this.props.history.push(`/photos/${this.props.match.params.photoId}`);
  }

  render() {
    console.log(this.props);
    return (
      <div className="comment-form">
        <form onSubmit={this.handleSubmit}>
          <label>Comment</label>
          <br />

          <textarea
            cols="30"
            rows="10"
            value={this.props.body}
            onChange={this.updateBody}
          />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default withRouter(CommentForm);