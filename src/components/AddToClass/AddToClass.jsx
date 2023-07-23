import React from 'react';
import './AddToClass.css';
import Button from 'react-bootstrap/Button';

const AddToClass = () => {
  return (
    <Button data-testid="add-to-class-button" className="btn-add-to-class">Add Move to Class</Button>
  );
};

export default AddToClass;
