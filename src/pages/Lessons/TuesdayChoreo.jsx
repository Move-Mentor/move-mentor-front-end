import React from 'react';
import TuesdayChoreoList from '../../components/Lessons/TuesdayChoreoCard';
import '../SingleMove/SingleMovePage.css';
import Footer from '../../components/MainLayout/Footer';
import Header from '../../components/MainLayout/Header';
import '../../App.css';


function TuesdayChoreoLayout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <TuesdayChoreoList />
      <Footer />
    </div>
  );
}

export default TuesdayChoreoLayout;