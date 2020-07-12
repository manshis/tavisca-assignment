import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function flightReducer(state = initialState.flights, action) {
  switch (action.type) {
    case types.SEARCH_FLIGHT:
      return [...state, ...action.flights];
    default:
      return state;
  }
}
