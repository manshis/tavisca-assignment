import React, { useState } from "react";

import "./SortBy.css";

function SortBy({ data, handleSort, handleCancel }) {
  const [sortBy, setSortBy] = useState("");
  const [sortDirection, setsortDirection] = useState("asc");

  const handleSortChange = (sortField, direcion) => {
    setSortBy(sortField);
    setsortDirection(direcion);
  };

  return (
    <div>
      <div className="list-header">Sort By</div>
      <div className="sort-options">
        {data.map(option => {
          return (
            <div key={option}>
              <input
                type="radio"
                id={option}
                name="age"
                value={option}
                onChange={() => {
                  handleSortChange(option, "asc");
                }}
              />
              <label for={option}>{option} (Lowest to Highest)</label>
              <br></br>
              <input
                type="radio"
                id={option}
                name="age"
                value={option}
                onChange={() => {
                  handleSortChange(option, "desc");
                }}
              />
              <label for={option}>{option} (Highest to Lowest)</label>
              <br></br>
            </div>
          );
        })}
      </div>
      <div className="sort-actions">
        <button className="actionButton" onClick={handleCancel}>
          Cancel
        </button>
        <button
          className="actionButton"
          onClick={() => {
            handleSort(sortBy, sortDirection);
          }}
        >
          {" "}
          Apply
        </button>
      </div>
    </div>
  );
}

export default SortBy;
