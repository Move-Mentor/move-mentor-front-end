import Card from 'react-bootstrap/Card';
import MainImage from '../../images/landing_logo.png';

function LandingMainImage() {
  return (
    <Card >
      <Card.Body style={{backgroundColor:'#F1DAAE'}}>
        <img src={MainImage} alt="white silhouette of a pole dancer"/>
      </Card.Body>
    </Card>
  );
}

export default LandingMainImage;