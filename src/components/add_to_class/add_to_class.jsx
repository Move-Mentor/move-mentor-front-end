// import React, { useState } from 'react';
import '../../pages/singleMove.css';
import Button from 'react-bootstrap/Button';

function AddToClass() {
  return (
    <Button className="btn-add-to-class">Add Move to Class</Button>
  )}

  export default AddToClass;


//Waiting for user roles to be set in the database
// const AddToClass = () => {
//   // Assume you have a state to determine the user's role
//   const [userRole, setUserRole] = useState('student'); // 'teacher' or 'student'

//   return (
//     <div>
//       {userRole === 'teacher' && (
//         // Render this button when the user is a teacher
//         <button className="btn-add-to-class">Add Move to Class</button>
//       )}
//     </div>
//   );
// };

// export default AddToClass;
