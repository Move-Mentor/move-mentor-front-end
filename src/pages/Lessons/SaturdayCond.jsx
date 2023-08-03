import React from 'react';
import SaturdayCondCard from '../../components/Lessons/SaturdayCond';
import '../SingleMove/SingleMovePage.css';
import HeaderTop from '../../components/MainLayout/HeaderTop';
import Footer from '../../components/MainLayout/Footer';
import LessonsNav from './LessonsNav';
import '../../App.css';


function FridayMixedLayout() {
  return (
    <div className="main-div">
      <div style={{textAlign: 'center' }}>
        <HeaderTop />
        <LessonsNav />
      </div>
      <div>
        <SaturdayCondCard />
      </div>
        <Footer />
    </div>
  );
}

export default FridayMixedLayout;

