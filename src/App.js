import Login from './pages/Login/Login';
import Register from './pages/RegisterStudent/Register';
import Home from './pages/Home';
import SingleMovePage from './pages/SingleMove/SingleMovePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OptionsMain from './pages/Options/OptionsMain';
import CategoriesMain from './pages/Categories/CategoriesMain';
import CategoriesDetail from './pages/Categories/CategoriesDetail';
import LessonsMain from './pages/Lessons/LessonsMain';
import LessonsDetail from './pages/Lessons/LessonsDetail';
import SingleMovePageAlt from './pages/SingleMove/SingleMovePageAlt';


const App = () => {
  const userRole = 'student';

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* index is going to be the default page that's rendered */}
          <Route index element={<Home />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/users/signup/student" element={<Register />} />
          <Route path="/moves/:id" element={<SingleMovePageAlt />} />
          <Route path="/SingleMovePage" element={<SingleMovePage userRole={userRole} />} />
          <Route path="/options" element={<OptionsMain />} />
          <Route path="/moves/categories" element={<CategoriesMain />} />
          <Route path="/moves/categories/:category" element={<CategoriesDetail />} />
          <Route path="/lessons" element={<LessonsMain />} />
          <Route path="/lessons/:name" element={<LessonsDetail />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
};

export default App;
