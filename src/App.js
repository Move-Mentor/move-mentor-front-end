import './App.css';
import MainLayout from './components/MainLayout/Layout';
import SingleMovePage from './pages/SingleMove/singleMove';

const App = () => {
  return (
    <div>
      <MainLayout>

        <SingleMovePage />
      </MainLayout>

    </div>
  );
};

export default App;

