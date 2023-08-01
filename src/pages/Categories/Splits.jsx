import React from 'react';
import CatSplits from '../../components/Categories/Splits/CatSplits';
import '../SingleMove/SingleMovePage.css';
import Footer from '../../components/MainLayout/Footer';
import '../../App.css';


function OptionsLayout() {
  return (
    <div className="main-div">
      <CatSplits />
      <Footer />
    </div>
  );
}

export default OptionsLayout;