import React from "react";
import Card from "./Card"; // Import the Card component from the Card.js file
import "./LandingNavOptions.css";

import Image1 from "../../images/brassMonkeyExtend.png";
import Image2 from "../../images/aphroditeVariation.png";
import Image3 from "../../images/felixSplits.png";

const cardsData = [
  {
    name: "New Student Register",
    image: Image1,
    route: "/card1",
  },
  {
    name: "Student Login",
    image: Image2,
    route: "/login-student",
  },
  {
    name: "Teacher Login",
    image: Image3,
    route: "/card3",
  },
];

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const CardList = () => {
  return (
    <div className="container">
      <div className="row">
        {cardsData.map((card, index) => {
          const randomColorClass = `btn-custom-color-${getRandomInt(3) + 1}`;
          return (
            <div key={index} className="col-md-4">
              <Card {...card} buttonClass={randomColorClass} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardList;
