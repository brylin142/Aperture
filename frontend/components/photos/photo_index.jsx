import React from 'react';
import { Link } from 'react-router-dom';
import PhotoForm from './create_photo_form_container';

class PhotoIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPhotos();
  }

  render () {
    let photos = this.props.photos.map( (photo, idx) =>
      <Link to={`/photos/${photo.id}`}><img key={photo.id} src={photo.img_url} className="grid-item"/></Link>
    );

    return (
      <div className="photos-index-wrapper">
        
        <div className="photos-index-container">
          <h1>Photos</h1>
          <p><Link to={'/photos/new'} className="photo-new-link">+ Add a photo</Link></p>
        </div>

        <div className="photos-index">
          {photos}
        </div>

      </div>
    );
  }
}

export default PhotoIndex;