import React from 'react';
import './App.css';
import Login from './pages/StudentLogin/Login';
import Home from './pages/Home';
import SingleMovePage from './pages/SingleMove/SingleMovePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* index is going to be the default page that's rendered */}
          <Route index element={<Home />} />

          <Route path="/Login" element={<Login />} />
          <Route path="/SingleMovePage" element={<SingleMovePage />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
};

export default App;
