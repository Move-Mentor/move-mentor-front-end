import React from 'react';
import CatFloor from '../../components/Categories/Floor/CatFloor';
import '../SingleMove/SingleMovePage.css';
import Footer from '../../components/MainLayout/Footer';
import '../../App.css';


function OptionsLayout() {
  return (
    <div className="main-div">
      <CatFloor />
      <Footer />
    </div>
  );
}

export default OptionsLayout;