import { handleResponse, handleError } from "./apiUtils";
const flightsUrl = "http://localhost:3001/flights/";
const metadataUrl = "http://localhost:3001/metadata/";

export function getMetadata() {
  return fetch(metadataUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function searchFlights(flight) {
  return fetch(flightsUrl)
    .then(handleResponse)
    .catch(handleError);
}
