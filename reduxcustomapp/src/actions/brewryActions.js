import axios from 'axios';

export const FETCH_BREWRY_START = 'FETCH_BREWRY_START';
export const FETCH_BREWRY_SUCCESS = 'FETCH_BREWRY_SUCCESS';
export const FETCH_BREWRY_FAILURE = 'FETCH_BREWRY_FAILURE';

// async action creator
export const getBrewry = () => dispatch => {
  dispatch({ type: FETCH_BREWRY_START });
  axios
    .get('https://api.openbrewerydb.org/breweries?by_state=missouri')
    .then(res => {
      dispatch({ type: FETCH_BREWRY_SUCCESS, payload: res.data});
      console.log('fetch result: ', res)
    })
    .catch(err => {
      dispatch({ type: FETCH_BREWRY_FAILURE, payload: err.response});
    })
}