import React from 'react';
import OptionsCards from '../../components/OptionsCards/OptionsCards';
import '../SingleMove/SingleMovePage.css';
import Footer from '../../components/MainLayout/Footer';
import '../../App.css';


function OptionsLayout() {
  return (
    <div className="main-div">
      <OptionsCards />
      <Footer />
    </div>
  );
}

export default OptionsLayout;