import CarouselComponent from '../components/carousel/carousel';
import '../pages/singleMove.css';
import SingleMoveNav from '../components/add_to_class/single_move_nav_button';
// import AddToClass from '../components/add_to_class/add_to_class';

function SingleMovePage() {
  return (
    <div className="main">
      <SingleMoveNav />
      <div className="container mt-4 d-flex justify-content-center">
        <div className="col-md-6 col-lg-6 col-xl-6">
          <CarouselComponent />
        </div>
      </div>
      {/* <AddToClass /> */}
    </div>
  );
}

export default SingleMovePage;
