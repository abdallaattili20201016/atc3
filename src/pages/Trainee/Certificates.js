import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import '../../styles/Certificates.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Certificates = () => {
  const navigate = useNavigate();

  const handlePrintRequest = (courseName) => {
    alert('Print request for ${ courseName }');
  };

  const courses = [
    { name: 'Course 1', notes: 'No comments' },
    { name: 'Course 2', notes: 'Pending approval' },
  ];

  const handleBack = () => {
    navigate('/dashboard');
  };

  return (
    <>
      <Navbar />
      <div className="certificates-container">
        <h2 className="section-title">Certificates</h2>
        <table className="certificates-table">
          <thead>
            <tr>
              <th>Course</th>
              <th>Comments</th>
              <th>Procedure</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index}>
                <td>{course.name}</td>
                <td className="notes">{course.notes}</td>
                <td>
                  <button
                    className="print-request-btn"
                    onClick={() => handlePrintRequest(course.name)}
                  >
                    Print request
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="whatsapp-contact">
          <p>Need help? Contact us on WhatsApp:</p>
          <a href="https://wa.me/+962788649217" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp whatsapp-icon"></i>
            +962788649217
          </a>
        </div>
      </div>
    </>
  );
};

export default Certificates;