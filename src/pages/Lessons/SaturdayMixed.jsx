import React from 'react';
import SaturdayMixedCard from '../../components/Lessons/SaturdayMixedCard';
import '../SingleMove/SingleMovePage.css';
import Footer from '../../components/MainLayout/Footer';
import Header from '../../components/MainLayout/Header';
import LessonsNav from './LessonsNav';
import '../../App.css';


function FridayMixedLayout() {
  return (
    <div className="main-div">
      <Header />
      <div style={{textAlign: 'center' }}>
        <LessonsNav />
      </div>
      <div>
        <SaturdayMixedCard />
      </div>
        <Footer />
    </div>
  );
}

export default FridayMixedLayout;

