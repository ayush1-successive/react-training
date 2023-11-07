// Task-15

import { useMemo, useState } from "react";

const StudentListComponent = () => {
  const textStyle = {
    fontSize: "22px",
    padding: "10px",
    margin: "10px",
    fontWeight: "bold", // Make the text bold
    display: "flex",
    alignItems: "left",
  };

  const initialStudents = ["Ayush", "Nikhil", "Raunak", "Vinay"];

  const [students, setStudents] = useState(initialStudents);
  const [newStudent, setNewStudent] = useState("");

  const updatedStudents = useMemo(() => {
    return [...students, newStudent];
  }, [newStudent, students]);

  const handleAddStudent = () => {
    setStudents(updatedStudents);
    setNewStudent("");
  };

  return (
    <>
      <div style={{ ...textStyle, fontSize: "30px" }}>Students</div>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            <p style={textStyle}>{student}</p>
          </li>
        ))}
      </ul>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <input
          style={{ ...textStyle, fontSize: "20px" }}
          type="text"
          placeholder="Enter Student name..."
          onChange={(e) => setNewStudent(e.target.value)}
        />
        <button
          style={textStyle}
          type="button"
          onClick={() => handleAddStudent()}
        >
          Add Student
        </button>
      </div>
    </>
  );
};

export default StudentListComponent;
