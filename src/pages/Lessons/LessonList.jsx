import Footer from '../../components/MainLayout/Footer';
import HeaderTop from '../../components/MainLayout/HeaderTop';
import '../../App.css';
import LessonList from '../../components/Lessons/LessonList';

function LessonListPage() {
  return (
    <div className="main-div">
      <HeaderTop />
      <LessonList />
      <Footer />
    </div>
  );
}

// Need to render the lesson list in the app.js file

export default LessonListPage;