import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';
import { RECEIVE_PHOTO } from '../actions/photo_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_PHOTO:
      return merge({}, state, { [action.payload.user.id]: action.payload.user });
    default:
      return state;
  }
};

export default usersReducer;
