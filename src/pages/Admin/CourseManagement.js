// src/pages/Admin/CourseManagement.js
import React, { useState } from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import CourseModal from '../../components/CourseModal';
import '../../styles/Styles.css';

const CourseManagement = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "React Basics",
      trainer: "John Doe",
      startDate: "2024-11-20",
      endDate: "2024-12-20",
      status: "Active",
      students: 20,
    },
    {
      id: 2,
      name: "Data Science",
      trainer: "Jane Smith",
      startDate: "2024-11-25",
      endDate: "2024-12-25",
      status: "Inactive",
      students: 15,
    },
  ]);

  const [filter, setFilter] = useState("");
  const [modal, setModal] = useState(false);
  const [editCourse, setEditCourse] = useState(null);

  const handleAddCourse = () => {
    setEditCourse(null); // Reset for adding a new course
    setModal(true);
  };

  const handleEditCourse = (course) => {
    setEditCourse(course); // Set the course to be edited
    setModal(true);
  };

  const handleDeleteCourse = (id) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      setCourses(courses.filter((course) => course.id !== id));
    }
  };

  const handleSaveCourse = (newCourse) => {
    if (editCourse) {
      // Update existing course
      setCourses(
        courses.map((course) =>
          course.id === editCourse.id ? { ...editCourse, ...newCourse } : course
        )
      );
    } else {
      // Add new course
      setCourses([...courses, { id: Date.now(), ...newCourse }]);
    }
    setModal(false);
  };

  return (
    <>
      <AdminNavbar />
      <div className="viewPage">
        <h1>Course Management</h1>
        <div className="actions">
          <input
            type="text"
            placeholder="Search courses..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <button className="edit-btn" onClick={handleAddCourse}>
            Add Course
          </button>
        </div>
        <table className="courses-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Trainer</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses
              .filter((course) =>
                course.name.toLowerCase().includes(filter.toLowerCase())
              )
              .map((course) => (
                <tr key={course.id}>
                  <td>{course.name}</td>
                  <td>{course.trainer}</td>
                  <td>{course.startDate}</td>
                  <td>{course.endDate}</td>
                  <td>{course.status}</td>
                  <td>
                    <button onClick={() => handleEditCourse(course)}>Edit</button>
                    <button onClick={() => handleDeleteCourse(course.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {modal && (
          <CourseModal
            course={editCourse}
            onSave={handleSaveCourse}
            onClose={() => setModal(false)}
          />
        )}
      </div>
    </>
  );
};

export default CourseManagement;
