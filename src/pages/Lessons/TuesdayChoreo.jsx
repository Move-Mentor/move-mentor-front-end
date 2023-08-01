import React from 'react';
import TuesdayChoreoList from '../../components/Lessons/TuesdayChoreoCard';
import '../SingleMove/SingleMovePage.css';
import Footer from '../../components/MainLayout/Footer';
import Header from '../../components/MainLayout/Header';
import '../../App.css';


function TuesdayChoreoLayout() {
  return (
    <div className="main-div">
      <Header />
      <TuesdayChoreoList />
      <Footer />
    </div>
  );
}

export default TuesdayChoreoLayout;