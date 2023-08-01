import React from 'react';
import CatSplits from '../../components/Categories/Splits/CatSplits';
import '../SingleMove/SingleMovePage.css';
import Footer from '../../components/MainLayout/Footer';
import Header from '../../components/MainLayout/Header';
import '../../App.css';


function OptionsLayout() {
  return (
    <div className="main-div">
      <Header />
      <CatSplits />
      <Footer />
    </div>
  );
}

export default OptionsLayout;