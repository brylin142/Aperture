import { connect } from 'react-redux';
import { createComment } from '../../actions/photo_actions';
import CommentForm from './comment_form';

const msp = state => ({
  user: state.entities.users[state.entities.comments.user_id]
});

const mdp = dispatch => ({
  createComment: comment => dispatch(createComment(comment))
});

export default connect(msp, mdp)(CommentForm);