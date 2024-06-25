import React from "react";

function StudentList({ students, onDelete, onEdit }) {
  return (
    <div>
      {students.map((student, index) => (
        <div key={index}>
          <p>{`${student.name} ${student.address} ${student.phoneNumber}`}</p>
          <button onClick={() => onEdit(index)}>Edit</button>
          <button onClick={() => onDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default StudentList;
