import { connect } from 'react-redux';
import { createTag, deleteTag } from '../../actions/photo_actions';
import TagForm from './tag_form';

const msp = state => ({

});

const mdp = dispatch => ({
  createTag: tag => dispatch(createTag(tag)),
  deleteTag: id => dispatch(deleteTag(id))
});

export default connect(msp, mdp)(TagForm);