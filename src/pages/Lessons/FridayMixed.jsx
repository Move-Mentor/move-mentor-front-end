import React from 'react';
import FridayMixedCard from '../../components/Lessons/FridayMixed';
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
        <FridayMixedCard />
      </div>
        <Footer />
    </div>
  );
}

export default FridayMixedLayout;

