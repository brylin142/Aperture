import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { fetchPhoto, deletePhoto, deleteComment, deleteTag } from '../../actions/photo_actions';
import { getFilteredCommemnts } from '../../reducers/selectors';

const msp = (state, ownProps) => {
  const photo = state.entities.photos[ownProps.match.params.photoId];
  return {
    photo,
    user: !photo ? undefined : state.entities.users[photo.user_id],
    comments: !photo ? undefined : getFilteredCommemnts(state.entities.comments, photo.id)
  };
};

const mdp = dispatch => ({
  fetchPhoto: id => dispatch(fetchPhoto(id)),
  deletePhoto: id => dispatch(deletePhoto(id)),
  deleteComment: id => dispatch(deleteComment(id)),
  deleteTag: id => dispatch(deleteTag(id)),
});

export default connect(msp, mdp)(PhotoShow);