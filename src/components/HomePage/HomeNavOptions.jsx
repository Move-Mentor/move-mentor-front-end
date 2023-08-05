import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

export const navOptions = [
  {
    name: "New Student Register",
    image: "https://movementor.s3.ap-southeast-2.amazonaws.com/Inverts/invertsBrassMonkeyExtend.png",
    route: "/users/signup/student",
    color: "#f3b89c",
    altTag: "Brass Monkey Extend",
  },
  {
    name: "Student Login",
    image: "https://movementor.s3.ap-southeast-2.amazonaws.com/Climbs/climbsAphroditeVariation.png",
    route: "/users/login",
    color: "#bcd5cf",
    altTag: "Aphrodite Variation",
  },
  {
    name: "Teacher Login",
    image: "https://movementor.s3.ap-southeast-2.amazonaws.com/Splits/splitsFelix.png",
    route: "/users/login",
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
