import React from 'react';
import CatSits from '../../components/Categories/Sits/CatSits';
import '../SingleMove/SingleMovePage.css';
import Footer from '../../components/MainLayout/Footer';
import Header from '../../components/MainLayout/header';
import '../../App.css';


function OptionsLayout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <CatSits />
      <Footer />
    </div>
  );
}

export default OptionsLayout;