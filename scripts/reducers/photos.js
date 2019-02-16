import {
  FETCH_PHOTOS,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_ERROR,
  CHANGE_PHOTOS_ORDER,
  SET_PHOTOS_PAGE
} from '../actions';

const initialState = {
  photos: [],
  fetching: false,
  fetched: true,
  error: null,
  limit: 9,
  page: 1,
  sort: 'title',
  order: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS: {
      return { ...state, fetching: true };
    }
    case FETCH_PHOTOS_SUCCESS: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        photos: [...state.photos, ...action.photos]
      };
    }
    case FETCH_PHOTOS_ERROR: {
      return {
        ...state,
        fetching: false,
        error: action.error
      };
    }
    case CHANGE_PHOTOS_ORDER: {
      return {
        ...state,
        order: action.order,
        photos: []
      };
    }
    case SET_PHOTOS_PAGE: {
      return {
        ...state,
        page: action.page
      };
    }
    default:
      return state;
  }
};
