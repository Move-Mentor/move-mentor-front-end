import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer" style={{backgroundColor: '#F1DAAE'}}>
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <p>&copy; {currentYear} Klarina. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
