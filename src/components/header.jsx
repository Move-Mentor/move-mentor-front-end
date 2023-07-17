import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import homeIcon from '../images/home_icon_green.png';


function StudentNavBar() {
  return (
    <Navbar expand="lg" style={{backgroundColor: '#BCD5CF'}}>
      <Container style={{marginLeft: '1rem'}}>
        <Navbar.Brand href="#home"><img src={homeIcon} alt="home icon for home navigation"></img></Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default StudentNavBar;