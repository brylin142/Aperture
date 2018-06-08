import * as PhotoApiUtil from '../util/photo_api_util';

export const RECEIVE_ALL_PHOTOS = 'RECEIVE_ALL_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';

export const fetchPhotos = () => dispatch => (
  PhotoApiUtil.fetchPhotos()
    .then(photos => dispatch(receiveAllPhotos(photos)))
);

const receiveALlPhotos = photos => ({
  type: RECEIVE_ALL_PHOTOS,
  photos
})