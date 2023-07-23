import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import image1 from '../../images/brassMonkeyExtend.png';



function NavOptionRegister() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image1} alt="image1" />
      <Button style={{backgroundColor: '#F3B89C', border: 'none', color: 'black'}}>New Student Register</Button>
    </Card>
  );
};

export default NavOptionRegister;
