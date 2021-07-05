import {
  FETCH_BREWRY_START,
  FETCH_BREWRY_SUCCESS,
  FETCH_BREWRY_FAILURE,
} from '../actions';

const initialState = {
  brewry: null,
  isFetching: false,
  error: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BREWRY_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_BREWRY_SUCCESS:
      return {
        ...state,
        brewry: action.payload,
        isFetching: false,
        error: ''
      };
    case FETCH_BREWRY_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;