import { connect } from 'react-redux';
import AlbumIndex from './album_index';
import { fetchAlbums, deleteAlbum } from '../../actions/album_actions';

const msp = state => ({
  albums: Object.values(state.entities.albums)
});

const mdp = dispatch => ({
  fetchAlbums: () => dispatch(fetchAlbums()),
  deleteAlbum: id => dispatch(deleteAlbum(id))
});

export default connect(msp, mdp)(AlbumIndex);