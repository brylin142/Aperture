import React from 'react';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class TagForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { label: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateLabel() {
    return e => this.setState({ label: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const photoId = parseInt(this.props.match.params.photoId);
    const tag = merge({}, this.state, { label: this.state.label, photo_id: photoId });
    console.log(tag);
    this.props.createTag(tag).then(this.setState({ label: '' }));
  }

  render() {
    return (
      <div className="tag-form">
        <form onSubmit={this.handleSubmit}>
          <br />
          <input type="text" value={this.state.label} onChange={this.updateLabel()} placeholder="Add a tag" className="tag-submit"/>
          {/* <br />
          <input type="submit" value="Add tag" /> */}
        </form>
      </div>
    );
  }
}

export default withRouter(TagForm);