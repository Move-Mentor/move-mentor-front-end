import React from "react";
import { Link } from "react-router-dom";
import "./CategoryCard.css";

const CategoryCard = ({ name, image, route, color, altTag }) => {
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

export default CategoryCard;
