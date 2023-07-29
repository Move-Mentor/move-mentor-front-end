import React from 'react';
import OptionsCards from '../../components/OptionsCards/OptionsCards';
import '../SingleMove/SingleMovePage.css';
import AddToClass from '../../components/AddToClass/AddToClass';
import Footer from '../../components/MainLayout/Footer';
import Header from '../../components/MainLayout/header';
import '../../App.css';


function OptionsLayout({ userRole }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <OptionsCards />
      <div style={{textAlign: 'center'}}>
         { userRole === 'teacher' && <AddToClass /> }
      </div>
      < Footer />
    </div>
  );
}

export default OptionsLayout;