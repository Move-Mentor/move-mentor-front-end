import React from 'react';
import HeaderTop from '../../components/MainLayout/HeaderTop';
import Footer from '../../components/MainLayout/Footer';
import CarouselComponent from '../../components/Carousel/carousel';
import './SingleMovePage.css';
import SingleMoveNav from '../../components/SingleMoveNav/SingleMoveNav';
import AddToClass from '../../components/AddToClass/AddToClass';
import '../../App.css';

function SingleMovePage({ userRole }) {
  return (
    <div className="main-div">
      <HeaderTop />
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