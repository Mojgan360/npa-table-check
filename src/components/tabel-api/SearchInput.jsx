/* eslint-disable react/prop-types */
import React from "react";

const SearchInput = ({ filter, setFilter }) => {
  return (
    <span>
      search:
      <input value={filter || ""} onChange={(e) => setFilter(e.target.value)} />
    </span>
  );
};

export default SearchInput;
