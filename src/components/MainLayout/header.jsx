import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import HomeIcon from '../../images/home_icon.png';
import { Image } from 'react-bootstrap';
import './Header.css';



const Header = ({ userRole }) => {
  const HeaderClass = userRole === 'teacher' ? 'Header-teacher' : 'Header-student';

  return (
    <Navbar data-testid="nav" className={HeaderClass} expand="lg">
      <Container>
        <a href="#home">
          <Image src={HomeIcon} alt="Home icon to return home" fluid /></a>
      </Container>
    </Navbar>
  );
}


export default Header;