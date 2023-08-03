import React from "react";
import "../SingleMove/SingleMovePage.css";
import HeaderTop from "../../components/MainLayout/HeaderTop";
import Footer from "../../components/MainLayout/Footer";
import "../../App.css";
import { categories } from "../../categories";
import CategoryCard from "../../components/CategoryCard/CategoryCard";

function CategoriesMain() {
  return (
    <div>
      <HeaderTop />
      <div className="main-div">
        {categories.map((category, index) => (
          <div key={index} className="col-md-3">
            <CategoryCard {...category} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default CategoriesMain;
