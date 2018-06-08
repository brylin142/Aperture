import * as PhotoApiUtil from '../util/photo_api_util';

export const RECEIVE_ALL_PHOTOS = 'RECEIVE_ALL_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';

export const fetchPhotos = () => dispatch => (
  PhotoApiUtil.fetchPhotos()
    .then(photos => dispatch(receiveAllPhotos(photos)))
);

export const fetchPhoto = id => dispatch => (
  PhotoApiUtil.fetchPhoto(id).then(photo => dispatch(receivePhoto(photo)))
);

export const createPhoto = photo => dispatch => (
  PhotoApiUtil.createPhoto(photo).then(photoFromServer => dispatch(receivePhoto(photoFromServer)))
);

export const updatePhoto = photo => dispatch => (
  PhotoApiUtil.updatePhoto(photo).then(photoFromServer => dispatch(receivePhoto(photoFromServer)))
);

export const deletePhoto = id => dispatch => (
  PhotoApiUtil.deletePhoto(id).then(photo => dispatch(removePhoto(photo)))
);

const receiveAllPhotos = photos => ({
  type: RECEIVE_ALL_PHOTOS,
  photos
})

const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
})

const removePhoto = photo => ({
  type: REMOVE_PHOTO,
  id: photo.id
})