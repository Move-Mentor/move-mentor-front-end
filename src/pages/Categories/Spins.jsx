import React from 'react';
import CatSpins from '../../components/Categories/Spins/CatSpins';
import '../SingleMove/SingleMovePage.css';
import Footer from '../../components/MainLayout/Footer';
import '../../App.css';


function OptionsLayout() {
  return (
    <div className="main-div">
      <CatSpins />
      <Footer />
    </div>
  );
}

export default OptionsLayout;