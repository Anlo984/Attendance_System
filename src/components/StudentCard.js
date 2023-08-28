// StudentCard.js
import React from 'react';
import './App.css';

const StudentCard = ({ student, onMarkAttendance, image }) => {
  return (
    <div className="student-card">
      <img src={image} alt={`${student.name}'s Photo`} />
      <h3>{student.name}</h3>
      <button onClick={() => onMarkAttendance(student.id)}>Mark Attendance</button>
    </div>
  );
};

export default StudentCard;
