import React from "react";

function FilterButton({ btnName, handleFilter, isPressed }) {
  return (
    <button
      name={btnName}
      onClick={() => handleFilter(btnName)}
      aria-pressed={isPressed}
      className="filter-btn"
    >
      {btnName}
    </button>
  );
}

export default FilterButton;
