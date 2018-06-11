import merge from 'lodash/merge';
import { RECEIVE_ALL_PHOTOS, RECEIVE_PHOTO, REMOVE_PHOTO, RECEIVE_COMMENT } from '../actions/photo_actions';

const photosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_PHOTOS:
      return merge({}, state, action.photos);
    case RECEIVE_PHOTO:
      return merge({}, state, { [action.payload.photo.id]: action.payload.photo });
    case REMOVE_PHOTO:
      let newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default photosReducer;