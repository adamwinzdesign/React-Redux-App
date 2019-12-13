import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getBrewry } from '../actions'

const BrewList = props => {
  console.log('Brewlist props:', props)
  return (
    <div>
      <h1>Welcome to the Brewry API Redux Page!</h1>
      {!props.brewry && !props.isFetching && <p>Go ahead, get a brewry!</p>}
      {props.isFetching && (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      )}
      {props.brewry && 
        <div>
          <p>Name: {props.brewry.name}</p>
          <p>Type: {props.brewry.brewery_type}</p>
          <p>Street: {props.brewry.street}</p>
          <p>City: {props.brewry.city}</p>
        </div>
      }
      <button onClick={props.getBrewry}>Get a Brewry!</button>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    brewry: state.brewry,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
  { getBrewry }
)(BrewList);
