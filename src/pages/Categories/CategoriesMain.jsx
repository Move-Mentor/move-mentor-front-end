import React from 'react';
import CatNavCards from '../../components/Categories/CatNavCards';
import '../SingleMove/SingleMovePage.css';
import HeaderTop from '../../components/MainLayout/HeaderTop';
import Footer from '../../components/MainLayout/Footer';
import '../../App.css';


function OptionsLayout() {
  return (
    <div className="main-div">
      <HeaderTop />
      <CatNavCards />
      <Footer />
    </div>
  );
}

export default OptionsLayout;