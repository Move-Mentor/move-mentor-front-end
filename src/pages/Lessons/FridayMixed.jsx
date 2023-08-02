import React from 'react';
import FridayMixedCard from '../../components/Lessons/FridayMixed';
import '../SingleMove/SingleMovePage.css';
import Footer from '../../components/MainLayout/Footer';
import LessonsNav from './LessonsNav';
import '../../App.css';


function FridayMixedLayout() {
  return (
    <div className="main-div">
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

