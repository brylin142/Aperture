import React from 'react';
import { Link } from 'react-router-dom';

class PhotoShow extends React.Component {
  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photoId);
  }

  render() {
    return (
      this.props.photo ?
      <div>
        <img src={this.props.photo.img_url} className="photo-show"/>
        <h3>
          <img src={this.props.photo.user.img_url} className="photo-show-profile"/>
          {this.props.photo.user.first_name}
        </h3>
        <p className="photo-show-title">{this.props.photo.title}</p>
        <p>{this.props.photo.description}</p>
        <Link to={`/photos/${this.props.photo.id}/edit`}>Edit Photo</Link>
        <br/>
        <br/>
        <Link to='/photos'>Photo Index</Link>
      </div>
      : null
    );
  }
}

export default PhotoShow;