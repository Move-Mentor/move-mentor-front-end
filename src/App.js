import React from 'react';
import './App.css';
import Login from './pages/StudentLogin/Login';
import Home from './pages/Home';
import SingleMovePage from './pages/SingleMove/SingleMovePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OptionsMain from './pages/Options/OptionsMain';
import CategoriesMain from './pages/Categories/CategoriesMain';

const App = () => {


  return (
    <div>
      {/* <Options /> */}
      <BrowserRouter>
        <Routes>
          {/* index is going to be the default page that's rendered */}
          <Route index element={<Home />} />
          <Route path="/login-student" element={<Login />} />
          <Route path="/SingleMovePage" element={<SingleMovePage />} />
          <Route path="/OptionsMain" element={<OptionsMain />} />
          <Route path="/CategoriesMain" element={<CategoriesMain />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
};

export default App;
