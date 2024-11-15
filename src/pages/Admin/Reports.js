// src/pages/Admin/Reports.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AdminNavbar from '../../components/AdminNavbar';
import '../../styles/Styles.css';

const Reports = () => {
    const navigate = useNavigate();

    const handleBack = () => navigate('/dashboard'); // Navigate back to dashboard
  return (
    <>
      <AdminNavbar />
      <div className="ViewPage">
        <h1>Reports</h1>

        {/* Financial Reports Section */}
        <section className="info-section">
          <h2>Financial Reports</h2>
          <div className="dashboard-card">
            <h3>Total Revenue</h3>
            <p>$12,345</p>
          </div>
          <div className="dashboard-card">
            <h3>Monthly Revenue</h3>
            <p>January: $2,345</p>
            <p>February: $3,123</p>
            <p>March: $4,567</p>
          </div>
        </section>

        {/* Trainee Reports Section */}
        <section className="info-section">
          <h2>Trainee Reports</h2>
          <div className="dashboard-card">
            <h3>Total Trainees</h3>
            <p>120</p>
          </div>
          <div className="dashboard-card">
            <h3>Majors</h3>
            <p>Computer Science: 40</p>
            <p>Business: 30</p>
            <p>Engineering: 50</p>
          </div>
        </section>

        {/* Trainer Reports Section */}
        <section className="info-section">
          <h2>Trainer Reports</h2>
          <div className="dashboard-card">
            <h3>Total Trainers</h3>
            <p>15</p>
          </div>
          <div className="dashboard-card">
            <h3>Courses Taught</h3>
            <p>React Basics: Trainer A</p>
            <p>Advanced JavaScript: Trainer B</p>
            <p>Database Management: Trainer C</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Reports;
