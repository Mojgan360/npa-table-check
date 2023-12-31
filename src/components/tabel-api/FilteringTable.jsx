/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  useResizeColumns,
  useFlexLayout,
  useBlockLayout,
} from "react-table";
import SearchInput from "./SearchInput";
import { SearchColumn } from "./SearchColumn";

const Styles = styled.div`
  /* This is required to make the table full-width */
  display: block;
  max-width: 100%;

  /* This will make the table scrollable when it gets too small */
  .tableWrap {
    display: block;
    max-width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    border-bottom: 1px solid black;
  }

  .tab {
    /* Make sure the inner table is always as wide as needed */
    width: 100%;
    border-spacing: 0;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    .th,
    .td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      overflow-x: hidden;
      /* The secret sauce */
      /* Each cell should grow equally */
      width: 1%;
      /* But "collapsed" cells should be as small as possible */
      &.collapse {
        width: 0.0000000001%;
      }

      :last-child {
        border-right: 0;
      }
    }
  }
  .resizer {
    display: inline-block;
    background: black;
    width: 5px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(50%);
    z-index: 1;
    ${"" /* prevents from scrolling while dragging on touch devices */}
    touch-action:none;

    &.isResizing {
      background: green;
    }
  }
`;

const FilteringTable = ({ columns, data }) => {
  console.log("columns:", columns);
  console.log("data:", data);

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: SearchColumn,
      // minWidth: 30,
      // width: 150,
      // maxWidth: 100,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      autoResetHiddenColumns: false, //  <-- stops the rerendering
      autoResetSortBy: false, //  <-- stops the rerendering
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    useBlockLayout,
    useResizeColumns
    // useFlexLayout
  );

  const { globalFilter } = state;

  return (
    <Styles>
      <SearchInput filter={globalFilter} setFilter={setGlobalFilter} />
      <div className="tableWrap">
        <div {...getTableProps()} className="tableWrap">
          <div>
            {
              // Loop over the header rows
              headerGroups.map((headerGroup, i) => (
                // Apply the header row props
                <div key={i} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, i) => (
                    <div>
                      <div
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                      >
                        {column.render("Header")}
                        <div
                          {...column.getResizerProps()}
                          className={`resizer ${
                            column.isResizing ? "isResizing" : ""
                          }`}
                        />
                        <span>
                          {column.isSorted
                            ? column.isSortedDesc
                              ? " 🔽"
                              : " 🔼"
                            : ""}
                        </span>{" "}
                        *
                      </div>
                      <div>
                        {column.canFilter ? column.render("Filter") : null}
                      </div>
                    </div>
                  ))}
                </div>
              ))
            }
          </div>
          {/* Apply the table body props */}
          <div {...getTableBodyProps()}>
            {
              // Loop over the table rows
              rows.map((row, i) => {
                // Prepare the row for display
                prepareRow(row);
                return (
                  // Apply the row props
                  <div key={i} {...row.getRowProps()}>
                    {
                      // Loop over the rows cells
                      //  {rows.cells.map(cell => cell.render('Cell', { test: 'this is a test'}))}

                      row.cells.map((cell, i) => {
                        // Apply the cell props
                        return (
                          <div
                            key={i}
                            {...cell.getCellProps()}
                            // onClick={() => handelGender(cell)}
                            className="td"
                          >
                            {
                              // Render the cell contents
                              cell.render("Cell", { test: "this is a test" })
                            }
                          </div>
                        );
                      })
                    }
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default FilteringTable;
