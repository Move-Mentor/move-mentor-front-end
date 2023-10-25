import { Link } from "react-router-dom";
import "../../App.css";
import { useLessonContext } from "../../contexts/LessonContext";
const studentCardsData = [
  {
    name: "Lesson Moves",
    image:
      "https://movementor.s3.ap-southeast-2.amazonaws.com/OptionsNavigation/optionsClassMoves.png",
    route: "/lessons/:id",
    color: "#BCD5CF",
    altTag: "Lesson Moves",
  },
  {
    name: "Profile",
    image:
      "https://movementor.s3.ap-southeast-2.amazonaws.com/OptionsNavigation/optionsSearch.png",
    route: "/users/profile/student",
    color: "#BCD5CF",
    altTag: "Profile",
  },
  {
    name: "All Moves",
    image:
      "https://movementor.s3.ap-southeast-2.amazonaws.com/OptionsNavigation/optionsCategories.png",
    route: "/moves/categories",
    color: "#BCD5CF",
    altTag: "All Moves",
  },
];

const teacherCardsData = [
  {
    name: "Lessons",
    image:
      "https://movementor.s3.ap-southeast-2.amazonaws.com/OptionsNavigation/optionsClassMoves.png",
    route: "/lessons",
    color: "#DEC4F3",
    altTag: "Lessons",
  },
  {
    name: "Profile",
    image:
      "https://movementor.s3.ap-southeast-2.amazonaws.com/OptionsNavigation/optionsSearch.png",
    route: "/users/profile/teacher",
    color: "#DEC4F3",
    altTag: "Profile",
  },
  {
    name: "All Moves",
    image:
      "https://movementor.s3.ap-southeast-2.amazonaws.com/OptionsNavigation/optionsCategories.png",
    route: "/moves/categories",
    color: "#DEC4F3",
    altTag: "All",
  },
];

const Card = ({ name, image, route, color, altTag }) => {
  return (
    <div className="card" style={{ margin: "15px" }}>
      <Link className="nav-link btn" to={route}>
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

  // Get the lesson ID from the lessons data
  const { lessons } = useLessonContext();

  return (
    <div style={{ marginTop: "8rem" }}>
      <div className="d-flex flex-wrap justify-content-center">
        {cardsData.map((cardData, index) => {
          // For the "Lesson Moves" card, dynamically update the route with the lesson id
          if (cardData.name === "Lesson Moves" && lessons.length > 0) {
            const lessonId = lessons[0]._id;
            cardData.route = `/lessons/${lessonId}`;
          }

          return (
            <div key={index} className="col-md-3">
              <Card {...cardData} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OptionsNav;
