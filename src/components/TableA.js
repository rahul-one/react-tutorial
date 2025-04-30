import React from "react";

import "../css/main.css";

function TableA() {
  const data = [
    { id: 1, name: "John Doe", age: 28 },
    { id: 2, name: "Jane Smith", age: 34 },
    { id: 3, name: "Alice Johnson", age: 25 },
    { id: 4, name: "Bob Brown", age: 42 },
  ];

  const obj = [
    { rollno: 1001, name: "Rohit Sharma", class: "MCA" },
    { rollno: 1002, name: "Virat Kohli", class: "MCA" },
    { rollno: 1003, name: "Hardik Pandya", class: "MCA" },
    { rollno: 1004, name: "Sachin", class: "MTech" },
    { rollno: 1005, name: "Sehwag", class: "MTech" },
  ];

  return (
    <>
      <div className="my-table">
        <h1>My Table</h1>
        <table>
          <thead>
            <tr>
                <td>Roll No</td>
                <td>Name</td>
                <td>Class</td>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>{obj[0].rollno}</td>
                <td>{obj[0].name}</td>
                <td>{obj[0].class}</td>
            </tr>
            <tr>
                <td>{obj[1].rollno}</td>
                <td>{obj[1].name}</td>
                <td>{obj[1].class}</td>
            </tr>
            <tr>
                <td>{obj[2].rollno}</td>
                <td>{obj[2].name}</td>
                <td>{obj[2].class}</td>
            </tr>
            <tr>
                <td>{obj[3].rollno}</td>
                <td>{obj[3].name}</td>
                <td>{obj[3].class}</td>
            </tr>
            <tr>
                <td>{obj[4].rollno}</td>
                <td>{obj[4].name}</td>
                <td>{obj[4].class}</td>
            </tr>

          </tbody>
        </table>
      </div>

      <div className="table-container">
        <h2>User Table</h2>
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}


export default TableA;
