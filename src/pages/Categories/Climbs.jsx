import React from 'react';
import CatClimbs from '../../components/Categories/Climbs/CatClimbs';
import '../SingleMove/SingleMovePage.css';
import Footer from '../../components/MainLayout/Footer';
import Header from '../../components/MainLayout/Header';
import '../../App.css';


function OptionsLayout() {
  return (
    <div className="main-div">
      <Header />
      <CatClimbs />
      <Footer />
    </div>
  );
}

export default OptionsLayout;