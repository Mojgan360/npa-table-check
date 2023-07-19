/* eslint-disable react/prop-types */
import Singel from "./Singel";
import HappyIcone from "./HappyIcone";
import styled from "styled-components";
const Image = styled.img`
  color: green;
`;

export const COLUMNSs = [
  {
    Header: "TV Show",
    columns: [
      {
        Header: "Name",
        accessor: "show.name",
        getProps: (rowInfo) => {
          return {
            style: {
              color: rowInfo && rowInfo.row.item === "blue" ? "red" : null,
            },
          };
        },
      },
      {
        Header: "Type",
        accessor: "show.type",
      },
      {
        Header: "IMG",
        accessor: "show.image.medium",
        // Cell: ({ cell: { value } }) => (
        //   <Image src={value} width={60} alt="Player" />
        // ),
      },
      {
        Header: "Language",
        accessor: "show.language",
        // Cell: (props) => {
        //   return <Singel {...props} />;
        // },
      },
      {
        Header: "Official Site",
        accessor: "show.officialSite",
        // Cell: ({ cell: { value } }) => value || "-",
        // Cell: (props) => {
        //   return <HappyIcone {...props} />;
        // },
      },
      {
        Header: "Rating",
        accessor: "show.rating.average",
        //  Cell: ({ cell: { value } }) => value || "-",
        // Cell: (props) => {
        //   console.log(props.test); // the value is 'this is a test'
        //   return <Singel test={props.test} />;
        // },
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

// export const cols = [
//   {
//     Header: "TV Show",
//     columns: [
//       {
//         Header: "Name",
//         accessor: "show.name",
//       },
//       {
//         Header: "Type",
//         accessor: "show.type",
//       },
//       {
//         Header: "Language",
//         accessor: "show.language",
//       },
//       {
//         Header: "Official Site",
//         accessor: "show.officialSite",
//         Cell: ({ cell: { value } }) => value || "-",
//       },
//       {
//         Header: "Rating",
//         accessor: "show.rating.average",
//         // Cell: ({ cell: { value } }) => value || "-",
//         Cell: (props) => {
//           console.log(props.test); // the value is 'this is a test'
//           return <Singel test={props.test} />;
//         },
//       },
//       {
//         Header: "Status",
//         accessor: "show.status",
//       },
//       {
//         Header: "Premiered",
//         accessor: "show.premiered",
//         Cell: ({ cell: { value } }) => value || "-",
//       },
//       {
//         Header: "Time",
//         accessor: "show.schedule.time",
//         Cell: ({ cell: { value } }) => value || "-",
//       },
//     ],
//   },
// ];
