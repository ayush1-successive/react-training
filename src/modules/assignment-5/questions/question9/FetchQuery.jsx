import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_PEOPLE } from "./graphsql";
import { DataGrid } from "@mui/x-data-grid";

const FetchQuery = () => {
  const { data, loading, error } = useQuery(GET_ALL_PEOPLE);
  const [peopleData, setpeopleData] = useState([]);

  useEffect(() => {
    setpeopleData(() => {
      const newData = data?.allPeople?.edges.map((item, index) => ({
        id: index + 1,
        name: item.node.name,
        gender: item.node.gender,
        height: item.node.height,
        weight: item.node.mass,
        homeworld: item.node.homeworld.name,
      }));
      console.log(newData);
      return newData;
    });
  }, [data, loading]);

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "gender", headerName: "Gender", width: 150 },
    { field: "height", headerName: "Height(cm)", width: 150 },
    { field: "weight", headerName: "Weight(kg)", width: 320 },
    { field: "homeworld", headerName: "HomeWorld", width: 320 },
  ];

  return (
    <>
      <h2>PEOPLE DATA</h2>

      {peopleData && (
        <DataGrid
          style={{
            textAlign: "center",
            justifyContent: "center",
            fontSize: 18,
          }}
          rows={peopleData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
        />
      )}
    </>
  );
};

export default FetchQuery;
