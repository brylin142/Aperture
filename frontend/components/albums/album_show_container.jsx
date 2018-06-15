import { connect } from 'react-redux';
import AlbumShow from './album_show';
import { fetchAlbum, deleteAlbum } from '../../actions/album_actions';

const msp = (state, ownProps) => {
  const album = state.entities.albums[ownProps.match.params.albumId];
  return {
    album,
    photos: !album ? undefined : state.entities.photos,
    user: !album ? undefined : state.entities.users[album.user_id],
    currentUser: !album ? undefined : state.entites.users[state.session.id]
  };
};

const mdp = dispatch => ({
  fetchAlbum: id => dispatch(fetchAlbum(id)),
  deleteAlbum: id => dispatch(deleteAlbum(id))
});

export default connect(msp, mdp)(AlbumShow);