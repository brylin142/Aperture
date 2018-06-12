import React from 'react';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateBody() {
    return e => this.setState({ body: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state)
    const photoId = parseInt(this.props.match.params.photoId);
    const comment = merge({}, this.state, { body: this.state.body, photo_id: photoId, user_id: this.props.user.id });
    console.log(comment)
    this.props.createComment(comment).then(this.setState({ body: '' }));
    // this.props.history.push(`/photos/${this.props.match.params.photoId}`);
  }

  render() {
    return (
      <div className="comment-form-container">
        <form onSubmit={this.handleSubmit} className="comment-form">
          {/* <img src={this.state.entities.users[this.state.session.id].img_url}/> */}
          {/* <label>Add a comment</label> */}
          <br />

          <textarea
            cols="30"
            rows="5"
            value={this.state.body}
            onChange={this.updateBody()}
            placeholder="Add a comment"
            className="comment-field"
          />
          <br />
          <input type="submit" value="Comment" className="comment-submit"/>
        </form>
      </div>
    );
  }
}

export default withRouter(CommentForm);