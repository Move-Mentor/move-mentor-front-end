import React from 'react';
import Footer from '../../components/MainLayout/Footer';
import Header from '../../components/MainLayout/Header';
import CarouselComponent from '../../components/Carousel/carousel';
import './SingleMovePage.css';
import SingleMoveNav from '../../components/SingleMoveNav/SingleMoveNav';
import AddToClass from '../../components/AddToClass/AddToClass';

function SingleMovePage({ userRole }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{textAlign: 'center' }}>
        <SingleMoveNav />
      </div>
      <div className="container mt-4 d-flex justify-content-center">
        <div className="col-md-6 col-lg-6 col-xl-6">
          <CarouselComponent />
        </div>
      </div>
      <div style={{textAlign: 'center'}}>
        { userRole === 'teacher' && <AddToClass /> }
      </div>
      <Footer />
    </div>
  );
}

export default SingleMovePage;