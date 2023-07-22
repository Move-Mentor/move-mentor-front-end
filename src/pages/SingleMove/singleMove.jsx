import CarouselComponent from '../../components/Carousel/carousel';
import './singleMove.css';
import SingleMoveNav from '../../components/AddToClass/single_move_nav_buttons';
import AddToClass from '../../components/AddToClass/add_to_class';

function SingleMovePage() {
  return (
    <div className="main">
      <SingleMoveNav />
      <div className="container mt-4 d-flex justify-content-center">
        <div className="col-md-6 col-lg-6 col-xl-6">
          <CarouselComponent />
        </div>
      </div>
      <div style={{textAlign: 'center'}}>
        <AddToClass />
      </div>
    </div>
  );
}

export default SingleMovePage;