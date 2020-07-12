import * as types from "./actionTypes";
import { beginApiCall, apiCallError } from "./apiStatusActions";
import * as flightApi from "../../api/flightApi";

export function loadMetadataSuccess(metadata) {
  return { type: types.LOAD_MEATADATA, metadata };
}

export function searchFlight(flights) {
  return { type: types.SEARCH_FLIGHT, flights };
}

export function loadMetadata() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return flightApi
      .getMetadata()
      .then(metadata => {
        dispatch(loadMetadataSuccess(metadata));
      })
      .catch(error => {
        dispatch(apiCallError());
        throw error;
      });
  };
}

export function searchFlights(flight) {
  //eslint-disable-next-line no-unused-vars
  return function(dispatch, getState) {
    dispatch(beginApiCall());
    return flightApi
      .searchFlights(flight)
      .then(serachedFlights => {
        dispatch(searchFlight(serachedFlights));
      })
      .catch(error => {
        dispatch(apiCallError());
        throw error;
      });
  };
}
