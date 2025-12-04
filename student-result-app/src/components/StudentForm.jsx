import React, { useState, useEffect } from 'react';
import { addStudent, updateStudent } from '../services/studentService';

const StudentForm = ({ isEditing, editingStudent, onFormSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    section: '',
    marks: '',
    grade: '',
  });

  const [error, setError] = useState('');

  // Pre-fill form when editing
  useEffect(() => {
    if (isEditing && editingStudent) {
      setFormData(editingStudent);
      setError('');
    } else {
      setFormData({
        name: '',
        section: '',
        marks: '',
        grade: '',
      });
    }
  }, [isEditing, editingStudent]);

  // Calculate grade based on marks
  const calculateGrade = (marks) => {
    const numMarks = parseFloat(marks);
    if (numMarks >= 90) return 'A+';
    if (numMarks >= 85) return 'A';
    if (numMarks >= 80) return 'B+';
    if (numMarks >= 75) return 'B';
    if (numMarks >= 70) return 'B-';
    if (numMarks >= 60) return 'C';
    if (numMarks >= 50) return 'D';
    return 'F';
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedData = { ...formData, [name]: value };

    // Auto-calculate grade if marks change
    if (name === 'marks' && value) {
      updatedData.grade = calculateGrade(value);
    }

    setFormData(updatedData);
  };

  // Validate form
  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Name is required');
      return false;
    }
    if (!formData.section.trim()) {
      setError('Section is required');
      return false;
    }
    if (!formData.marks || formData.marks < 0 || formData.marks > 100) {
      setError('Marks must be between 0 and 100');
      return false;
    }
    if (!formData.grade.trim()) {
      setError('Grade is required');
      return false;
    }
    setError('');
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      if (isEditing) {
        // Update existing student
        await updateStudent(editingStudent.id, formData);
        alert('Student updated successfully!');
      } else {
        // Add new student
        await addStudent(formData);
        alert('Student added successfully!');
      }

      // Reset form
      setFormData({
        name: '',
        section: '',
        marks: '',
        grade: '',
      });

      // Notify parent to refresh
      onFormSubmit();
    } catch (err) {
      setError('Error saving student. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2>{isEditing ? 'Edit Student' : 'Add New Student'}</h2>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter student name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="section">Section *</label>
            <select
              id="section"
              name="section"
              value={formData.section}
              onChange={handleChange}
              required
            >
              <option value="">Select Section</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="marks">Marks (0-100) *</label>
            <input
              type="number"
              id="marks"
              name="marks"
              value={formData.marks}
              onChange={handleChange}
              placeholder="Enter marks"
              min="0"
              max="100"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="grade">Grade *</label>
            <input
              type="text"
              id="grade"
              name="grade"
              value={formData.grade}
              readOnly
              placeholder="Auto-calculated"
            />
            <small>Grade is calculated automatically based on marks</small>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              {isEditing ? 'Update Student' : 'Add Student'}
            </button>
            <button type="button" className="btn btn-secondary" onClick={onCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
