import React from 'react';
import { Link } from 'react-router-dom';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.albumId);
  }
  
  render() {
    console.log(this.props)
    let albumPhotos = this.props.album.photos.map((photo, idx) =>
      <Link to={`/photos/${photo.id}`}><img key={photo.id} src={photo.img_url} className="grid-item" /></Link>
    );

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