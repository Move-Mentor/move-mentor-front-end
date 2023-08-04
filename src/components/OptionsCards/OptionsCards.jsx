import React from "react";
import { Link } from "react-router-dom";
import "./OptionsCards.css";

import classImage from "../../images/optionsClassMoves.png";
import profileImage from "../../images/optionsSearch.png";
import categoriesImage from "../../images/optionsCategories.png";

const cardsData = [
  {
    name: "Lessons",
    image: classImage,
    route: "/lessons",
    color: "#bcd5cf",
    altTag: "Aerial Invert",
  },
  {
    name: "Profile",
    image: profileImage,
    route: "/login",
    color: "#bcd5cf",
    altTag: "Star Chaser",
  },
  {
    name: "All Moves",
    image: categoriesImage,
    route: "/categories",
    color: "#bcd5cf",
    altTag: "Bianca",
  },
];

const Card = ({ name, image, route, color, altTag }) => {
  return (
    <div className="card" style={{ margin: "15px" }}>
      <Link to={route}>
        <img
          src={image}
          className="card-img-top"
          alt={altTag}
          style={{ maxHeight: "25rem" }}
        />
        <div style={{ backgroundColor: color, textAlign: "center" }}>
          {name}
        </div>
      </Link>
    </div>
  );
};

const OptionsNav = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {cardsData.map((cardData, index) => (
        <div key={index} className="col-md-3">
          <Card {...cardData} />
        </div>
      ))}
    </div>
  );
};

export default OptionsNav;
