import React from 'react';
import TuesdayChoreoList from '../../components/Lessons/TuesdayChoreoCard';
import '../SingleMove/SingleMovePage.css';
import Footer from '../../components/MainLayout/Footer';
import LessonsNav from './LessonsNav';
import '../../App.css';


function TuesdayChoreoLayout() {
  return (
    <div className="main-div">
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

