import React from "react";
import PropTypes from "prop-types";
import SelectInput from "../common/SelectInput";

import "./FlightForm.css";

const FlightForm = ({
  flight,
  onSearch,
  onChange,
  options,
  defaultOptions
}) => {
  return (
    <form onSubmit={onSearch}>
      <div className="flight-form">
        <div>
          {" "}
          <SelectInput
            name="departure"
            label="Departure"
            value={flight.departure}
            onChange={onChange}
            defaultOptions={defaultOptions}
            options={options.departure}
          />
        </div>
        <div>
          {" "}
          <SelectInput
            name="destination"
            label="Destination"
            value={flight.destination}
            defaultOptions={defaultOptions}
            onChange={onChange}
            options={options.destination}
          />
        </div>
        <div></div>
        <div className="form-same-row">
          <SelectInput
            name="travellers"
            label="Travelers"
            value={flight.travellers}
            defaultOptions={defaultOptions}
            onChange={onChange}
            options={options.travellers}
          />
          <SelectInput
            name="classType"
            label="Class"
            value={flight.classType}
            defaultOptions={defaultOptions}
            onChange={onChange}
            options={options.classType}
          />
        </div>
      </div>

      <button type="submit" className="ui-form-btn">
        Search
      </button>
    </form>
  );
};

FlightForm.propTypes = {
  flight: PropTypes.object.isRequired,
  onSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default FlightForm;
