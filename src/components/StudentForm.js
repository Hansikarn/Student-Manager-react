import React, { useState, useEffect } from "react";

function StudentForm({ onAdd, editStudent }) {
  const [student, setStudent] = useState({
    name: "",
    phoneNumber: "",
    address: "",
  });

  useEffect(() => {
    if (editStudent) {
      setStudent(editStudent);
    }
  }, [editStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(student);
    setStudent({ name: "", phoneNumber: "", address: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
      <div>
        <label>Name:</label>
        <input
          name="name"
          value={student.name}
          onChange={handleChange}
          placeholder="Enter name"
          required
        />
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          name="phoneNumber"
          value={student.phoneNumber}
          onChange={handleChange}
          placeholder="Enter phone number"
          required
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          name="address"
          value={student.address}
          onChange={handleChange}
          placeholder="Enter address"
          required
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

export default StudentForm;
