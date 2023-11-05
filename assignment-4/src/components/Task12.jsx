import { DataGrid } from "@mui/x-data-grid";
import employeesData from "./EmployeeData";
import "./Styles.css";

const Task12 = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "firstName", headerName: "First Name", width: 150 },
    { field: "lastName", headerName: "Last Name", width: 150 },
    { field: "jobTitle", headerName: "Job Title", width: 320 },
    { field: "department", headerName: "Department", width: 320 },
    { field: "salary", headerName: "Salary", width: 150 },
    { field: "hireDate", headerName: "Hire Date", width: 150 },
  ];

  return (
    <>
      <DataGrid
        style={{
          textAlign: "center",
          justifyContent: "center",
          fontSize: 18,
        }}
        rows={employeesData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
      />
    </>
  );
};

export default Task12;
