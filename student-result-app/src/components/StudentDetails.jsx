import React, { useState, useEffect } from 'react';
import { getStudentById } from '../services/studentService';

const StudentDetails = ({ studentId, onBack }) => {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        setLoading(true);
        const data = await getStudentById(studentId);
        setStudent(data);
        setError('');
      } catch (err) {
        setError('Failed to load student details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (studentId) {
      fetchStudent();
    }
  }, [studentId]);

  // Get grade color based on grade
  const getGradeColor = (grade) => {
    switch (grade.toUpperCase()) {
      case 'A+':
        return '#27ae60';
      case 'A':
        return '#2ecc71';
      case 'B+':
        return '#3498db';
      case 'B':
        return '#9b59b6';
      case 'B-':
        return '#f39c12';
      case 'C':
        return '#e74c3c';
      case 'D':
        return '#c0392b';
      case 'F':
        return '#7f8c8d';
      default:
        return '#95a5a6';
    }
  };

  if (loading) {
    return (
      <div className="details-container">
        <div className="loading">Loading student details...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="details-container">
        <div className="error-message">{error}</div>
        <button className="btn btn-secondary" onClick={onBack}>
          Back to List
        </button>
      </div>
    );
  }

  if (!student) {
    return (
      <div className="details-container">
        <div className="error-message">Student not found</div>
        <button className="btn btn-secondary" onClick={onBack}>
          Back to List
        </button>
      </div>
    );
  }

  return (
    <div className="details-container">
      <button className="btn btn-secondary back-btn" onClick={onBack}>
        ← Back to List
      </button>

      <div className="details-card">
        <div className="details-header">
          <h2>{student.name}</h2>
          <div
            className="grade-circle"
            style={{ backgroundColor: getGradeColor(student.grade) }}
          >
            <span className="grade-text">{student.grade}</span>
          </div>
        </div>

        <div className="details-content">
          <div className="detail-row">
            <label>Student ID:</label>
            <value>{student.id}</value>
          </div>

          <div className="detail-row">
            <label>Name:</label>
            <value>{student.name}</value>
          </div>

          <div className="detail-row">
            <label>Section:</label>
            <value>{student.section}</value>
          </div>

          <div className="detail-row">
            <label>Marks:</label>
            <value>{student.marks}</value>
          </div>

          <div className="detail-row">
            <label>Grade:</label>
            <value>{student.grade}</value>
          </div>

          <div className="performance-bar">
            <label>Performance:</label>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${student.marks}%`,
                  backgroundColor: getGradeColor(student.grade),
                }}
              ></div>
            </div>
            <span className="progress-text">{student.marks}%</span>
          </div>

          <div className="grade-info">
            <h3>Grade Information</h3>
            <ul>
              <li>
                <strong>A+:</strong> 90-100
              </li>
              <li>
                <strong>A:</strong> 85-89
              </li>
              <li>
                <strong>B+:</strong> 80-84
              </li>
              <li>
                <strong>B:</strong> 75-79
              </li>
              <li>
                <strong>B-:</strong> 70-74
              </li>
              <li>
                <strong>C:</strong> 60-69
              </li>
              <li>
                <strong>D:</strong> 50-59
              </li>
              <li>
                <strong>F:</strong> Below 50
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
