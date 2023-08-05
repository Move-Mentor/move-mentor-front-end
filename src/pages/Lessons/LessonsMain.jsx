import React from "react";
import HeaderTop from "../../components/MainLayout/HeaderTop";
import Footer from "../../components/MainLayout/Footer";
import "../../App.css";
import { lessons } from "../../lessons";
import CategoryCard from "../../components/CategoryCard/CategoryCard";

function LessonsMain() {
  return (
    <div>
      <HeaderTop />
      <div className="main-div">
        <div className="d-flex flex-wrap justify-content-center">
          {lessons.map((lesson, index) => (
            <div key={index} className="col-md-3">
              <CategoryCard {...lesson} />
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default LessonsMain;
