import React from 'react';
import Monday from '../../components/Lessons/MondayCards';
import '../SingleMove/SingleMovePage.css';
import Header from '../../components/MainLayout/Header';
import Footer from '../../components/MainLayout/Footer';
import LessonsNav from './LessonsNav';
import '../../App.css';


function MondayLayout() {
  return (
    <div className="main-div">
      <Header />
      <div style={{textAlign: 'center' }}>
        <LessonsNav />
      </div>
      <div>
        <Monday />
      </div>
      <Footer />
    </div>
  );
}

export default MondayLayout;