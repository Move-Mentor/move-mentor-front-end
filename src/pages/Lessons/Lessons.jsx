import React from 'react';
import Footer from '../../components/MainLayout/Footer';
import HeaderTop from '../../components/MainLayout/HeaderTop';
import LessonNavCard from '../../components/Lessons/LessonNavCard';
import '../../App.css';

function LessonsPage() {
  return (
    <div className="main-div">
      <HeaderTop />
      <LessonNavCard />
      <Footer />
    </div>
  );
}

export default LessonsPage;