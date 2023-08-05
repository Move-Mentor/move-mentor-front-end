import React from "react";
import HeaderTop from "../../components/MainLayout/HeaderTop";
import Footer from "../../components/MainLayout/Footer";
import "../../App.css";
import { CategoryFetch } from "../../components/CategoryCard/CategoryFetch";

function CategoriesMain() {
  return (
    <div>
      <HeaderTop />
      <div className="main-div">
        <div className="d-flex flex-wrap justify-content-center">
          <CategoryFetch />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default CategoriesMain;
