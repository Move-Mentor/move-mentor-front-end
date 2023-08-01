import React from 'react';
import CatSpins from '../../components/Categories/Spins/CatSpins';
import '../SingleMove/SingleMovePage.css';
import Footer from '../../components/MainLayout/Footer';
import Header from '../../components/MainLayout/Header';
import '../../App.css';


function OptionsLayout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <CatSpins />
      <Footer />
    </div>
  );
}

export default OptionsLayout;