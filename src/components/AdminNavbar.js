// src/components/Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Styles.css'; // Adjust the path as needed

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear(); // Clear stored data
        navigate('/Login'); // Redirect to login page
    };

    return (
        <div className={`sideNav  ${drawerOpen ? 'open' : ''}`}
        style={{
            background: 'linear-gradient(to bottom right, #586daf, #4f4f4f)',
          }}>
            <div className="logo">
                <h1 className="txtLogo"><a href="../Admin/AdminDashboard" className="txtLogo">Academic Training Center</a></h1>
            </div>
            <div class="listOfItems">
                    <ul class="mainUnorderdList">
                        <li class="navItem"><a href="/Admin/Announcements">Profile Settings</a></li>
                        <li class="navItem"><a href="/Admin/CourseManagement">Course Management</a></li>
                        <li class="navItem"><a href="/Admin/Reports">Reports</a></li>
                        <li class="navItem"><a href="/Admin/Users">Users</a></li>
                        <li class="navItem"><a href="/login">logout</a></li>
                    </ul>
                </div>

        </div>
    );
};

export default Navbar;

// // src/components/AdminNavbar.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../../styles/Styles.css';

// const AdminNavbar = () => {
//   return (
//     <nav className="admin-navbar">
//       <h2>Admin Panel</h2>
//       <ul className="nav-list">
//         <li><Link to="/admin">Dashboard Overview</Link></li>
//         <li><Link to="/admin/users">User Management</Link></li>
//         <li><Link to="/admin/courses">Courses</Link></li>
//         <li><Link to="/admin/announcements">Announcements</Link></li>
//         <li><Link to="/admin/reports">Reports</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default AdminNavbar;

