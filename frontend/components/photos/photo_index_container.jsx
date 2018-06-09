import { connect } from 'react-redux';
import PhotoIndex from './photo_index';
import { fetchPhotos, deletePhoto } from '../../actions/photo_actions';

const msp = state => ({
  photos: Object.values(state.entities.photos)
});

const mdp = dispatch => ({
  fetchPhotos: () => dispatch(fetchPhotos()),
  deletePhoto: id => dispatch(deletePhoto(id))
});

export default connect(msp, mdp)(PhotoIndex);