import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import List from './Pages/List/List';
import Add from './Pages/Add/Add';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <ToastContainer />
      <div className="d-flex">
        {/* Sidebar */}
        <div className="sidebar-container">
          <Sidebar />
        </div>

        {/* Main Content (Routes) */}
        <div className="form-container flex-grow-1">
          <Routes>
            <Route path="/add" element={<Add />} />
            <Route path="/list" element={<List />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
