import React from "react";
import "../SingleMove/SingleMovePage.css";
import HeaderTop from "../../components/MainLayout/HeaderTop";
import Footer from "../../components/MainLayout/Footer";
import SingleMoveNav from "../../components/SingleMoveNav/SingleMoveNav";
import { Link } from "react-router-dom";
import { lessons } from "../../lessons";

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

function LessonsDetail() {
  let params = useParams();
  console.log(params.name);
  const lesson = lessons.find(function (less) {
    return less.id === params.name;
  });
  console.log(lesson);

  return (
    <div>
      <HeaderTop />
      <div className="single-move-div">
        <div style={{ textAlign: "center" }}>
          <SingleMoveNav />
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          {lesson.moves.map((move, index) => (
            <div key={index} className="col-md-3">
              <Card {...move} />
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default LessonsDetail;
