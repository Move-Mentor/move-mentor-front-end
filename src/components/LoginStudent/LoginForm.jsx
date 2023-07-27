import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function LoginForm() {
  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email:
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Your Email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Password:
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="password" placeholder="Your Password" />
        </Col>
      </Form.Group>
      
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
        <Col sm={{ span: 10, offset: 2 }}>
          <Form.Check label="Remember me" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit" style={{backgroundColor: '#F3B89C', border: 'none', color: '#000000', marginRight: '20px'}}>Login</Button>
          <Button type="submit" style={{backgroundColor: '#F1DAAE', border: 'none', color: '#000000', marginRight: '20px'}}>Back to Sign Up</Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default LoginForm;