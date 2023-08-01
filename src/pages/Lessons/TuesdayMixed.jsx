import React from 'react';
import TuesdayMix from '../../components/Lessons/TuesdayMixCard';
import '../SingleMove/SingleMovePage.css';
import Footer from '../../components/MainLayout/Footer';
import LessonsNav from './LessonsNav';
import '../../App.css';


function TuesdayMixLayout() {
  return (
    <div className="main-div">
      <div style={{textAlign: 'center' }}>
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

