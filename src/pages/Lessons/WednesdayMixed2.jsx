import React from 'react';
import WednesdayMixed2Card from '../../components/Lessons/WednesdayMixed2';
import '../SingleMove/SingleMovePage.css';
import HeaderTop from '../../components/MainLayout/HeaderTop';
import Footer from '../../components/MainLayout/Footer';
import LessonsNav from './LessonsNav';
import '../../App.css';


function WednesdayMixed1Layout() {
  return (
    <div className="main-div">
      <div style={{textAlign: 'center' }}>
        <HeaderTop />
        <LessonsNav />
      </div>
      <div>
        <WednesdayMixed2Card />
      </div>
        <Footer />
    </div>
  );
}

export default WednesdayMixed1Layout;

