import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import PageNotFound from "../PageNotFound";
import FlightForm from "../Flights/FlightForm";
import FlightSearchList from "../Flights/FlightSearchList";
import HotelForm from "../Hotels/HotelForm";
import { useHistory } from "react-router-dom";

import { loadMetadata } from "../../redux/actions/flightActions";

function TabContent({ metadata, flights, loadMetadata, ...props }) {
  const history = useHistory();

  const [flight, setFlight] = useState({
    departure: "",
    destination: "",
    travellers: "",
    classType: ""
  });

  useEffect(() => {
    if (!metadata.length) {
      loadMetadata().catch(error => {
        alert("Loading metadata failed" + error);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.tab]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFlight(prevFlight => ({
      ...prevFlight,
      [name]: value
    }));
  }

  function handleSearch(event) {
    event.preventDefault();
    history.push("/flight/search");
  }
  return (
    <Switch>
      <Route
        path="/flight/search"
        component={() => {
          return <FlightSearchList flight={flight}></FlightSearchList>;
        }}
      />
      <Route
        exact
        path="/"
        component={() => {
          return (
            <FlightForm
              flight={flight}
              onChange={handleChange}
              onSearch={handleSearch}
              defaultOptions={[]}
              options={metadata}
            ></FlightForm>
          );
        }}
      />
      <Route
        path="/flight"
        component={() => {
          return (
            <FlightForm
              flight={flight}
              onChange={handleChange}
              onSearch={handleSearch}
              defaultOptions={[]}
              options={metadata}
            ></FlightForm>
          );
        }}
      />
      <Route path="/hotel" component={HotelForm} />

      <Route component={PageNotFound} />
    </Switch>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    metadata: state.metadata
  };
}

const mapDispatchToProps = {
  loadMetadata
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabContent);
