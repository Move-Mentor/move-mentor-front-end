import '../SingleMove/SingleMovePage.css';
import Footer from '../../components/MainLayout/Footer';
import HeaderTop from '../../components/MainLayout/HeaderTop';
import '../../App.css';
import { useToken } from '../../contexts/TokenContext';

const OptionsLayout = () => {
  const { role } = useToken();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <HeaderTop />
      {/* <OptionsCards /> */}
      {role === 'student' && <p>Student Content Goes Here - we need to render the student options cards.</p>}
      {role === 'teacher' && <p>Teacher Content Goes Here - we need to render the teacher cards.</p>}
      <Footer />
    </div>
  );
}

export default OptionsLayout;