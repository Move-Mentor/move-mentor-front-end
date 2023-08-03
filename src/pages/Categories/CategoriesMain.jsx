import React from "react";

import "../SingleMove/SingleMovePage.css";
import Footer from "../../components/MainLayout/Footer";
import "../../App.css";
import { categories } from "../../categories";
import CategoryCard from "../../components/CategoryCard/CategoryCard";

function CategoriesMain() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <div className="d-flex flex-wrap justify-content-center">
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
