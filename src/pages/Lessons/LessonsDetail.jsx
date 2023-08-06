import React from "react";
import HeaderTop from "../../components/MainLayout/HeaderTop";
import Footer from "../../components/MainLayout/Footer";
import InnerPageNav from "../../components/InnerPageNav/InnerPageNav";
import { Link } from "react-router-dom";
import { lessons } from "../../lessons";

import { useParams } from "react-router-dom";

const Card = ({ name, image, route, altTag }) => {
  return (
    <div className="card" style={{ margin: "15px" }}>
      <Link className="nav-link btn" to={route}>
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
      <InnerPageNav />
      <div className="d-flex flex-wrap justify-content-center">
        {lesson.moves.map((move, index) => (
          <div key={index} className="col-md-3">
            <Card {...move} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default LessonsDetail;
