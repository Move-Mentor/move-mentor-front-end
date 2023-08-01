import React from 'react';
import Footer from '../../components/MainLayout/Footer';
import Header from '../../components/MainLayout/Header';
import LessonNavCard from '../../components/Lessons/LessonNavCard';
import '../../App.css';

function LessonsPage() {
  return (
    <div className="main-div">
      <Header />
        <LessonNavCard />
      <Footer />
    </div>
  );
}

export default LessonsPage;