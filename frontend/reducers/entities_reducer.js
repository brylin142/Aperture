import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import photosReducer from './photos_reducer';
import commentsReducer from './comments_reducer';
import tagsReducer from './tags.reducer';

const entitiesReducer = combineReducers ({
  users: usersReducer,
  photos: photosReducer,
  comments: commentsReducer,
  tags: tagsReducer
});

export default entitiesReducer;
