import React from "react";
import OptionsCards from "../../components/OptionsCards/OptionsCards";
import "../SingleMove/SingleMovePage.css";
import HeaderTop from "../../components/MainLayout/HeaderTop";
import Footer from "../../components/MainLayout/Footer";
import "../../App.css";

function OptionsLayout() {
  return (
    <div>
      <HeaderTop />
      <div className="main-div">
        <OptionsCards />
        <Footer />
      </div>
    </div>
  );
}

export default OptionsLayout;
