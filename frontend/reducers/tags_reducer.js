import merge from 'lodash/merge';
import { RECEIVE_PHOTO, RECEIVE_TAG, REMOVE_TAG } from '../actions/photo_actions';

const tagsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PHOTO:
      return merge({}, state, action.payload.tags);
    case RECEIVE_TAG:
      return merge({}, state, { [action.payload.tag.id]: action.payload.tag });
    case REMOVE_TAG:
      let newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default tagsReducer;