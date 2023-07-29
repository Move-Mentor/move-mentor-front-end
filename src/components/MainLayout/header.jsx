import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import HomeIcon from '../../images/home_icon.png';
import { Image } from 'react-bootstrap';
import './header.css';



const header = ({ userRole }) => {
  const headerClass = userRole === 'teacher' ? 'header-teacher' : 'header-student';

  return (
    <Navbar data-testid="nav" className={headerClass} expand="lg">
      <Container>
        <a href="#home">
          <Image src={HomeIcon} alt="Home icon to return home" fluid /></a>
      </Container>
    </Navbar>
  );
}


export default header;