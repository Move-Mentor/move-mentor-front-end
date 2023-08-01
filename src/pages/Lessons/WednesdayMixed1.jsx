import React from 'react';
import WednesdayMixed1Card from '../../components/Lessons/WednesdayMixed1';
import '../SingleMove/SingleMovePage.css';
import Footer from '../../components/MainLayout/Footer';
import Header from '../../components/MainLayout/Header';
import LessonsNav from './LessonsNav';
import '../../App.css';


function WednesdayMixed1Layout() {
  return (
    <div className="main-div">
      <Header />
      <div style={{textAlign: 'center' }}>
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

