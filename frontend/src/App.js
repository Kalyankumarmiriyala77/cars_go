// src/App.js
import React from 'react';
import { Routes, Route, HashRouter, BrowserRouter } from 'react-router-dom';
import IndexPage from './components/IndexPage';
import Login from "./components/Login";
import Register from "./components/Register";
import UserDashboard from "./components/UserDashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<UserDashboard />} />
    </Routes> 
  );
};

export default App;
