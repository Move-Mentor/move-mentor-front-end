import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";

function Accord() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Add Move to Class</Accordion.Header>
        <Accordion.Body>
          <Form>
            {["checkbox"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Monday Intro"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="Tuesday Mixed"
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}
          </Form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Accord;
