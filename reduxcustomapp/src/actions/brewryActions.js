import axios from 'axios';

export const FETCH_BREWRY_START = 'FETCH_BREWRY_START';
export const FETCH_BREWRY_SUCCESS = 'FETCH_BREWRY_SUCCESS';
export const FETCH_BREWRY_FAILURE = 'FETCH_BREWRY_FAILURE';

// async action creator
export const getBrewry = () => dispatch => {
  dispatch({ type: FETCH_BREWRY_START });
  axios
    .get('https://api.openbrewerydb.org/breweries?by_state=illinois&per_page=1')
    .then(res => {
      dispatch({ type: FETCH_BREWRY_SUCCESS, payload: res.data[0]});
      console.log('fetch result: in brewryActions as just res: ', res);
      console.log('fetch result: in brewryActions as res.data: ', res.data)
      console.log('fetch result: in brewryActions as res.data[0]: ', res.data[0])
      console.log('fetch result: in brewryActions as res.data[0].name: ', res.data[0].name)
      console.log('fetch result: in brewryActions as res.data[0].brewery_type: ', res.data[0].brewery_type)
    })
    .catch(err => {
      dispatch({ type: FETCH_BREWRY_FAILURE, payload: err.response});
    })
}
