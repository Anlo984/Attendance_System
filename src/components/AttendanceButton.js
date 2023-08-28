// AttendanceButton.js
import React from 'react';

const AttendanceButton = ({ onClick }) => {
  return <button className="attendance-button" onClick={onClick}>Mark Attendance</button>;
};

export default AttendanceButton;
