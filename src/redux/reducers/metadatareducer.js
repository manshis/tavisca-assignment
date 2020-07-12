import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function flightReducer(state = initialState.metadata, action) {
  switch (action.type) {
    case types.LOAD_MEATADATA:
      return { ...state, ...action.metadata };
    default:
      return state;
  }
}
