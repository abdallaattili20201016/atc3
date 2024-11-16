// src/pages/Admin/AdminDashboard.js
import React, { useState } from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import '../../styles/Styles.css';
import Calendar from 'react-calendar';
import DashboardAnnouncements from '../../components/DashboardAnnouncements.js'; // Import Announcements component

const AdminName = "Ammar";

const AdminDashboard = () => {
  const [announcements] = useState([
    {
      id: 1,
      title: "System Maintenance Scheduled",
      description: "The system will be down on Nov 20 for 2 hours.",
      date: "2024-11-20",
    },
    {
      id: 2,
      title: "New Course Available: Data Science",
      description: "Enroll now for the Data Science course starting Nov 25.",
      date: "2024-11-18",
    },
    {
      id: 3,
      title: "Important Deadline: Registration Ends",
      description: "Register before Nov 16 to secure your seat.",
      date: "2024-11-16",
    },
  ]);

  return (
    <>
      <AdminNavbar />
      <div className="ViewPage">
        <section className="welcome-section">
          <h2>Welcome, {AdminName}!</h2>
        </section>

        {/* Information Section */}
        <section className="info-section">
          {/* Announcements Div */}
          <div className="info-box">
            <DashboardAnnouncements announcements={announcements} />
          </div>

          {/* Calendar Section */}
          <div className="info-box">
            <h3>Calendar</h3>
            <div className='post-card'>
              <Calendar
                style={{ color: '#56acbb', backgroundColor: '#56acbb', borderRadius: '8px', padding: '10px' }}
              />
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
