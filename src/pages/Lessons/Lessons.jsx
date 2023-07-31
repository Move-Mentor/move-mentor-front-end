import React from 'react';
import Footer from '../../components/MainLayout/Footer';
import Header from '../../components/MainLayout/header';
import LessonNavCard from '../../components/Lessons/LessonNavCard';

function SingleMovePage({ userRole }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
        <LessonNavCard />
      
      <Footer />
    </div>
  );
}

export default SingleMovePage;