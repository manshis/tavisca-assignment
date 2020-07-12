import React, { useState } from "react";
import "./FilterBy.css";

function FilterBy({ filterCol, data, handleCancel, handleFilter }) {
  const [filterBy, setFilterBy] = useState({});

  const handleFilterSelect = (col, value) => {
    const newfilterBy = {};

    if (filterBy.hasOwnProperty(col)) {
      newfilterBy[col] = [...filterBy[col], value];
      setFilterBy(newfilterBy);
    } else {
      newfilterBy[col] = [value];
      setFilterBy(newfilterBy);
    }
    console.log(newfilterBy);
  };

  return (
    <div>
      <div className="list-header">Filter By</div>
      <div className="filter-options">
        {filterCol.map(col => {
          const colLabel = col[0].toUpperCase() + col.slice(1, col.length - 1);
          return (
            <div className="filter-option-sec">
              <div>{colLabel}</div>
              <div className="filter-option-sec-data">
                {data.map(colData => {
                  return (
                    <div key={colData.id}>
                      <input
                        type="checkbox"
                        id={colData.id}
                        name={colData[col]}
                        value={colData[col]}
                        onChange={() => {
                          handleFilterSelect(col, colData[col]);
                        }}
                      />
                      <label for={colData[col]}> {colData[col]}</label>
                      <br></br>
                    </div>
                  );
                })}
              </div>
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
            handleFilter(filterBy);
          }}
        >
          {" "}
          Apply
        </button>
      </div>
    </div>
  );
}

export default FilterBy;
