import React from 'react';
import { Link } from 'react-router-dom';
// import AlbumForm from './create_album_container';

class AlbumIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAlbums();
  }

  render() {
    let albums = this.props.albums.map( (album, idx) => 
      <Link to={`/albums/${album.id}`}><img key={album.id} src={this.props.photos[this.props.albumPhotos[0][0].photo_id].img_url} className="album-grid-item"/></Link>
    );

    return(
      <div className="albums-index-wrapper">

        <div className="albums-index-container">
          <h1>Albums</h1>
          {/* <p><Link to={'/albums/new'} className="album-new-link">+ Add an album</Link></p> */}
        </div>

        <div className="albums-index">
          {albums}
        </div>

      </div>
    );
  }
}

export default AlbumIndex;