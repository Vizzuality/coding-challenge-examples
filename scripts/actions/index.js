import api from '../api';

export const FETCH_PHOTOS = 'FETCH_PHOTOS';
export const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS';
export const FETCH_PHOTOS_ERROR = 'FETCH_PHOTOS_ERROR';
export const CHANGE_PHOTOS_ORDER = 'CHANGE_PHOTOS_ORDER';
export const SET_PHOTOS_PAGE = 'SET_PHOTOS_PAGE';

export const fetchPhotos = () => (dispatch, getState) => {
  dispatch({ type: FETCH_PHOTOS });
  const state = getState();
  const { limit, page, sort, order } = state.photos;
  api
    .getPhotos({ limit, page, sort, order })
    .then(photos => dispatch({ type: FETCH_PHOTOS_SUCCESS, photos }))
    .catch(error => dispatch({ type: FETCH_PHOTOS_ERROR, error }));
};

export const setPhotosPage = page => dispatch => dispatch({ type: SET_PHOTOS_PAGE, page });

export const changePhotosOrder = order => (dispatch, getState) => {
  const { photos } = getState();
  const value = order !== undefined ? order : !photos.order;
  dispatch({ type: CHANGE_PHOTOS_ORDER, order: value });
  dispatch(setPhotosPage(1));
  dispatch(fetchPhotos());
};

export const fetchNextPage = () => (dispatch, getState) => {
  const { photos } = getState();
  const page = photos.page + 1;
  dispatch(setPhotosPage(page));
  dispatch(fetchPhotos());
};
