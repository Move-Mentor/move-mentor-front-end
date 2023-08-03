import React from 'react';
import WednesdayMixed1Card from '../../components/Lessons/WednesdayMixed1';
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
        <WednesdayMixed1Card />
      </div>
        <Footer />
    </div>
  );
}

export default WednesdayMixed1Layout;

