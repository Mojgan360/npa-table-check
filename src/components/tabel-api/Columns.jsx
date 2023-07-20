/* eslint-disable react/prop-types */
import React from "react";
import axios from "axios";
import Singel from "./Singel";
import HappyIcone from "./HappyIcone";
import SortTable from "./SortTable";
import FilteringTable from "./FilteringTable";
import { SearchColumn } from "./SearchColumn";
import ResizableColumnTable from "./ResizableColumnTable";

const Columns = () => {
  const [Data, setData] = React.useState([]);

  console.log("data: ......", Data);

  const url = "http://api.tvmaze.com/search/shows?q=girls";

  React.useEffect(() => {
    axios.get(url, { responseType: "json" }).then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);

  const columns = React.useMemo(() => {
    return [
      {
        Header: "TV Show",
        columns: [
          {
            Header: "Name",
            accessor: "show.name",
            Filter: SearchColumn,
            width: 150,
          },
          {
            Header: "Type",
            accessor: "show.type",
            // disableSortBy: true, // Disable sorting for this column
            // disableFilters: true,
          },
          {
            Header: "Language",
            accessor: "show.language",
          },
          {
            Header: "Official Site",
            accessor: "show.officialSite",
            width: 500,
          },
          {
            Header: "Rating",
            accessor: "show.rating.average",
          },
          {
            Header: "Status",
            accessor: "show.status",
          },
          {
            Header: "Premiered",
            accessor: "show.premiered",
          },
          {
            Header: "Time",
            accessor: "show.schedule.time",
            collapse: true,
          },
        ],
      },
    ];
  }, []);

  // const columns = React.useMemo(() => {
  //   return [
  //     {
  //       Header: "TV Show",
  //       columns: [
  //         {
  //           Header: "Name",
  //           accessor: "show.name",
  //           // getProps: (rowInfo) => {
  //           //   return {
  //           //     style: {
  //           //       color: rowInfo && rowInfo.row.item === "blue" ? "red" : null,
  //           //     },
  //           //   };
  //           // },
  //         },
  //         {
  //           Header: "Type",
  //           accessor: "show.type",
  //           Filter: SearchColumn,
  //         },
  //         {
  //           Header: "IMG",
  //           accessor: "show.image.medium",
  //           Cell: ({ cell: { value } }) => (
  //             <img src={value} width={60} alt="Player" />
  //           ),
  //         },
  //         {
  //           Header: "Language",
  //           accessor: "show.language",
  //           Filter: SearchColumn,

  //           Cell: (props) => {
  //             return <Singel {...props} />;
  //           },
  //         },
  //         {
  //           Header: "Official Site",
  //           accessor: "show.officialSite",
  //           //  Cell: ({ cell: { value } }) => value || "-",
  //           Cell: (props) => {
  //             return <HappyIcone {...props} />;
  //           },
  //         },
  //         {
  //           Header: "Rating",
  //           accessor: "show.rating.average",
  //           Cell: ({ cell: { value } }) => value || "-",
  //           // Cell: (props) => {
  //           //   console.log(props.test); // the value is 'this is a test'
  //           //   return <Singel test={props.test} />;
  //           // },
  //         },
  //         {
  //           Header: "Status",
  //           accessor: "show.status",
  //         },
  //       ],
  //     },
  //     {
  //       Header: "Info Show",
  //       columns: [
  //         {
  //           Header: "Premiered",
  //           accessor: "show.premiered",
  //           // Cell: ({ cell: { value } }) => value || "-",
  //         },
  //         {
  //           Header: "Time",
  //           accessor: "show.schedule.time",
  //           // Cell: ({ cell: { value } }) => value || "-",
  //         },
  //       ],
  //     },
  //   ];
  // }, []);
  return (
    <div>
      <ResizableColumnTable columns={columns} data={Data} />
      <FilteringTable columns={columns} data={Data} />
      {/* <SortTable columns={columns} data={Data} /> */}
      {/* <SortTable
        columns={columns}
        data={Data.map((item) => JSON.stringify(item))}
      /> */}
      {/* <SortTable columns={columns} data={Array.isArray(Data) ? Data : []} />; */}
      {/* <SortTable columns={columns} data={Data} /> */}
    </div>
  );
};

export default Columns;
