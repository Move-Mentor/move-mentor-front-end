import Card from 'react-bootstrap/Card';
import MainImage from '../../images/landing_logo.png';

function HomeMainImage() {
  return (
    <Card style={{backgroundColor:'#F1DAAE', textAlign: 'center', border: 'none'}}>
      <Card.Body >
        <img src={MainImage} alt="white silhouette of a pole dancer"/>
      </Card.Body>
    </Card>
  );
}

export default HomeMainImage;