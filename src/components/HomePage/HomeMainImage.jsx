import Card from "react-bootstrap/Card";
import MainImage from "../../images/landing_logo.png";
import "../../App.css";

const HomeMainImage = () => {
  return (
    <Card className="login-page card-left-side-silhouette">
      <Card.Body>
        <img src={MainImage} alt="white silhouette of a pole dancer" />
      </Card.Body>
    </Card>
  );
};

export default HomeMainImage;
