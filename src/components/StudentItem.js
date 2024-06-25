import React from "react";

const StudentItem = ({ student, onDelete, onEdit }) => {
  const { name, phoneNumber, address } = student;

  const handleEdit = () => {
    onEdit(); // Ensure onEdit is invoked correctly with appropriate arguments
  };

  const handleDelete = () => {
    onDelete(); // Ensure onDelete is invoked correctly with appropriate arguments
  };

  return (
    <div className="student-item">
      <div className="student-info">
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Phone Number:</strong> {phoneNumber}
        </p>
        <p>
          <strong>Address:</strong> {address}
        </p>
      </div>
      <div className="student-actions">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default StudentItem;
