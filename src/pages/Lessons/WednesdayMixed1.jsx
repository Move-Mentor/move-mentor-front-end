import React from 'react';
import WednesdayMixed1Card from '../../components/Lessons/WednesdayMixed1';
import '../SingleMove/SingleMovePage.css';
import Footer from '../../components/MainLayout/Footer';
import Header from '../../components/MainLayout/Header';
import '../../App.css';


function WednesdayMixed1Layout() {
  return (
    <div className="main-div">
      <Header />
      <WednesdayMixed1Card />
      <Footer />
    </div>
  );
}

export default WednesdayMixed1Layout;