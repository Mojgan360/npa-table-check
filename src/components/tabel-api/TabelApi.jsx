/* eslint-disable react/prop-types */
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useTable } from "react-table";
import Singel from "./Singel";
import HappyIcone from "./HappyIcone";

const TabelApi = () => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    axios("http://api.tvmaze.com/search/shows?q=girls")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const columns = useMemo(() => [
    {
      Header: "TV Show",
      columns: [
        {
          Header: "Name",
          accessor: "show.name",
        },
        {
          Header: "Type",
          accessor: "show.type",
        },
        {
          Header: "IMG",
          accessor: "show.image.medium",
          Cell: ({ cell: { value } }) => (
            <img src={value} width={60} alt="Player" />
          ),
        },
        {
          Header: "Language",
          accessor: "show.language",
          Cell: (props) => {
            return <Singel {...props} />;
          },
        },
        {
          Header: "Official Site",
          accessor: "show.officialSite",
          // Cell: ({ cell: { value } }) => value || "-",
          Cell: (props) => {
            return <HappyIcone {...props} />;
          },
        },
        {
          Header: "Rating",
          accessor: "show.rating.average",
          //  Cell: ({ cell: { value } }) => value || "-",
          Cell: (props) => {
            console.log(props.test); // the value is 'this is a test'
            return <Singel test={props.test} />;
          },
        },
        {
          Header: "Status",
          accessor: "show.status",
          //tableProps.row.original.PlayerImageURL
        },
      ],
    },
    {
      Header: "Info Show",
      columns: [
        {
          Header: "Premiered",
          accessor: "show.premiered",
          Cell: ({ cell: { value } }) => value || "-",
        },
        {
          Header: "Time",
          accessor: "show.schedule.time",
          Cell: ({ cell: { value } }) => value || "-",
        },
      ],
    },
  ]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
      autoResetHiddenColumns: false, //  <-- stops the rerendering
      autoResetSortBy: false, //  <-- stops the rerendering
    });

  return (
    <div>
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
                    <th key={i} {...column.getHeaderProps()}>
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
    </div>
  );
};

export default TabelApi;
