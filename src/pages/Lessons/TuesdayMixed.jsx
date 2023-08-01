import React from 'react';
import TuesdayMix from '../../components/Lessons/TuesdayMixCard';
import '../SingleMove/SingleMovePage.css';
import Footer from '../../components/MainLayout/Footer';
import Header from '../../components/MainLayout/Header';
import LessonsNav from './LessonsNav';
import '../../App.css';


function TuesdayMixLayout() {
  return (
    <div className="main-div">
      <Header />
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

