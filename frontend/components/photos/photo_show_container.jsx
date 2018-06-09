import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { fetchPhoto, deletePhoto } from '../../actions/photo_actions';

const msp = (state, ownProps) => {
  return {
    photo: state.entities.photos[ownProps.match.params.photoId]
  };
};

const mdp = dispatch => ({
  fetchPhoto: id => dispatch(fetchPhoto(id)),
  deletePhoto: id => dispatch(deletePhoto(id))
});

export default connect(msp, mdp)(PhotoShow);