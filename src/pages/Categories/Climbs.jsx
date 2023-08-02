import React from 'react';
import CatClimbs from '../../components/Categories/Climbs/CatClimbs';
import '../SingleMove/SingleMovePage.css';
import HeaderTop from '../../components/MainLayout/HeaderTop';
import Footer from '../../components/MainLayout/Footer';
import '../../App.css';


function OptionsLayout() {
  return (
    <div className="main-div">
      <HeaderTop />
      <CatClimbs />
      <Footer />
    </div>
  );
}

export default OptionsLayout;