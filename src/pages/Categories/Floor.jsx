import React from 'react';
import CatFloor from '../../components/Categories/Floor/CatFloor';
import '../SingleMove/SingleMovePage.css';
import Footer from '../../components/MainLayout/Footer';
import Header from '../../components/MainLayout/Header';
import '../../App.css';


function OptionsLayout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <CatFloor />
      <Footer />
    </div>
  );
}

export default OptionsLayout;