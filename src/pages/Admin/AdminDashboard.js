// src/pages/Admin/AdminDashboard.js
import React from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import '../../styles/Styles.css';
import Calendar from 'react-calendar';


const AdminName = "Ammar";

const AdminDashboard = () => {
  return (
    <>
      <AdminNavbar />
      <div className="ViewPage">
        <section className="welcome-section">
          <h2>Welcome, {AdminName}!</h2>
        </section>

        {/* Information Section */}
        <section className="info-section">

          <div className="info-box">
            {/* Stay Updated Section */}

          </div>
          <div className="info-box">
            <h3>calendar</h3>
            <div className='post-card'>
              {<Calendar
                style={{ color: '#56acbb', backgroundColor: '#56acbb', borderRadius: '8px', padding: '10px' }}
              />}

            </div>
          </div>
        </section>

        <div className="dashboard-container">
          {/* Reusing card styles from styles.css */}
          <div className="dashboard-card">
            <h2>Active Users</h2>
            <p>Overview of all registered users</p>
          </div>
          <div className="dashboard-card">
            <h2>New Messages</h2>
            <p>Messages from trainees and trainers</p>
          </div>
          <div className="dashboard-card">
            <h2>Courses</h2>
            <p>Manage available courses</p>
          </div>
          <div className="dashboard-card">
            <h2>Recent Activity</h2>
            <p>View the latest user actions</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
