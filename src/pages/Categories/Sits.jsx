import React from 'react';
import CatSits from '../../components/Categories/Sits/CatSits';
import '../SingleMove/SingleMovePage.css';
import Footer from '../../components/MainLayout/Footer';
import '../../App.css';


function OptionsLayout() {
  return (
    <div className="main-div">
      <CatSits />
      <Footer />
    </div>
  );
}

export default OptionsLayout;