import React from 'react';
import TuesdayMix from '../../components/Lessons/TuesdayMixCard';
import '../SingleMove/SingleMovePage.css';
import Footer from '../../components/MainLayout/Footer';
import Header from '../../components/MainLayout/Header';
import '../../App.css';


function TuesdayMixLayout() {
  return (
    <div className="main-div">
      <Header />
      <TuesdayMix />
      <Footer />
    </div>
  );
}

export default TuesdayMixLayout;