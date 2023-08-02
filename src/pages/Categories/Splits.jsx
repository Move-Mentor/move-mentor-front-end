import React from 'react';
import CatSplits from '../../components/Categories/Splits/CatSplits';
import '../SingleMove/SingleMovePage.css';
import HeaderTop from '../../components/MainLayout/HeaderTop';
import Footer from '../../components/MainLayout/Footer';
import '../../App.css';


function OptionsLayout() {
  return (
    <div className="main-div">
      <HeaderTop />
      <CatSplits />
      <Footer />
    </div>
  );
}

export default OptionsLayout;