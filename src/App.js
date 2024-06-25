import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import "./styles.css";

function App() {
  const [students, setStudents] = useState([]);
  const [editStudentIndex, setEditStudentIndex] = useState(null);

  // Load students from localStorage on component mount
  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem("students"));
    if (storedStudents) {
      setStudents(storedStudents);
    }
  }, []);

  // Update localStorage whenever students state changes
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  // Function to add or edit a student
  const addStudent = (student) => {
    if (editStudentIndex !== null) {
      // Edit existing student
      const updatedStudents = students.map((s, index) =>
        index === editStudentIndex ? student : s
      );
      setStudents(updatedStudents);
      setEditStudentIndex(null);
    } else {
      // Add new student
      setStudents((prevStudents) => [...prevStudents, student]);
    }
  };

  // Function to delete a student
  const deleteStudent = (index) => {
    setStudents((prevStudents) => prevStudents.filter((_, i) => i !== index));
  };

  // Function to start editing a student
  const startEditing = (index) => {
    setEditStudentIndex(index);
  };

  return (
    <div className="App">
      <Header totalStudents={students.length} />
      <div className="form-and-list-container">
        <StudentForm
          onAdd={addStudent}
          editStudent={
            editStudentIndex !== null ? students[editStudentIndex] : null
          }
        />
        <StudentList
          students={students}
          onDelete={deleteStudent}
          onEdit={startEditing}
        />
      </div>
    </div>
  );
}

export default App;
