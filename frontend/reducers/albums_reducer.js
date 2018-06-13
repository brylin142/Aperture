import merge from 'lodash/merge';
import { RECEIVE_ALL_ALBUMS, RECEIVE_ALBUM, REMOVE_ALBUM } from '../actions/album_actions';

const albumsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALL_ALBUMS:
      return merge({}, state, action.albums);
    case RECEIVE_ALBUM:
      return merge({}, state, { [action.paylod.album.id]: action.payload.album });
    case REMOVE_ALBUM:
      let newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default albumsReducer;