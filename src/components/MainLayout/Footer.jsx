import React from 'react';
import { Container} from 'react-bootstrap';
import './Footer.css'


const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer mt-auto">
      <Container>
      <p>&copy; {currentYear} Klarina. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;