import React from 'react';
import { connect } from 'react-redux';
import PhotoForm from './photo_form';
import { fetchPhoto, updatePhoto } from '../../actions/photo_actions';

class EditPhotoForm extends React.Component {
  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photoId);
  }



  render() {
    return (
      <PhotoForm 
        action = {this.props.action}
        formType = {this.props.formType}
        photo = {this.props.photo} />
    );
  }
}

const msp = (state, ownProps) => {
  const defaultPhoto = { title: '', description: '', img_url: '' };
  const photo = state.entities.photos[ownProps.match.params.photoId] || defaultPhoto;
  const formType = 'Update Photo';

  return { photo, formType };
};

const mdp = dispatch => ({
  fetchPhoto: id => dispatch(fetchPhoto(id)),
  action: photo => dispatch(updatePhoto(photo))
});

export default connect(msp, mdp)(EditPhotoForm);