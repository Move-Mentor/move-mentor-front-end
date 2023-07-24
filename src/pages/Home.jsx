import React from 'react';
import HomeMainImage from '../components/LandingPage/HomeMainImage';
import HomeNavOptions from '../components/LandingPage/HomeNavOptions';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';


// function TwoFullHeightCards() {
//   return (
//     <div>
//       <HomeMainImage />
//       <HomeNavOptions />
//     </div>
//   );
// };

// export default TwoFullHeightCards;

function HomeLayout() {
  return (
    <CardGroup>
      <Row xs={1} s={1} md={2} className="g-4">
      <Card>
        <Card.Body>
          <HomeMainImage />
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <HomeNavOptions />
        </Card.Body>
      </Card>
      </Row>
    </CardGroup>
  );
}

export default HomeLayout;