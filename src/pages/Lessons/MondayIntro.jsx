import React from 'react';
import Monday from '../../components/Lessons/MondayCards';
import '../SingleMove/SingleMovePage.css';
import Footer from '../../components/MainLayout/Footer';
import LessonsNav from './LessonsNav';
import '../../App.css';


function MondayLayout() {
  return (
    <div className="main-div">
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