import React from "react";
import HeaderTop from "../../components/MainLayout/HeaderTop";
import Footer from "../../components/MainLayout/Footer";
import { useLessonContext } from "../../contexts/LessonContext";
import LessonCard from "../../components/Lessons/LessonCard";

import "../../App.css";

function LessonsMain() {
  const { lessons } = useLessonContext();

  return (
    <div>
      <HeaderTop />
      <div className="main-div">
        <div className="d-flex flex-wrap justify-content-center">
          {lessons.length === 0 ? (
            <p>No lessons available.</p>
          ) : (
            lessons.map((lesson) => (
              <div className="col-md-3" key={lesson._id}>
                <LessonCard lesson={lesson} />
              </div>
            ))
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default LessonsMain;
