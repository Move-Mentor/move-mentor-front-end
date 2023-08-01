import React from 'react';
import WednesdayMixed2Card from '../../components/Lessons/WednesdayMixed2';
import '../SingleMove/SingleMovePage.css';
import Footer from '../../components/MainLayout/Footer';
import Header from '../../components/MainLayout/Header';
import '../../App.css';


function WednesdayMixed2Layout() {
  return (
    <div className="main-div">
      <Header />
      <WednesdayMixed2Card />
      <Footer />
    </div>
  );
}

export default WednesdayMixed2Layout;