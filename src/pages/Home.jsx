import React from 'react';
import HomeMainImage from '../components/LandingPage/HomeMainImage';
import HomeNavOptions from '../components/LandingPage/HomeNavOptions';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function HomeLayout() {
  return (
    <div style={{ display: 'grid', gridTemplateRows: '1fr auto', minHeight: '100vh' }} >
     
        <CardGroup >
          <Card style={{ backgroundColor: '#F1DAAE' }}>
            <Card.Body>
              <HomeMainImage />
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <HomeNavOptions />
            </Card.Body>
          </Card>
        </CardGroup>
      
      {/* Empty div with "auto" height to push the cards to the bottom */}
      <div style={{ height: 'auto' }}></div>
    </div>
  );
}

export default HomeLayout;
