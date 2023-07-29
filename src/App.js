import React from 'react';
import './App.css';
import Login from './pages/StudentLogin/Login';
import Home from './pages/Home';
import SingleMovePage from './pages/SingleMove/SingleMovePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OptionsMain from './pages/Options/OptionsMain';
import Aerials from './pages/Categories/Aerials';
import Climbs from './pages/Categories/Climbs';
import Floor from './pages/Categories/Floor';
import Inverts from './pages/Categories/Inverts';
import Sits from './pages/Categories/Sits';
import Spins from './pages/Categories/Spins';
import Splits from './pages/Categories/Splits';

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
          <Route path="/Aerials" element={<Aerials />} />
          <Route path="/Climbs" element={<Climbs />} />
          <Route path="/Floor" element={<Floor />} />
          <Route path="/Inverts" element={<Inverts />} />
          <Route path="/Sits" element={<Sits />} />
          <Route path="/Spins" element={<Spins />} />
          <Route path="/Splits" element={<Splits />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
};

export default App;
