import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { signup, login, logout } from './actions/session_actions';
import { 
  fetchPhotos, 
  fetchPhoto, 
  createPhoto, 
  updatePhoto, 
  deletePhoto, 
  createComment 
} from './actions/photo_actions';
  
document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchPhotos = fetchPhotos;
  window.fetchPhoto = fetchPhoto;
  window.createPhoto = createPhoto;
  window.updatePhoto = updatePhoto;
  window.deletePhoto = deletePhoto;
  window.createComment = createComment;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
