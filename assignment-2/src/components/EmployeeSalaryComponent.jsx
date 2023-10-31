// Task-16

import { useMemo, useState } from "react";
import "./ButtonStyle.css";

const EmployeeSalaryComponent = () => {
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

  const EmployeeData = [
    { name: "John Smith", salary: 50000 },
    { name: "Sarah Johnson", salary: 55000 },
    { name: "Michael Williams", salary: 60000 },
    { name: "Emily Davis", salary: 48000 },
    { name: "David Brown", salary: 52000 },
  ];

  const [employees, setEmployees] = useState(EmployeeData);

  const handleEmployees = () => {
    setEmployees(
      employees.map((employee) => ({
        ...employee,
        salary: Math.round(Math.random() * 70000),
      }))
    );
  };

  const averageSalary = useMemo(() => {
    return (
      employees.reduce((acc, employee) => acc + employee.salary, 0) /
      employees.length
    );
  }, [employees]);

  return (
    <>
      <h2>EMPLOYEE DATA</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={{ ...tdStyle, backgroundColor: "#f2f2f2" }}>Name</th>
            <th style={{ ...tdStyle, backgroundColor: "#f2f2f2" }}>Salary</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(employees).map((employee, index) => (
            <tr key={index}>
              <td style={tdStyle}>{employee.name}</td>
              <td style={tdStyle}>{employee.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Average Salary is {averageSalary}</h2>
      <button className="button-style" onClick={() => handleEmployees()}>
        Randomize Employee Data
      </button>
    </>
  );
};

export default EmployeeSalaryComponent;
