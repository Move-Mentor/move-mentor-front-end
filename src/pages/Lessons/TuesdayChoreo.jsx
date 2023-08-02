import React from 'react';
import TuesdayChoreoList from '../../components/Lessons/TuesdayChoreoCard';
import '../SingleMove/SingleMovePage.css';
import HeaderTop from '../../components/MainLayout/HeaderTop';
import Footer from '../../components/MainLayout/Footer';
import LessonsNav from './LessonsNav';
import '../../App.css';


function TuesdayChoreoLayout() {
  return (
    <div className="main-div">
      <HeaderTop />
      <div style={{textAlign: 'center' }}>
        <LessonsNav />
      </div>
      <div>
        <TuesdayChoreoList />
      </div>
      <Footer />
    </div>
  );
}

export default TuesdayChoreoLayout;

