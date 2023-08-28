// AttendanceList.js
import React from 'react';
import StudentCard from './StudentCard';
import './App.css';

const AttendanceList = ({ students, markAttendance }) => {
  return (
    <div className="attendance-list">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          onMarkAttendance={(studentId) => markAttendance(studentId)}
        />
      ))}
    </div>
  );
};

export default AttendanceList;
