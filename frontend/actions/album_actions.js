import * as AlbumApiUtil from '../util/album_api_util';

export const RECEIVE_ALL_ALBUMS = 'RECEIVE_ALL_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const REMOVE_ALBUM = 'REMOVE_ALBUM';

export const fetchAlbums = () => dispatch => (
  AlbumApiUtil.fetchAlbums().then(albums => dispatch(receiveAllAlbums(albums)))
);

export const fetchAlbum = album => dispatch => (
  AlbumApiUtil.fetchAlbum(album).then(payload => dispatch(receiveAlbum(payload)))
);

export const createAlbum = album => dispatch => (
  AlbumApiUtil.fetchAlbum(album).then(payload => dispatch(receiveAlbum(payload)))
);

export const deleteAlbum = id => dispatch => (
  AlbumApiUtil.deleteAlbum(id).then(payload => dispatch(removeAlbum(payload)))
);

const receiveAllAlbums = albums => ({
  type: RECEIVE_ALL_ALBUMS,
  albums
});

const receiveAlbum = payload => ({
  type: RECEIVE_ALBUM,
  payload
});

const removeAlbum = payload => ({
  type: REMOVE_ALBUM,
  id: payload.album.id
});