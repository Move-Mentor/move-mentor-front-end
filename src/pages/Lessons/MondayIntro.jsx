import React from 'react';
import Monday from '../../components/Lessons/MondayCards';
import '../SingleMove/SingleMovePage.css';
import Footer from '../../components/MainLayout/Footer';
import Header from '../../components/MainLayout/Header';
import '../../App.css';


function MondayLayout() {
  return (
    <div className="main-div">
      <Header />
      <Monday />
      <Footer />
    </div>
  );
}

export default MondayLayout;