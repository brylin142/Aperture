import React from 'react';
import { Link } from 'react-router-dom';

class PhotoShow extends React.Component {
  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photoId);
  }

  render() {
    return (
      this.props.photo ?
        <div className="photo-container">
          <img src={this.props.photo.img_url} className="photo-show"/>
          <h3 className="photo-show-profile">
            <img src={this.props.photo.user.img_url} className="photo-show-profile-pic"/>
            {this.props.photo.user.first_name}
          </h3>
          <br/>
          <p className="photo-show-title">{this.props.photo.title}</p>
          <br/>
          <p className="photo-show-description">{this.props.photo.description}</p>
          <br/>
          <div className="change-photo-container">
            <Link to={`/photos/${this.props.photo.id}/edit`} className="edit-photo">Edit Photo</Link>
            <button 
              onClick={() => this.props.deletePhoto(this.props.match.params.photoId)
                .then(() => this.props.history.push('/photos'))}
              className="delete-photo">
              Delete Photo
            </button>
          </div>
          <br/>
          <br/>
          <Link to='/photos' className="photo-show-index-link">Photo Index</Link>
      </div>
      : null
    );
  }
}

export default PhotoShow;