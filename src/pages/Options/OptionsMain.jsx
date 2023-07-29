import React from 'react';
import OptionsCards from '../../components/OptionsCards/OptionsCards';
import '../SingleMove/SingleMovePage.css';
import Footer from '../../components/MainLayout/Footer';
import Header from '../../components/MainLayout/header';
import '../../App.css';


function OptionsLayout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <OptionsCards />
      < Footer />
    </div>
  );
}

export default OptionsLayout;