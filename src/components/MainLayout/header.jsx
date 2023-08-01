import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import HomeIcon from '../../images/home_icon.png';
import { Image } from 'react-bootstrap';
import './Header.css';



const Header = ({ userRole }) => {
  const headerClass = userRole === 'teacher' ? 'header-teacher' : 'header-student';

  return (
    <Navbar data-testid="nav" className={headerClass} expand="lg">
      <Container>
        <Link to={'/OptionsMain'}>
          <Image src={HomeIcon} alt="Home icon to return home" fluid />
        </Link>
      </Container>
    </Navbar>
  );
}


export default Header;