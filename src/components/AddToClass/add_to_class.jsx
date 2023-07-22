import React, { useState } from 'react';
import '../../pages/SingleMove/singleMove.css';
import Button from 'react-bootstrap/Button';

const AddToClass = () => {
  // Assume you have a state to determine the user's role
  const [userRole] = useState('teacher');

  return (
    <div>
      {userRole === 'student' && (
        // Render this button when the user is a teacher
        <Button data-testid="addButton" className="btn-add-to-class">Add Move to Class</Button>
      )}
    </div>
  );
};

export default AddToClass;