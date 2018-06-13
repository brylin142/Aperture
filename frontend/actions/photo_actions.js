import * as PhotoApiUtil from '../util/photo_api_util';

export const RECEIVE_ALL_PHOTOS = 'RECEIVE_ALL_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_TAG = 'RECEIVE_TAG';
export const REMOVE_TAG = 'REMOVE_TAG';

export const fetchPhotos = () => dispatch => (
  PhotoApiUtil.fetchPhotos()
    .then(photos => dispatch(receiveAllPhotos(photos)))
);

export const fetchPhoto = id => dispatch => (
  PhotoApiUtil.fetchPhoto(id).then(payload => dispatch(receivePhoto(payload)))
);

export const createPhoto = photo => dispatch => (
  PhotoApiUtil.createPhoto(photo).then(payload => dispatch(receivePhoto(payload)))
);

export const updatePhoto = photo => dispatch => (
  PhotoApiUtil.updatePhoto(photo).then(payload => dispatch(receivePhoto(payload)))
);

export const deletePhoto = id => dispatch => (
  PhotoApiUtil.deletePhoto(id).then(payload => dispatch(removePhoto(payload)))
);

export const createComment = comment => dispatch => (
  PhotoApiUtil.createComment(comment).then(payload => dispatch(receiveComment(payload)))
);

export const deleteComment = id => dispatch => (
  PhotoApiUtil.deleteComment(id).then(payload => dispatch(removeComment(payload)))
);

export const createTag = tag => dispatch => (
  PhotoApiUtil.createTag(tag).then(payload => dispatch(receiveTag(payload)))
);

export const deleteTag = id => dispatch => (
  PhotoApiUtil.deleteTag(id).then(payload => dispatch(removeTag(payload)))
);

const receiveAllPhotos = photos => ({
  type: RECEIVE_ALL_PHOTOS,
  photos
});

const receivePhoto = payload => ({
  type: RECEIVE_PHOTO,
  payload
});

const removePhoto = payload => ({
  type: REMOVE_PHOTO,
  id: payload.photo.id
});

const receiveComment = payload => ({
  type: RECEIVE_COMMENT,
  payload
});

const removeComment = payload => ({
  type: REMOVE_COMMENT,
  id: payload.comment.id
});

const receiveTag = payload => ({
  type: RECEIVE_TAG,
  payload
});

const removeTag = payload => ({
  type: REMOVE_TAG,
  id: payload.tag.id
});