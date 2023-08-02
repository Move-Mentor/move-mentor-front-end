import React from 'react';
import Footer from '../../components/MainLayout/Footer';
import LessonNavCard from '../../components/Lessons/LessonNavCard';
import '../../App.css';

function LessonsPage() {
  return (
    <div className="main-div">
        <LessonNavCard />
      <Footer />
    </div>
  );
}

export default LessonsPage;