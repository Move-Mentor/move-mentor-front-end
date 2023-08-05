import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import { useLessonContext } from "../../contexts/LessonContext";
import { useToken } from "../../contexts/TokenContext"

function Accord() {
    // Use the useToken hook to access the user's role
  const { role } = useToken();

  // Use the lesson context hook to access the lessons prop
  const { lessons } = useLessonContext();

  // Check if the user is a teacher before rendering the Accord component
  if (role !== 'teacher') {
    return <div>Sorry, this functionality is only available for teachers.</div>;
  }

  return (
    <Accordion>
      <Accordion.Item eventKey="addMove"> {/* Set a common eventKey for all accordion items */}
        <Accordion.Header>Add Move to Class</Accordion.Header>
        <Accordion.Body>
          <Form>
            {lessons.map((lesson) => (
              <div key={lesson._id} className="mb-3">
                <Form.Check
                  inline
                  label={lesson.lessonName}
                  type="checkbox"
                  id={`inline-checkbox-${lesson._id}`}
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
