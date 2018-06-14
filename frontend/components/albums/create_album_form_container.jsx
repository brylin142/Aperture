import { connect } from 'react-redux';
import AlbumForm from './album_form';
import { createAlbum } from '../../actions/album_actions';
import { fetchPhotos } from '../../actions/photo_actions';

const msp = state => {
  const photos = Object.values(state.entities.photos);
  const album = { title: '' , user_id: state.session.id };
  const photoIds = [];
  const formType = 'Create Album';

  return {
    album,
    photoIds,
    photos,
    formType
  };
};

const mdp = dispatch => ({
  fetchPhotos: () => dispatch(fetchPhotos()),
  action: album => dispatch(createAlbum(album))
});

export default connect(msp, mdp)(AlbumForm);