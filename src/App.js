import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import SingleMovePage from './pages/singleMovePage'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <p>
          Welcome to Move Mentor! We're still working on this project. Stay tuned.
        </p>
      </header> */}
      <Header />
      <SingleMovePage />
      <Footer />
    </div>
  );
}

export default App;
