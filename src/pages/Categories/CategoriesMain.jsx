import React from 'react';
import CatNavCards from '../../components/Categories/CatNavCards';
import '../SingleMove/SingleMovePage.css';
import Footer from '../../components/MainLayout/Footer';
import '../../App.css';


function OptionsLayout() {
  return (
    <div className="main-div">
      <CatNavCards />
      <Footer />
    </div>
  );
}

export default OptionsLayout;