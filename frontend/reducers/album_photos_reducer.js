import merge from 'lodash/merge';
import { RECEIVE_ALL_ALBUMS, RECEIVE_ALBUM } from '../actions/album_actions';

const albumPhotosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_ALBUMS:
      return merge({}, state, action.payload.album_photos);
    case RECEIVE_ALBUM:
      return merge({}, state, action.payload.album_photos);
    default:
      return state;
  }
};

export default albumPhotosReducer;