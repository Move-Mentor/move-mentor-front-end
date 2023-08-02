import React from 'react';
import CatSpins from '../../components/Categories/Spins/CatSpins';
import '../SingleMove/SingleMovePage.css';
import HeaderTop from '../../components/MainLayout/HeaderTop';
import Footer from '../../components/MainLayout/Footer';
import '../../App.css';


function OptionsLayout() {
  return (
    <div className="main-div">
      <HeaderTop/>
      <CatSpins />
      <Footer />
    </div>
  );
}

export default OptionsLayout;