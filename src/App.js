import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './pages/StudentLogin/Login';
import Home from './pages/Home';
import SingleMovePage from './pages/SingleMove/SingleMovePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OptionsMain from './pages/Options/OptionsMain';
import CategoriesMain from './pages/Categories/CategoriesMain';
import Aerials from './pages/Categories/Aerials';
import Climbs from './pages/Categories/Climbs';
import Floor from './pages/Categories/Floor';
import Inverts from './pages/Categories/Inverts';
import Sits from './pages/Categories/Sits';
import Spins from './pages/Categories/Spins';
import Splits from './pages/Categories/Splits';

const App = () => {
  const userRole = 'student';

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* index is going to be the default page that's rendered */}
          <Route index element={<Home />} />
          <Route path="/login-student" element={<Login />} />
          <Route path="/SingleMovePage" element={<SingleMovePage userRole={userRole} />} />
          <Route path="/OptionsMain" element={<OptionsMain />} />
          <Route path="/CategoriesMain" element={<CategoriesMain />} />
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
