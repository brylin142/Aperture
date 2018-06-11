import merge from 'lodash/merge';
import { RECEIVE_PHOTO, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/photo_actions';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PHOTO:
      return merge({}, state, action.payload.comments);
    case RECEIVE_COMMENT:
      return merge({}, state, { [action.payload.comment.id]: action.payload.comment });
    case REMOVE_COMMENT:
      let newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;