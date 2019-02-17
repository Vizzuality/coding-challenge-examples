import {
  FETCH_PHOTOS,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_ERROR,
  SET_PHOTOS_ORDER,
  SET_PHOTOS_PAGE
} from '../actions';

const initialState = {
  photos: [],
  fetching: false,
  fetched: true,
  error: null,
  limit: 8,
  page: 1,
  sort: 'title',
  order: 'ascending',
  orderOptions: ['ascending', 'descending']
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
    case SET_PHOTOS_ORDER: {
      return {
        ...state,
        order: action.order,
        photos: state.order === action.order ? state.photos : []
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
