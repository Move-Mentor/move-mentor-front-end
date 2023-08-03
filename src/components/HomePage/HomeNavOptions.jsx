import React from "react";
import { Link } from "react-router-dom";

import Image2 from "../../images/aphroditeVariation.png";
import Image3 from "../../images/felixSplits.png";
import "../../App.css";

export const navOptions = [
  {
    name: "New Student Register",
    image:
      "https://movementor.s3.ap-southeast-2.amazonaws.com/Climbs/ClimbsFigurehead.png",
    route: "/card1",
    color: "#f3b89c",
    altTag: "Brass Monkey Extend",
  },
  {
    name: "Student Login",
    image: Image2,
    route: "/users/login/student",
    color: "#bcd5cf",
    altTag: "Aphrodite Variation",
  },
  {
    name: "Teacher Login",
    image: Image3,
    route: "/card3",
    color: "#dec4f3",
    altTag: "Splits - Felix",
  },
];

const Card = ({ name, image, route, color, altTag }) => {
  return (
    <Link to={route} className="btn" data-testid="home-nav-card">
      <div
        className="card"
        style={{ marginBottom: "15px", marginTop: "30px", marginRight: "15px" }}
      >
        <img src={image} alt={altTag} style={{ maxHeight: "20rem" }} />
        <div style={{ backgroundColor: color, textAlign: "center" }}>
          {name}
        </div>
      </div>
    </Link>
  );
};

const HomeNavOptions = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {navOptions.map((option, index) => (
        <div key={index} className="col-md-6">
          <Card {...option} />
        </div>
      ))}
    </div>
  );
};

export default HomeNavOptions;
