import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import '../../pages/singleMove.css';

function SingleMoveNav() {
  return (
    <CardGroup>
        <Card style={{border: 'none'}}>
            <Button className="all-moves-and-classes-btn" variant="link">All Moves</Button>
        </Card>
        <Card style={{border: 'none'}}>
          <Button className="all-moves-and-classes-btn" variant="link">Classes</Button>
        </Card>
      </CardGroup>
  )}

  export default SingleMoveNav;