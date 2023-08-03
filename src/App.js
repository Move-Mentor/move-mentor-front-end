import Login from './pages/StudentLogin/Login';
import Home from './pages/Home';
import SingleMovePage from './pages/SingleMove/SingleMovePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OptionsMain from './pages/Options/OptionsMain';
import CategoriesMain from './pages/Categories/CategoriesMain';
import CategoriesDetail from './pages/Categories/CategoriesDetail';

const App = () => {
  const userRole = 'student';

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* index is going to be the default page that's rendered */}
          <Route index element={<Home />} />
          <Route path="/login-student" element={<Login />} />
          <Route path="/SingleMovePage" element={<SingleMovePage userRole={userRole} />} />
          <Route path="/OptionsMain" element={<OptionsMain />} />
          <Route path="/moves/categories" element={<CategoriesMain />} />
          <Route path="/moves/categories/:category" element={<CategoriesDetail />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
};

export default App;
