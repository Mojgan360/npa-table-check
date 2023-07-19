/* eslint-disable react/prop-types */
import React from "react";
import axios from "axios";
import Singel from "./Singel";
import HappyIcone from "./HappyIcone";
import SortTable from "./SortTable";

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
            // getProps: (rowInfo) => {
            //   return {
            //     style: {
            //       color: rowInfo && rowInfo.row.item === "blue" ? "red" : null,
            //     },
            //   };
            // },
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
            //  Cell: ({ cell: { value } }) => value || "-",
            Cell: (props) => {
              return <HappyIcone {...props} />;
            },
          },
          {
            Header: "Rating",
            accessor: "show.rating.average",
            Cell: ({ cell: { value } }) => value || "-",
            // Cell: (props) => {
            //   console.log(props.test); // the value is 'this is a test'
            //   return <Singel test={props.test} />;
            // },
          },
          {
            Header: "Status",
            accessor: "show.status",
          },
        ],
      },
      {
        Header: "Info Show",
        columns: [
          {
            Header: "Premiered",
            accessor: "show.premiered",
            // Cell: ({ cell: { value } }) => value || "-",
          },
          {
            Header: "Time",
            accessor: "show.schedule.time",
            // Cell: ({ cell: { value } }) => value || "-",
          },
        ],
      },
    ];
  }, []);
  return (
    <div>
      {/* <SortTable columns={columns} data={Data} /> */}
      {/* <SortTable
        columns={columns}
        data={Data.map((item) => JSON.stringify(item))}
      /> */}
      {/* <SortTable columns={columns} data={Array.isArray(Data) ? Data : []} />; */}
      <SortTable columns={columns} data={Data} />
    </div>
  );
};

export default Columns;
