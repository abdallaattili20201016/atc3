// src/routes.js
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import TraineeDashboard from './pages/Trainee/TraineeDashboard';
import ViewProfile from './pages/Trainee/ViewProfile';
import Courses from './pages/Trainee/Courses'; // Import the Courses page
import Certificates from './pages/Trainee/Certificates';
import Messages from './pages/Trainee/Messages';
import Calendar from './pages/Calendar'; // Adjust the path if necessary
import PaymentPage from './pages/Trainee/PaymentPage';
import ViewProfileAdmin from './pages/Admin/ViewProfileAdmin';
import AdminDashboard from './pages/Admin/AdminDashboard';
import UserManagement from './pages/Admin/Users';
import CourseManagement from './pages/Admin/CourseManagement';
import Announcements from './pages/Admin/Announcements';
import Reports from './pages/Admin/Reports';


const routes = [
  { path: '/', element: <Login /> }, 
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/forgot-password', element: <ForgotPassword /> },
  { path: '/dashboard', element: <TraineeDashboard /> },
  { path: '/ViewProfile', element:<ViewProfile/>},
  { path: '/courses', element: <Courses /> }, 
  { path: '/Certificates', element: <Certificates /> }, 
  { path: '/Messages', element: <Messages /> }, 
  { path: '/Calendar', element: <Calendar /> }, 
  { path: '/PaymentPage', element: <PaymentPage /> },
  { path: '/admin', element: <AdminDashboard /> },
  { path: '/admin/Users', element: <UserManagement /> },
  { path: '/admin/CourseManagement', element: <CourseManagement /> },
  { path: '/admin/Announcements', element: <Announcements /> },
  { path: '/admin/Reports', element: <Reports /> },
  { path: '/ViewProfileAdmin', element:<ViewProfileAdmin/>},


];

export default routes;
