import { connect } from 'react-redux';
import AlbumIndex from './album_index';
import { fetchAlbums, deleteAlbum } from '../../actions/album_actions';

const msp = state => {
  const albums = Object.values(state.entities.albums);
  const albumPhotos = albums.map(album => album.album_photos);
  return {
    albums,
    albumPhotos,
    photos: state.entities.photos
  };
};

const mdp = dispatch => ({
  fetchAlbums: () => dispatch(fetchAlbums()),
  deleteAlbum: id => dispatch(deleteAlbum(id))
});

export default connect(msp, mdp)(AlbumIndex);