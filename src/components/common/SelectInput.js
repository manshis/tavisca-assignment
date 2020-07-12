import React from "react";
import PropTypes from "prop-types";

import "./SelectInput.css";

const SelectInput = ({
  name,
  label,
  options,
  onChange,
  placeholder,
  value,
  defaultOption
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="ui-form-label">
        <select
          name={name}
          className="ui-form-input form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        >
          <option value="">{defaultOption}</option>
          {options.map(option => {
            return (
              <option key={option.id} value={option.text}>
                {option.text}
              </option>
            );
          })}
        </select>
        <span className="form-input-label">{label}</span>
      </label>
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default SelectInput;
