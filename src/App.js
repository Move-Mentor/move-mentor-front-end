import './App.css';
// import Header from './components/header';
// import Footer from './components/MainLayout/Footer';
import MainLayout from './components/MainLayout/Layout';

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <p>
//           Welcome to Move Mentor! We're still working on this project. Stay tuned.
//         </p>
//       </header> */}
//       <Header />
//       <Footer />
//     </div>
//   );
// }

// export default App;

const App = () => {
  return (
    <div>
      <MainLayout>
        <p>Some Content Here</p>
      </MainLayout>

    </div>
  );
};

export default App;

