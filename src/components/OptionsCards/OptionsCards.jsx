import { Link } from "react-router-dom";
import "../../App.css";

const studentCardsData = [
  {
    name: "Lesson Moves",
    image:
      "https://movementor.s3.ap-southeast-2.amazonaws.com/OptionsNavigation/optionsClassMoves.png",
    route: "/lessonmoves",
    color: "#bcd5cf",
    altTag: "Lesson Moves",
  },
  {
    name: "Profile",
    image:
      "https://movementor.s3.ap-southeast-2.amazonaws.com/OptionsNavigation/optionsSearch.png",
    route: "/login",
    color: "#bcd5cf",
    altTag: "Profile",
  },
  {
    name: "All Moves",
    image:
      "https://movementor.s3.ap-southeast-2.amazonaws.com/OptionsNavigation/optionsCategories.png",
    route: "/moves/categories",
    color: "#bcd5cf",
    altTag: "All Moves",
  },
];

const teacherCardsData = [
  {
    name: "Lessons",
    image:
      "https://movementor.s3.ap-southeast-2.amazonaws.com/OptionsNavigation/optionsClassMoves.png",
    route: "/lessons",
    color: "#bcd5cf",
    altTag: "Lessons",
  },
  {
    name: "Profile",
    image:
      "https://movementor.s3.ap-southeast-2.amazonaws.com/OptionsNavigation/optionsSearch.png",
    route: "/login",
    color: "#bcd5cf",
    altTag: "Profile",
  },
  {
    name: "All Moves",
    image:
      "https://movementor.s3.ap-southeast-2.amazonaws.com/OptionsNavigation/optionsCategories.png",
    route: "/moves/categories",
    color: "#bcd5cf",
    altTag: "All",
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

const OptionsNav = ({ role }) => {
  const cardsData = role === "student" ? studentCardsData : teacherCardsData;

  return (
    <div style={{ marginTop: "8rem" }}>
      <div className="d-flex flex-wrap justify-content-center">
        {cardsData.map((cardData, index) => (
          <div key={index} className="col-md-3">
            <Card {...cardData} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OptionsNav;
