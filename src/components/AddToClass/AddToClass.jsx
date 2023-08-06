import BootstrapAccordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import { useLessonContext } from "../../contexts/LessonContext";
import { useToken } from "../../contexts/TokenContext";

function AddToClassAccordion({ move }) {
  // Use the useToken hook to access the user's role
  const { role } = useToken();

  // Use the lesson context hook to access the lessons prop
  const { toggleMoveInLesson, lessons } = useLessonContext();

  // Check if the user is a teacher before rendering the Accord component
  if (role !== "teacher") {
    return <div>Sorry, this functionality is only available for teachers.</div>;
  }

  function isMoveInLesson(lesson) {
    return lesson.moves.some((moveId) => moveId === move._id);
  }

  function toggleMoveLesson(lesson) {
    toggleMoveInLesson(lesson._id, move._id);
  }

  return (
    <BootstrapAccordion>
      <BootstrapAccordion.Item eventKey="addMove">
        {/* Set a common eventKey for all accordion items */}
        <BootstrapAccordion.Header>Add Move to Class</BootstrapAccordion.Header>
        <BootstrapAccordion.Body>
          <Form>
            {lessons.map((lesson) => (
              <div
                key={lesson._id}
                className="mb-3"
                data-is-in-lesson={isMoveInLesson(lesson)}
              >
                <Form.Check
                  inline
                  value={isMoveInLesson(lesson)}
                  checked={isMoveInLesson(lesson)}
                  label={`${lesson.lessonName} - ${lesson.lessonDay}`}
                  type="checkbox"
                  id={`inline-checkbox-${lesson._id}`}
                  onChange={() => toggleMoveLesson(lesson)}
                />
              </div>
            ))}
          </Form>
        </BootstrapAccordion.Body>
      </BootstrapAccordion.Item>
    </BootstrapAccordion>
  );
}

export default AddToClassAccordion;
