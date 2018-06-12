import React from 'react';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class TagForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { label: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateBody() {
    return e => this.setState({ label: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const photoId = parseInt(this.props.match.params.photoId);
    const tag = merge({}, this.state, { label: this.state.label, photo_id: photoId });
    console.log(tag)
    this.props.createTag(tag).then(this.setState({ label: '' }));
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