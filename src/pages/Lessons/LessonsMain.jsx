import React from "react";
import HeaderTop from "../../components/MainLayout/HeaderTop";
import Footer from "../../components/MainLayout/Footer";
import "../../App.css";
import LessonFetch from "../../components/Lessons/LessonFetch";

function LessonsMain() {
  return (
    <div>
      <HeaderTop />
      <div className="main-div">
        <div className="d-flex flex-wrap justify-content-center">
            <div className="col-md-3">
              <LessonFetch/>
            </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default LessonsMain;
