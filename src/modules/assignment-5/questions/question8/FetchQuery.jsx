import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_COUNTRIES } from "./graphsql";

const FetchQuery = () => {
  const { data, loading, error } = useQuery(GET_ALL_COUNTRIES);
  console.log(data, loading, error);

  const tableStyle = {
    width: "60%",
    borderCollapse: "collapse",
    border: "2px solid #333",
    margin: "0 auto",
    fontSize: 20,
  };

  const tdStyle = {
    border: "2px solid #333",
    padding: "8px",
    textAlign: "center",
  };

  return (
    <>
      <h2>COUNTRIES</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={{ ...tdStyle, backgroundColor: "#f2f2f2" }}>COUNTRY</th>
            <th style={{ ...tdStyle, backgroundColor: "#f2f2f2" }}>CAPITAL</th>
          </tr>
        </thead>
        <tbody>
          {data?.countries?.edges.map((item, index) => (
            <tr key={index}>
              <td style={tdStyle}>{item.node.name}</td>
              <td style={tdStyle}>{item.node.capital}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default FetchQuery;
