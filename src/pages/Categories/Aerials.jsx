import React from 'react';
import CatAerials from '../../components/Categories/Aerials/CatAerials';
import '../SingleMove/SingleMovePage.css';
import Footer from '../../components/MainLayout/Footer';
import Header from '../../components/MainLayout/Header';
import '../../App.css';


function AerialsLayout() {
  return (
    <div className="main-div">
      <Header />
      <CatAerials />
      <Footer />
    </div>
  );
}

export default AerialsLayout;