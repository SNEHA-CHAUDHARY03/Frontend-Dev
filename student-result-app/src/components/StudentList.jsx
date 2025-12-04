import React from 'react';
import { deleteStudent } from '../services/studentService';

const StudentList = ({ students, onAddClick, onEditClick, onViewClick, onDeleteClick, onLoadClick, isLoading }) => {
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        await deleteStudent(id);
        alert('Student deleted successfully!');
        onDeleteClick();
      } catch (error) {
        alert('Failed to delete student');
        console.error(error);
      }
    }
  };

  return (
    <div className="list-container">
      <div className="list-header">
        <h2>Student Results</h2>
        <div className="action-buttons">
          <button
            className="btn btn-primary"
            onClick={onLoadClick}
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Load Students'}
          </button>
          <button className="btn btn-success" onClick={onAddClick}>
            + Add Student
          </button>
        </div>
      </div>

      {students.length === 0 ? (
        <div className="empty-state">
          <p>No students found. Click "Load Students" to fetch data.</p>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="students-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Section</th>
                <th>Marks</th>
                <th>Grade</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="student-row">
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.section}</td>
                  <td>{student.marks}</td>
                  <td>
                    <span className={`grade-badge grade-${student.grade.toLowerCase().replace('+', 'plus')}`}>
                      {student.grade}
                    </span>
                  </td>
                  <td>
                    <div className="action-cell">
                      <button
                        className="btn btn-sm btn-info"
                        onClick={() => onViewClick(student.id)}
                        title="View Details"
                      >
                        View
                      </button>
                      <button
                        className="btn btn-sm btn-warning"
                        onClick={() => onEditClick(student)}
                        title="Edit Student"
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(student.id)}
                        title="Delete Student"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StudentList;
