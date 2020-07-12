import { combineReducers } from "redux";
import flights from "./flightreducer";
import metadata from "./metadatareducer";
import apiCallInProgress from "./apiStatusReducer";

const rootreducer = combineReducers({
  flights,
  metadata,
  apiCallInProgress
});

export default rootreducer;
