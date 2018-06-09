import React from 'react';
import { Link } from 'react-router-dom';

class PhotoIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPhotos();
  }

  render () {
    let colLength = this.props.photos.length / 4;
    let photos = this.props.photos.map((photo, idx) =>
    <Link to={`/photos/${photo.id}`}><img key={photo.id} src={photo.img_url}/></Link>
    );

    return (
      <div className="photos-index">
        <h1>Photos</h1>
        <div className="row">{photos}</div>
      </div>
    );
  }
}

export default PhotoIndex;