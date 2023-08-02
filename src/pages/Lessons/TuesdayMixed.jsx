import React from 'react';
import TuesdayMix from '../../components/Lessons/TuesdayMixCard';
import '../SingleMove/SingleMovePage.css';
import HeaderTop from '../../components/MainLayout/HeaderTop';
import Footer from '../../components/MainLayout/Footer';
import LessonsNav from './LessonsNav';
import '../../App.css';


function TuesdayMixLayout() {
  return (
    <div className="main-div">
      <div style={{textAlign: 'center' }}>
        <HeaderTop/>
        <LessonsNav />
      </div>
      <div>
        <TuesdayMix />
      </div>
        <Footer />
    </div>
  );
}

export default TuesdayMixLayout;

