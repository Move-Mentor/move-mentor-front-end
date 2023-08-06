import Login from './pages/Login/Login';
import Register from './pages/RegisterStudent/Register';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OptionsMain from './pages/Options/OptionsMain';
import CategoriesMain from './pages/Categories/CategoriesMain';
import CategoriesDetail from './pages/Categories/CategoriesDetail';
import LessonsMain from './pages/Lessons/LessonsMain';
import LessonsDetail from './pages/Lessons/LessonsDetail';
import LessonListPage from './pages/Lessons/LessonList';


const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* index is going to be the default page that's rendered */}
          <Route index element={<Home />} />
          <Route path="/users/login/student" element={<Login loginAsRole="student" />} />
          <Route path="/users/login/teacher" element={<Login loginAsRole="teacher" />} />
          <Route path="/users/signup/student" element={<Register />} />
          <Route path="/options" element={<OptionsMain />} />
          <Route path="/moves/categories" element={<CategoriesMain />} />
          <Route path="/moves/categories/:category" element={<CategoriesDetail />} />
          <Route path="/lessonlist" element={<LessonListPage />} />
          <Route path="/lessons" element={<LessonsMain />} />
          <Route path="/lessons/:name" element={<LessonsDetail />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
};

export default App;
