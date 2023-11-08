import axios from "axios";
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const Task4 = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "name", headerName: "Name", width: 320 },
    { field: "capital", headerName: "Capital", width: 250 },
    { field: "population", headerName: "Population", width: 250 },
    { field: "languages", headerName: "Languages", width: 400 },
  ];

  const apiUrl = "https://restcountries.com/v3.1/all";
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      setData(
        response.data.map((country, index) => {
          const lang = country.languages
            ? Object.values(country.languages).map((item) => item)
            : [];
          return {
            id: index,
            name: country.name.common,
            capital: country.capital,
            population: country.population,
            languages: lang.join(", "),
          };
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}> Fetch Data </button>

      {data.length > 0 && (
        <DataGrid
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
          }}
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
        />
      )}
    </div>
  );
};

export default Task4;
