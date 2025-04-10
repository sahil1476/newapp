import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Timeline from './components/Timeline';
import LicenseRenewal from './components/LicenseRenewal';
import Documents from './components/Documents';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Routes>
        <Route 
          path="/" 
          element={
            !isAuthenticated ? (
              <Login onLogin={() => setIsAuthenticated(true)} />
            ) : (
              <Navigate to="/timeline" replace />
            )
          } 
        />
        <Route 
          path="/timeline" 
          element={
            isAuthenticated ? (
              <Timeline />
            ) : (
              <Navigate to="/" replace />
            )
          } 
        />
        <Route 
          path="/license" 
          element={
            isAuthenticated ? (
              <LicenseRenewal />
            ) : (
              <Navigate to="/" replace />
            )
          } 
        />
        <Route 
          path="/documents" 
          element={
            isAuthenticated ? (
              <Documents />
            ) : (
              <Navigate to="/" replace />
            )
          } 
        />
      </Routes>
    </div>
  );
}

export default App