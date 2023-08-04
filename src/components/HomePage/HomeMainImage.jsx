import Card from "react-bootstrap/Card";
import MainImage from "../../images/landing_logo.png";
import "../../App.css";

const HomeMainImage = ({ userRole }) => {
  const imageClass =
    userRole === "teacher" ? "background-teacher" : "background-student";

  return (
    <Card className={imageClass}>
      <Card.Body>
        <img src={MainImage} alt="white silhouette of a pole dancer" />
      </Card.Body>
    </Card>
  );
};

export default HomeMainImage;
