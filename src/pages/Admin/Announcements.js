// src/pages/Admin/AnnouncementsPage.js
import React, { useState } from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import AnnouncementModal from '../../components/AnnouncementModal';
import '../../styles/Styles.css';

const AnnouncementsPage = () => {
  const [announcements, setAnnouncements] = useState([
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

  const [filter, setFilter] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingAnnouncement, setEditingAnnouncement] = useState(null);

  const handleAdd = () => {
    setEditingAnnouncement(null);
    setModalOpen(true);
  };

  const handleEdit = (announcement) => {
    setEditingAnnouncement(announcement);
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this announcement?')) {
      setAnnouncements(announcements.filter((announcement) => announcement.id !== id));
    }
  };

  const handleSave = (announcement) => {
    if (editingAnnouncement) {
      // Update existing announcement
      setAnnouncements(
        announcements.map((a) =>
          a.id === editingAnnouncement.id ? { ...editingAnnouncement, ...announcement } : a
        )
      );
    } else {
      // Add new announcement
      setAnnouncements([...announcements, { id: Date.now(), ...announcement }]);
    }
    setModalOpen(false);
  };

  return (
    <>
      <AdminNavbar />
      <div className="ViewPage">
        <h1>Announcements</h1>
        <div className="info-section">
          <div className="info-box">
            <input
              type="text"
              placeholder="Search announcements..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="input-field"
            />
            <button className="edit-btn" onClick={handleAdd}>
              Add Announcement
            </button>
            {modalOpen && (
          <AnnouncementModal
            announcement={editingAnnouncement}
            onSave={handleSave}
            onClose={() => setModalOpen(false)}
          />
        )}
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {announcements
              .filter((announcement) =>
                announcement.title.toLowerCase().includes(filter.toLowerCase())
              )
              .map((announcement) => (
                <tr key={announcement.id}>
                  <td>{announcement.title}</td>
                  <td>{announcement.description}</td>
                  <td>{announcement.date}</td>
                  <td>
                    <button className="edit-button" onClick={() => handleEdit(announcement)}>
                      Edit
                    </button>
                    <button className="delete-button" onClick={() => handleDelete(announcement.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

      </div>
    </>
  );
};

export default AnnouncementsPage;
