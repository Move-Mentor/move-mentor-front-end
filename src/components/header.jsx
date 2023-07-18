import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import HomeIcon from '../images/home_icon.png';
import { Image } from 'react-bootstrap';


function Header() {
  return (
    <Navbar expand="lg" style={{backgroundColor: '#BCD5CF'}}>
      <Container>
        <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
          <Image src={HomeIcon} alt="Home icon to return home" fluid /></a>
      </Container>
    </Navbar>
  );
}

export default Header;