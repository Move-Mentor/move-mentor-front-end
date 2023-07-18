import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import CarouselComponent from './components/carousel/carousel';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <p>
          Welcome to Move Mentor! We're still working on this project. Stay tuned.
        </p>
      </header> */}
      <Header />
      <div className="container mt-4 d-flex justify-content-center">
        <div className="col-md-6 col-lg-6 col-xl-6">
          <CarouselComponent />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
