// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes'; // Import routes from routes.js
import Dashboard from './pages/Dashboard'; // Import your Dashboard component

const App = () => {
  return (
    <Router basename="/atc3">
      <Routes>
        {/* Dynamically render all routes from the routes array */}
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}

        {/* Fallback route: Redirect to Dashboard for unmatched routes */}
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
