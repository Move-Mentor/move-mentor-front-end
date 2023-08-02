import React from 'react';
import CatInverts from '../../components/Categories/Inverts/CatInverts';
import '../SingleMove/SingleMovePage.css';
import Footer from '../../components/MainLayout/Footer';
import '../../App.css';


function OptionsLayout() {
  return (
    <div className="main-div">
      <CatInverts />
      <Footer />
    </div>
  );
}

export default OptionsLayout;