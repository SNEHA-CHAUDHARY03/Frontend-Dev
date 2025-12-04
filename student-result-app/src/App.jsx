import React, { useState } from 'react';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentDetails from './components/StudentDetails';
import './App.css';

function App() {
  // State management
  const [students, setStudents] = useState([]);
  const [currentView, setCurrentView] = useState('list'); // 'list', 'form', 'details'
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Load all students from JSON Server
  const handleLoadStudents = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:5000/students');
      if (!response.ok) {
        throw new Error('Failed to fetch students');
      }
      const data = await response.json();
      setStudents(data);
      setCurrentView('list');
    } catch (error) {
      alert('Error loading students. Make sure JSON Server is running on port 5000');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Add Student button
  const handleAddClick = () => {
    setIsEditing(false);
    setEditingStudent(null);
    setCurrentView('form');
  };

  // Handle Edit Student button
  const handleEditClick = (student) => {
    setIsEditing(true);
    setEditingStudent(student);
    setCurrentView('form');
  };

  // Handle View Details button
  const handleViewClick = (studentId) => {
    setSelectedStudentId(studentId);
    setCurrentView('details');
  };

  // Handle form submission (Add or Edit)
  const handleFormSubmit = () => {
    setCurrentView('list');
    handleLoadStudents(); // Reload the list
  };

  // Handle Delete (refresh the list)
  const handleDeleteClick = () => {
    handleLoadStudents(); // Reload the list
  };

  // Handle Cancel form
  const handleCancel = () => {
    setCurrentView('list');
    setIsEditing(false);
    setEditingStudent(null);
  };

  // Handle Back from Details
  const handleBackFromDetails = () => {
    setCurrentView('list');
    setSelectedStudentId(null);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>📚 Student Result Management System</h1>
        <p>Manage student data with add, view, edit, and delete operations</p>
      </header>

      <main className="app-main">
        {currentView === 'list' && (
          <StudentList
            students={students}
            onAddClick={handleAddClick}
            onEditClick={handleEditClick}
            onViewClick={handleViewClick}
            onDeleteClick={handleDeleteClick}
            onLoadClick={handleLoadStudents}
            isLoading={isLoading}
          />
        )}

        {currentView === 'form' && (
          <StudentForm
            isEditing={isEditing}
            editingStudent={editingStudent}
            onFormSubmit={handleFormSubmit}
            onCancel={handleCancel}
          />
        )}

        {currentView === 'details' && (
          <StudentDetails
            studentId={selectedStudentId}
            onBack={handleBackFromDetails}
          />
        )}
      </main>

      <footer className="app-footer">
        <p>
          Student Result Management App | Built with React + JSON Server |{' '}
          <span id="current-time"></span>
        </p>
      </footer>
    </div>
  );
}

export default App;
