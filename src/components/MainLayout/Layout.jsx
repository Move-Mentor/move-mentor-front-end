import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from './Footer';



const MainLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Container style={{ flex: '1' }}>
        {children}
      </Container>
      < Footer />
    </div>
  );
};

export default MainLayout;