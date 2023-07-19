/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import SearchInput from "./SearchInput";
// import { COLUMNS, cols } from "./Columns";
const FilteringTable = ({ columns, data }) => {
  console.log("columns:", columns);
  console.log("data:", data);

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
      autoResetHiddenColumns: false, //  <-- stops the rerendering
      autoResetSortBy: false, //  <-- stops the rerendering
    },
    useGlobalFilter,
    useSortBy
  );

  const { globalFilter } = state;

  return (
    <>
      <SearchInput filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()} className="customers">
        <thead>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup, i) => (
              // Apply the header row props
              <tr key={i} {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column, i) => (
                    // Apply the header cell props
                    <th
                      key={i}
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {
                        // Render the header
                        column.render("Header")
                      }
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? "1"
                            : "2"
                          : ""}
                      </span>
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            rows.map((row, i) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr key={i} {...row.getRowProps()}>
                  {
                    // Loop over the rows cells
                    //  {rows.cells.map(cell => cell.render('Cell', { test: 'this is a test'}))}

                    row.cells.map((cell, i) => {
                      // Apply the cell props
                      return (
                        <td
                          key={i}
                          {...cell.getCellProps()}
                          // onClick={() => handelGender(cell)}
                        >
                          {
                            // Render the cell contents
                            cell.render("Cell", { test: "this is a test" })
                          }
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </>
  );
};

export default FilteringTable;
