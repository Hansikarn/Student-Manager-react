import React from "react";

function Header({ totalStudents }) {
  return (
    <header>
      <h1>Student Manager</h1>
      <p>Total Students: {totalStudents}</p>
    </header>
  );
}

export default Header;
