import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';



const MainLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
       < Header />
      <Container style={{ flex: '1' }}>
        {children}
      </Container>
      < Footer />
    </div>
  );
};

export default MainLayout;