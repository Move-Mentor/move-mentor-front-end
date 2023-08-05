import Footer from '../../components/MainLayout/Footer';
import HeaderTop from '../../components/MainLayout/HeaderTop';
import '../../App.css';
import LessonFetch from '../../components/Lessons/LessonFetch';

function LessonListPage() {
  return (
    <div className="main-div">
      <HeaderTop />
      <LessonFetch />
      <Footer />
    </div>
  );
}

// Need to render the lesson list in the app.js file

export default LessonListPage;