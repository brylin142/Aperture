import React from 'react';
import { Link } from 'react-router-dom';

class PhotoIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPhotos();
  }

  render () {
    let photos = this.props.photos.map((photo, idx) =>
    <Link to={`/photos/${photo.id}`}><img key={photo.id} src={photo.img_url} className="grid-item"/></Link>
    );

    return (
      <div className="photos-index-container">
        <h1>Photos</h1>
        <div className="photos-index">{photos}</div>
      </div>
    );
  }
}

export default PhotoIndex;