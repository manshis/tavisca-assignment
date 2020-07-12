import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { searchFlights } from "../../redux/actions/flightActions";
import FlightSearchCard from "./FlightSearchCard";
import { Redirect, useHistory } from "react-router-dom";
import SortBy from "../common/SortBy";
import FilterBy from "../common/FilterBy";

function FlightSearchList({ flight, flights, searchFlights }) {
  const history = useHistory();
  const [sortBy, setSortBy] = useState(false);
  const [filterBy, setFilterBy] = useState(false);
  const [filterdFlights, setfilterdFlights] = useState([...flights]);

  const sortColumns = { Duration: "journey", Airline: "airlines" };
  const filterColumns = ["airlines"];

  useEffect(() => {
    if (flights.length <= 0) {
      searchFlights().catch(error => {
        alert("Loading courses failed" + error);
      });
    }

    //if (filterdFlights.length <= 0) {
    setfilterdFlights(flights);
    //}

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flights]);

  const handleSort = (sortBy, sortDirection) => {
    flights.sort((a, b) => {
      if (sortDirection === "asc") {
        return ("" + a[sortColumns[sortBy]]).localeCompare(
          b[sortColumns[sortBy]],
          undefined,
          {
            sensitivity: "base",
            numeric: true
          }
        );
      } else {
        return ("" + b[sortColumns[sortBy]]).localeCompare(
          a[sortColumns[sortBy]],
          undefined,
          {
            sensitivity: "base",
            numeric: true
          }
        );
      }
    });

    setSortBy(false);
  };

  const handleFilter = filterCriteria => {
    let filterflights = [];
    for (let criteria in filterCriteria) {
      filterflights = flights.filter(flight => {
        console.log(filterCriteria[criteria].indexOf(flight[criteria]) >= 0);
        console.log(flight);
        return filterCriteria[criteria].indexOf(flight[criteria]) >= 0;
      });
      console.log(flights);
    }
    setfilterdFlights(filterflights);
    setFilterBy(false);
  };

  return (
    <>
      {sortBy ? (
        <SortBy
          data={Object.keys(sortColumns)}
          handleSort={handleSort}
          handleCancel={() => {
            setSortBy(false);
          }}
        ></SortBy>
      ) : filterBy ? (
        <FilterBy
          filterCol={filterColumns}
          data={flights}
          handleFilter={handleFilter}
          handleCancel={() => {
            setFilterBy(false);
          }}
        ></FilterBy>
      ) : flight.departure && flight.destination ? (
        <div>
          <div className="list-header">
            {flight.departure} -> {flight.destination}
          </div>
          <div className="action-header">
            <button
              className="actionButton"
              onClick={event => {
                event.preventDefault();
                history.push("/flight");
              }}
            >
              Edit
            </button>
            <button
              className="actionButton"
              onClick={() => {
                setSortBy(true);
              }}
            >
              {" "}
              Sort by
            </button>
            <button
              className="actionButton"
              onClick={() => {
                setFilterBy(true);
              }}
            >
              {" "}
              Filter
            </button>
          </div>
          {filterdFlights.map(serachedFlight => {
            return (
              <div key={serachedFlight.id}>
                <FlightSearchCard
                  serachedFlight={serachedFlight}
                ></FlightSearchCard>
              </div>
            );
          })}
        </div>
      ) : (
        <Redirect to="/flight" />
      )}
    </>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    flights: state.flights
  };
}

const mapDispatchToProps = {
  searchFlights
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlightSearchList);
