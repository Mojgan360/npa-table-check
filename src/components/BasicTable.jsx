/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useMemo, useState } from "react";
import { useTable, useBlockLayout, useResizeColumns } from "react-table";
import JSONDATA from "../JSONDATA.json";
//import { COLUMNS } from "./columns";
import "./table.css";

// function toeSearchButtonEvent(props) {
//   console.log(props.row.original);
// }

const BasicTable = () => {
  const COLUMNS = [
    {
      Header: "id",
      Footer: "id",
      accessor: "id",
      canResize: true,
    },
    {
      Header: "First Name",
      Footer: "First Name",
      accessor: "first_name",
      canResize: true,
    },
    {
      Header: "Lats Name",
      accessor: "last_name",
      Footer: "Last Name",
      canResize: true,
    },
    {
      Header: "Email",
      Footer: "Email",

      accessor: "email",
      canResize: true,
    },

    {
      Header: "Gender",
      Footer: "Gender",

      accessor: "gender",
      canResize: true,
      // eslint-disable-next-line react/prop-types
      Cell: ({ row: { original } }) => (
        <button type="button" onClick={() => console.log(original)}>
          {original.gender}
        </button>
      ),
    },
  ];
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => JSONDATA, []);
  const tableInstance = useTable({ columns, data });
  const [gender, setGendee] = useState("mmmmmm");

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  const handelGender = () => {
    console.log("nnnn");
  };

  return (
    // apply the table props
    <table {...getTableProps()} className="customers">
      <thead>
        {
          // Loop over the header rows
          headerGroups.map((headerGroup) => (
            // Apply the header row props
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                // Loop over the headers in each row
                headerGroup.headers.map((column) => (
                  // Apply the header cell props
                  <th {...column.getHeaderProps()}>
                    {
                      // Render the header
                      column.render("Header")
                    }
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
          rows.map((row) => {
            // Prepare the row for display
            prepareRow(row);
            return (
              // Apply the row props
              <tr {...row.getRowProps()}>
                {
                  // Loop over the rows cells
                  row.cells.map((cell) => {
                    // Apply the cell props
                    return (
                      <td
                        {...cell.getCellProps()}
                        // onClick={() => handelGender(cell)}
                      >
                        {
                          // Render the cell contents
                          cell.render("Cell")
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
  );
};

export default BasicTable;
