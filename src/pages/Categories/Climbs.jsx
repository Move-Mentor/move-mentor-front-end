import React from 'react';
import CatClimbs from '../../components/Categories/Climbs/CatClimbs';
import '../SingleMove/SingleMovePage.css';
import Footer from '../../components/MainLayout/Footer';
import '../../App.css';


function OptionsLayout() {
  return (
    <div className="main-div">
      <CatClimbs />
      <Footer />
    </div>
  );
}

export default OptionsLayout;