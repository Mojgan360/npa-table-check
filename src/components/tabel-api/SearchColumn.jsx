/* eslint-disable react/prop-types */
import React from "react";

export const SearchColumn = ({
  column: {
    filterValue,
    preFilteredRows: { length },
    setFilter,
  },
}) => {
  return (
    <span>
      <input
        value={filterValue || ""}
        onChange={(e) => {
          // Set undefined to remove the filter entirely
          setFilter(e.target.value || undefined);
        }}
        placeholder={`Search ${length} records..`}
        style={{ marginTop: "10px" }}
      />
    </span>
  );
};
