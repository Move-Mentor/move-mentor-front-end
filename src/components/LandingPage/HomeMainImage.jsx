import Card from 'react-bootstrap/Card';
import MainImage from '../../images/landing_logo.png';
import './HomeMainImage.css';

function HomeMainImage() {
  return (
    <Card className="main-img-card">
      <Card.Body >
        <img src={MainImage} alt="white silhouette of a pole dancer"/>
      </Card.Body>
    </Card>
  );
}

export default HomeMainImage;