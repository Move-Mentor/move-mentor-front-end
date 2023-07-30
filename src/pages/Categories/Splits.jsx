import React from 'react';
import CatSplits from '../../components/Categories/Splits/CatSplits';
import '../SingleMove/SingleMovePage.css';
import Footer from '../../components/MainLayout/Footer';
import Header from '../../components/MainLayout/header';
import '../../App.css';


function OptionsLayout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <CatSplits />
      <Footer />
    </div>
  );
}

export default OptionsLayout;