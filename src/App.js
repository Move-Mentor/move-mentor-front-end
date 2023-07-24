import React, { useState } from 'react';
import './App.css';
import MainLayout from './components/MainLayout/Layout';
import SingleMovePage from './pages/SingleMove/SingleMovePage';

const App = () => {
  // Assume you have a state to determine the user's role
  const [userRole] = useState('student'); // Set the initial state value to the user's role (e.g., 'teacher' or 'student')

  return (
    <div>
      <MainLayout>
        <SingleMovePage userRole={userRole} />
      </MainLayout>
    </div>
  );
};

export default App;

