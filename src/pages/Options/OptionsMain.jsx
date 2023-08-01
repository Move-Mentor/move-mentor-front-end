import React from 'react';
import OptionsCards from '../../components/OptionsCards/OptionsCards';
import '../SingleMove/SingleMovePage.css';
import Footer from '../../components/MainLayout/Footer';
// import Header from '../../components/MainLayout/Header';
import '../../App.css';


function OptionsLayout() {
  return (
    <div className="main-div">
      {/* <Header /> */}
      <OptionsCards />
      <Footer />
    </div>
  );
}

export default OptionsLayout;