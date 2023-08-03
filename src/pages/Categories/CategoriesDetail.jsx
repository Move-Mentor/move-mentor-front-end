import React from "react";
import "../SingleMove/SingleMovePage.css";
import Footer from "../../components/MainLayout/Footer";
import { Link } from "react-router-dom";
import { categories } from "../../categories";

import { useParams } from "react-router-dom";

const Card = ({ name, image, route, altTag }) => {
  return (
    <div className="card" style={{ margin: "15px" }}>
      <Link to={route}>
        <img
          src={image}
          className="card-img-top"
          alt={altTag}
          style={{ maxHeight: "25rem" }}
        />
        <div style={{ textAlign: "center" }}>{name}</div>
      </Link>
    </div>
  );
};

function CategoriesDetail() {
  let params = useParams();
  console.log(params.name);
  const category = categories.find(function (cat) {
    return cat.id === params.name;
  });
  console.log(category);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <p>Yoooo</p>
      <div className="d-flex flex-wrap justify-content-center">
        {category.moves.map((move, index) => (
          <div key={index} className="col-md-3">
            <Card {...move} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default CategoriesDetail;
