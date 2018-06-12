import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PhotoForm from './photo_form';
import { createPhoto } from '../../actions/photo_actions';

const msp = state => {
  const photo = { title: '', description: '', user_id: state.session.id, img_url: '' };
  const formType = 'Create Photo';

  return { photo, formType };
};

const mdp = dispatch => ({
  action: photo => dispatch(createPhoto(photo))
});

export default connect(msp, mdp)(PhotoForm);