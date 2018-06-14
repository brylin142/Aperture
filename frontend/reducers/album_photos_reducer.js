import merge from 'lodash/merge';
import { RECEIVE_ALL_ALBUMS } from '../actions/album_actions';

const albumPhotosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_ALBUMS:
      return merge({}, state, action.payload.albums.album_photos);
    default:
      return state;
  }
};

export default albumPhotosReducer;