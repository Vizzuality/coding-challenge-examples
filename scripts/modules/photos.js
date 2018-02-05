import api from '../common/api';

export const LOADING_PHOTOS = 'photos/LOADING';
export const PHOTOS_FETCHED = 'photos/PHOTOS_FETCHED';
export const PHOTOS_CHANGE_PAGE = 'photos/PHOTOS_CHANGE_PAGE';
export const PHOTOS_SORT = 'photos/PHOTOS_SORT';

const initialState = {
  loading: false,
  limit: 9,
  page: 1,
  pages: 20, // fake, not sure how many pages this api has, just for demonstration
  sort: 'title',
  order: 'asc',
  items: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_PHOTOS: {
      return {
        ...state,
        items: null,
        loading: true
      };
    }
    case PHOTOS_FETCHED: {
      return {
        ...state,
        items: action.data,
        loading: false
      };
    }
    case PHOTOS_CHANGE_PAGE: {
      return {
        ...state,
        items: action.data,
        page: action.newPage,
        loading: false
      };
    }
    case PHOTOS_SORT: {
      if (action.order !== action.value) {
        return {
          ...state,
          items: state.items.reverse(),
          order: action.value
        };
      }
      return state;
    }
    default:
      return state;
  }
};

export const getPhotos = () => (dispatch, getState) => {
  const { limit, page, sort, order } = getState().photos;
  dispatch({
    type: LOADING_PHOTOS
  });

  return api.getPhotos(limit, page, sort, order).then(data => {
    dispatch({
      type: PHOTOS_FETCHED,
      data
    });
  });
};

export const sortPhotos = e => dispatch => {
  const { value } = e.target;
  dispatch({
    type: PHOTOS_SORT,
    value
  });
};

export const changePage = newPage => (dispatch, getState) => {
  const { limit, sort, order } = getState().photos;
  dispatch({
    type: LOADING_PHOTOS
  });

  return api.getPhotos(limit, newPage, sort, order).then(data => {
    dispatch({
      type: PHOTOS_CHANGE_PAGE,
      data,
      newPage
    });
  });
};
