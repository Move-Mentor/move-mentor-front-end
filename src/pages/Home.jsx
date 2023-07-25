import React from 'react';
import HomeMainImage from '../components/LandingPage/HomeMainImage';
import HomeNavOptions from '../components/LandingPage/HomeNavOptions';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
// import Row from 'react-bootstrap/Row';


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
    <CardGroup xs={1} s={1} md={1} lg={2}>
      
      <Card style={{backgroundColor:'#F1DAAE', textAlign: 'center'}}>
        <Card.Body>
          <HomeMainImage />
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <HomeNavOptions />
        </Card.Body>
      </Card>
      {/* </Row> */}
    </CardGroup>
  );
}

export default HomeLayout;