// src/pages/Admin/UsersPage.js
import React, { useState } from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import '../../styles/Styles.css';

const UsersPage = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", role: "Trainer", email: "john@example.com", phone: "123-456-7890", date: "2024-11-15" },
    { id: 2, name: "Jane Smith", role: "Trainee", email: "jane@example.com", phone: "987-654-3210", date: "2024-11-14" },
    { id: 3, name: "Alice Johnson", role: "Trainer", email: "alice@example.com", phone: "567-890-1234", date: "2024-11-13" },
    { id: 4, name: "Bob Brown", role: "Trainee", email: "bob@example.com", phone: "234-567-8901", date: "2024-11-12" },
  ]);

  const [roleFilter, setRoleFilter] = useState("All");

  // Filter users based on role
  const filteredUsers =
    roleFilter === "All" ? users : users.filter((user) => user.role === roleFilter);

  return (
    <>
      <AdminNavbar />
      <div className="viewPage">
        <h1>Users</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Date Added</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.date}</td>
                <td>
                  <button className="edit-button">Edit</button>
                  <button className="delete-button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="info-section">
        <div className="info-box">
            <button className="edit-btn" onClick={() => setRoleFilter("All")}>
              View All Users
            </button>
            <button className="edit-btn" onClick={() => setRoleFilter("Trainer")}>
              View All Trainers
            </button>
            <button className="edit-btn" onClick={() => setRoleFilter("Trainee")}>
              View All Trainees
            </button>
          </div>
          </div>
      </div>
    </>
  );
};

export default UsersPage;
