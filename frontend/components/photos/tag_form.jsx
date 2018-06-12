import React from 'react';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class TagForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateBody() {
    return e => this.setState({ body: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const tag = merge({}, this.state, { photo_id: this.props.match.params.photoId });
    this.props.createTag(tag);
    // this.props.history.push(`/photos/${this.props.match.params.photoId}`);
  }

  render() {
    return (
      <div className="tag-form">
        <form onSubmit={this.handleSubmit}>
          <label>Tag</label>
          <br />
          <input type="text" value={this.props.body} onChange={this.updateBody}/>
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default withRouter(TagForm);