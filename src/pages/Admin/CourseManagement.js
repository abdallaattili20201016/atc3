// src/pages/Admin/CourseManagement.js
import React, { useState } from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import WarningOverlay from '../../components/WarningOverlay';
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

  /*** WarningOverlay State and Handlers ***/
  const [warningOverlayVisible, setWarningOverlayVisible] = useState(false);
  const [courseToDelete, setCourseToDelete] = useState(null);

  const handleDeleteRequest = (courseId) => {
    setCourseToDelete(courseId);
    setWarningOverlayVisible(true);
  };

  const handleDeleteConfirm = () => {
    setCourses(courses.filter((course) => course.id !== courseToDelete));
    setWarningOverlayVisible(false);
    setCourseToDelete(null);
  };

  const handleDeleteCancel = () => {
    setWarningOverlayVisible(false);
    setCourseToDelete(null);
  };
  /*** End WarningOverlay State and Handlers ***/

  /*** Edit Overlay State and Handlers ***/
  const [editOverlayVisible, setEditOverlayVisible] = useState(false);
  const [courseToEdit, setCourseToEdit] = useState(null);

  const handleEditRequest = (course) => {
    setCourseToEdit(course);
    setEditOverlayVisible(true);
  };

  const handleEditSave = (updatedCourse) => {
    setCourses(
      courses.map((course) =>
        course.id === courseToEdit.id ? { ...courseToEdit, ...updatedCourse } : course
      )
    );
    setEditOverlayVisible(false);
    setCourseToEdit(null);
  };

  const handleEditCancel = () => {
    setEditOverlayVisible(false);
    setCourseToEdit(null);
  };
  /*** End Edit Overlay State and Handlers ***/

  const [filter, setFilter] = useState("");

  return (
    <>
      <AdminNavbar />
      <div className="ViewPage">
        <h1>Course Management</h1>
        <div className="actions">
          <input
            type="text"
            placeholder="Search courses..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
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
                    <button onClick={() => handleEditRequest(course)}>Edit</button>
                    <button onClick={() => handleDeleteRequest(course.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        {/* Warning Overlay for Deleting Course */}
        {warningOverlayVisible && (
          <WarningOverlay
            message="Are you sure you want to delete this course?"
            onConfirm={handleDeleteConfirm}
            onCancel={handleDeleteCancel}
          />
        )}

        {/* Edit Overlay */}
        {editOverlayVisible && (
          <div className="overlay">
            <div className="overlay-content">
              <button className="close-button" onClick={handleEditCancel}>
                ✖
              </button>
              <h2>Edit Course</h2>
              <form>
                <label>
                  Name:
                  <input
                    type="text"
                    value={courseToEdit?.name || ""}
                    onChange={(e) =>
                      setCourseToEdit({ ...courseToEdit, name: e.target.value })
                    }
                  />
                </label>
                <label>
                  Trainer:
                  <input
                    type="text"
                    value={courseToEdit?.trainer || ""}
                    onChange={(e) =>
                      setCourseToEdit({ ...courseToEdit, trainer: e.target.value })
                    }
                  />
                </label>
                <label>
                  Start Date:
                  <input
                    type="date"
                    value={courseToEdit?.startDate || ""}
                    onChange={(e) =>
                      setCourseToEdit({ ...courseToEdit, startDate: e.target.value })
                    }
                  />
                </label>
                <label>
                  End Date:
                  <input
                    type="date"
                    value={courseToEdit?.endDate || ""}
                    onChange={(e) =>
                      setCourseToEdit({ ...courseToEdit, endDate: e.target.value })
                    }
                  />
                </label>
                <label>
                  Status:
                  <select
                    value={courseToEdit?.status || ""}
                    onChange={(e) =>
                      setCourseToEdit({ ...courseToEdit, status: e.target.value })
                    }
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </label>
              </form>
              <div className="form-actions">
                <button
                  className="primary-button"
                  onClick={() => handleEditSave(courseToEdit)}
                >
                  Save
                </button>
                <button className="secondary-button" onClick={handleEditCancel}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CourseManagement;
