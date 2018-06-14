import React from 'react';
import { Link } from 'react-router-dom';
// import AlbumForm from './create_album_container';

class AlbumIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAlbums();
  }

  render() {
    let albums = this.props.albums.map( (album, idx) => 
      <Link to={`/albums/${album.id}`}><img key={album.id} className="album-grid-item"/>jnk</Link>
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