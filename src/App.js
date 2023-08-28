// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import AttendanceList from './components/AttendanceList';
//import johnImage from './src/images/john.jpg';
//import janeImage from './src/images/jane.jpg';

import './styles.css';

const App = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Smith', photo: './src/images/pho1.jpg', isPresent: true },
    { id: 2, name: 'Jane Stone', photo: './src/images/pho2.jpg', isPresent: true },
    // Add more students
  ]);

  const markAttendance = (studentId) => {
    const updatedStudents = students.map((student) =>
      student.id === studentId ? { ...student, isPresent: true } : student
    );
    setStudents(updatedStudents);
  };

  return (
    <div className="app">
      <Header title="Class Attendance" />
      <AttendanceList students={students} markAttendance={markAttendance} />
    </div>
  );
};

export default App;
