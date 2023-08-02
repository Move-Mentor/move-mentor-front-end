import React from 'react';
import CatFloor from '../../components/Categories/Floor/CatFloor';
import '../SingleMove/SingleMovePage.css';
import HeaderTop from '../../components/MainLayout/HeaderTop';
import Footer from '../../components/MainLayout/Footer';
import '../../App.css';


function OptionsLayout() {
  return (
    <div className="main-div">
      <HeaderTop />
      <CatFloor />
      <Footer />
    </div>
  );
}

export default OptionsLayout;