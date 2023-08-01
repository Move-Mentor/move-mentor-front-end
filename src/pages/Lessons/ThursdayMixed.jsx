import React from 'react';
import WednesdayMixed2Card from '../../components/Lessons/WednesdayMixed2';
import '../SingleMove/SingleMovePage.css';
import Footer from '../../components/MainLayout/Footer';
// import Header from '../../components/MainLayout/Header';
import LessonsNav from './LessonsNav';
import '../../App.css';


function WednesdayMixed1Layout() {
  return (
    <div className="main-div">
      {/* <Header /> */}
      <div style={{textAlign: 'center' }}>
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

