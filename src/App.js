import React from 'react';
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
import Lessons from './pages/Lessons/Lessons';
import Monday from './pages/Lessons/MondayIntro';
import TuesdayMix from './pages/Lessons/TuesdayMixed';
import TuesdayChoreo from './pages/Lessons/TuesdayChoreo';

const App = () => {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* index is going to be the default page that's rendered */}
          <Route index element={<Home />} />
          <Route path="/LoginStudent" element={<Login />} />
          <Route path="/SingleMovePage" element={<SingleMovePage />} />
          <Route path="/OptionsMain" element={<OptionsMain />} />
          <Route path="/CategoriesMain" element={<CategoriesMain />} />
          <Route path="/Aerials" element={<Aerials />} />
          <Route path="/Climbs" element={<Climbs />} />
          <Route path="/Floor" element={<Floor />} />
          <Route path="/Inverts" element={<Inverts />} />
          <Route path="/Sits" element={<Sits />} />
          <Route path="/Spins" element={<Spins />} />
          <Route path="/Splits" element={<Splits />} />
          <Route path="/Lessons" element={<Lessons />} />
          <Route path="/Monday" element={<Monday />} />
          <Route path="/TuesdayMix" element={<TuesdayMix />} />
          <Route path="/TuesdayChoreo" element={<TuesdayChoreo />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
};

export default App;
