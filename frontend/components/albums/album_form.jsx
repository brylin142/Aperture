import React from 'react';
import { withRouter } from 'react-router-dom';

class AlbumForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPhotos();
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then((action) => this.props.history.push(`/albums/${action.payload.album.id}`));
  }

  render() {
    let photos = this.props.photos.map((photo, idx) =>
      <img key={photo.id} src={photo.img_url} className="grid-item" />
    );

    return (
      this.state ?
        <div className="change-album-form-container">
          <h3>{this.props.formType}</h3>
          <br />
          <form onSubmit={this.handleSubmit} className="change-album-form">
            <label>Title:
            <br />
              <input
                type="text"
                value={this.state.title}
                onChange={this.update('title')}
                className="change-album-form-container-input" />
            </label>
            <br />

            <input type="submit" value={this.props.formType} className="change-album-form-submit" />
          </form>

          <div className="photos-index">
            {photos}
          </div>

        </div>
      : null
    );
  }
}

export default withRouter(AlbumForm);