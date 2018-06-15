import React from 'react';
import { Link } from 'react-router-dom';

class AlbumShow extends React.Component {
  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.albumId);
  }
  
  render() {
    let albumPhotos;
    if (this.props.album) {
      albumPhotos = this.props.album.album_photos.map((photo, idx) => {
        return (<Link to={`/photos/${photo.photo_id}`}><img key={photo.id} src={this.props.photos[photo.photo_id].img_url} className="grid-item" /></Link>)
      });
    } else { return null; }

    return (
      <div className="album-show-wrapper">

        <div className="album-show-container">
          <h1>{this.props.album.title}</h1>
          {/* <p><Link to={'/albums/new'} className="album-new-link">+ Add an album</Link></p> */}
        </div>

        <div className="album-show">
          {albumPhotos}
        </div>

      </div>
    );
  }
}

export default AlbumShow;