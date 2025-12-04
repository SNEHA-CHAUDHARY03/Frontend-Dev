# 🔍 Component & Service Documentation

## Table of Contents
1. [App.jsx](#appjsx) - Main Application
2. [StudentList.jsx](#studentlistjsx) - List View
3. [StudentForm.jsx](#studentformjsx) - Add/Edit Form
4. [StudentDetails.jsx](#studentdetailsjsx) - Details View
5. [studentService.js](#studentservicejs) - API Service

---

## App.jsx

**Location**: `src/App.jsx`
**Lines**: 110
**Purpose**: Main application component managing state and view switching

### State Variables

```javascript
const [students, setStudents] = useState([])           // All students
const [currentView, setCurrentView] = useState('list') // 'list'|'form'|'details'
const [isEditing, setIsEditing] = useState(false)      // True if editing
const [editingStudent, setEditingStudent] = useState(null) // Student being edited
const [selectedStudentId, setSelectedStudentId] = useState(null) // For details view
const [isLoading, setIsLoading] = useState(false)      // API loading state
```

### Key Functions

#### handleLoadStudents()
- Fetches all students from JSON Server
- Updates students state
- Sets view to 'list'
- Includes error handling with alert

```javascript
const handleLoadStudents = async () => {
  setIsLoading(true);
  try {
    const response = await fetch('http://localhost:5000/students');
    const data = await response.json();
    setStudents(data);
  } catch (error) {
    alert('Error loading students...');
  }
}
```

#### handleAddClick()
- Clears editing state
- Sets view to 'form'

#### handleEditClick(student)
- Sets editing student data
- Enables edit mode
- Shows form view

#### handleViewClick(studentId)
- Sets selected student ID
- Shows details view

#### handleFormSubmit()
- Called after form submission
- Returns to list view
- Reloads students automatically

### Component Structure

```
<App>
  ├── <StudentList /> (if view === 'list')
  ├── <StudentForm /> (if view === 'form')
  └── <StudentDetails /> (if view === 'details')
</App>
```

### Props Passed to Children

**StudentList**
```javascript
{
  students,           // Array of students
  onAddClick,        // Add button handler
  onEditClick,       // Edit button handler
  onViewClick,       // View button handler
  onDeleteClick,     // Delete handler
  onLoadClick,       // Load button handler
  isLoading          // Loading state
}
```

**StudentForm**
```javascript
{
  isEditing,         // Is in edit mode
  editingStudent,    // Student data to edit
  onFormSubmit,      // Form submission handler
  onCancel           // Cancel button handler
}
```

**StudentDetails**
```javascript
{
  studentId,         // ID of student to display
  onBack             // Back button handler
}
```

---

## StudentList.jsx

**Location**: `src/components/StudentList.jsx`
**Lines**: 195
**Purpose**: Display students in table with action buttons

### Props

```javascript
{
  students: Array,           // List of students
  onAddClick: Function,      // Add student handler
  onEditClick: Function,     // Edit handler
  onViewClick: Function,     // View details handler
  onDeleteClick: Function,   // Delete handler
  onLoadClick: Function,     // Load students handler
  isLoading: Boolean         // Loading state
}
```

### Features

1. **Header Section**
   - Title: "Student Results"
   - Action buttons: "Load Students" and "+ Add Student"

2. **Table Display**
   - Columns: ID, Name, Section, Marks, Grade
   - Responsive table with horizontal scroll on mobile
   - Grade badges with color coding

3. **Action Buttons per Row**
   - View: See detailed information
   - Edit: Modify student data
   - Delete: Remove student (with confirmation)

4. **Empty State**
   - Shows message if no students loaded
   - Prompts to click "Load Students"

### Grade Badge Colors

```javascript
.grade-a-plus { background: #27ae60; }  // Green
.grade-a { background: #2ecc71; }       // Light Green
.grade-b-plus { background: #3498db; }  // Blue
.grade-b { background: #9b59b6; }       // Purple
.grade-b- { background: #f39c12; }      // Orange
.grade-c { background: #e74c3c; }       // Red
.grade-d { background: #c0392b; }       // Dark Red
.grade-f { background: #7f8c8d; }       // Gray
```

### Key Function: handleDelete()

```javascript
const handleDelete = async (id) => {
  if (window.confirm('Are you sure?')) {
    try {
      await deleteStudent(id);
      alert('Student deleted!');
      onDeleteClick();  // Parent refreshes list
    } catch (error) {
      alert('Failed to delete');
    }
  }
}
```

### Responsive Behavior

| Screen Size | Changes |
|-------------|---------|
| < 480px | Font reduced, buttons stack vertically |
| 480-768px | Table text smaller, buttons in rows |
| > 768px | Full layout, buttons inline |

---

## StudentForm.jsx

**Location**: `src/components/StudentForm.jsx`
**Lines**: 175
**Purpose**: Form for adding and editing students

### Props

```javascript
{
  isEditing: Boolean,              // Edit or Add mode
  editingStudent: Object|null,     // Student data to edit
  onFormSubmit: Function,          // On successful submit
  onCancel: Function               // On cancel
}
```

### Form State

```javascript
const [formData, setFormData] = useState({
  name: '',
  section: '',
  marks: '',
  grade: ''
})
const [error, setError] = useState('')
```

### Input Fields

1. **Name** (text input)
   - Required field
   - Validation: Must not be empty

2. **Section** (select dropdown)
   - Options: A, B, C, D
   - Required field
   - Validation: Must select one

3. **Marks** (number input)
   - Range: 0-100
   - Required field
   - Validation: Must be 0-100

4. **Grade** (read-only text)
   - Auto-calculated from marks
   - Cannot be edited manually
   - Updated on marks change

### Grade Calculation Logic

```javascript
const calculateGrade = (marks) => {
  const num = parseFloat(marks);
  if (num >= 90) return 'A+';
  if (num >= 85) return 'A';
  if (num >= 80) return 'B+';
  if (num >= 75) return 'B';
  if (num >= 70) return 'B-';
  if (num >= 60) return 'C';
  if (num >= 50) return 'D';
  return 'F';
}
```

### Validation Rules

```javascript
const validateForm = () => {
  // Name required
  if (!formData.name.trim()) {
    setError('Name is required');
    return false;
  }
  
  // Section required
  if (!formData.section.trim()) {
    setError('Section is required');
    return false;
  }
  
  // Marks 0-100
  if (!formData.marks || formData.marks < 0 || formData.marks > 100) {
    setError('Marks must be between 0 and 100');
    return false;
  }
  
  // Grade required
  if (!formData.grade.trim()) {
    setError('Grade is required');
    return false;
  }
  
  return true;
}
```

### Key Functions

#### handleChange(e)
- Updates formData state
- Auto-calculates grade when marks change
- Trims and validates input

#### handleSubmit(e)
- Prevents default form behavior
- Validates form
- Calls API (add or update)
- Shows alert
- Resets form
- Calls onFormSubmit()

### Form Modes

**Add Mode** (`isEditing = false`)
- Empty form
- Title: "Add New Student"
- Button: "Add Student"

**Edit Mode** (`isEditing = true`)
- Pre-filled with student data
- Title: "Edit Student"
- Button: "Update Student"

### Error Handling

- Displays error messages above form
- Error cleared on successful submit
- Form won't submit if validation fails

---

## StudentDetails.jsx

**Location**: `src/components/StudentDetails.jsx`
**Lines**: 180
**Purpose**: Display detailed information about a student

### Props

```javascript
{
  studentId: Number,    // ID of student to display
  onBack: Function      // Back button handler
}
```

### State

```javascript
const [student, setStudent] = useState(null)      // Student data
const [loading, setLoading] = useState(true)      // Loading state
const [error, setError] = useState('')            // Error message
```

### useEffect Hook

Fetches student data when studentId changes:

```javascript
useEffect(() => {
  const fetchStudent = async () => {
    setLoading(true);
    try {
      const data = await getStudentById(studentId);
      setStudent(data);
    } catch (err) {
      setError('Failed to load student details');
    } finally {
      setLoading(false);
    }
  };
  
  if (studentId) {
    fetchStudent();
  }
}, [studentId])
```

### Display Sections

1. **Back Button**
   - Returns to list view
   - Top of page

2. **Student Header**
   - Student name
   - Grade circle (color-coded)
   - Grade letter in center

3. **Detail Rows**
   ```
   Student ID:  1
   Name:        Priya Singh
   Section:     B
   Marks:       92
   Grade:       A+
   ```

4. **Performance Bar**
   - Visual progress bar
   - Width = marks percentage
   - Color = grade color
   - Shows marks percentage

5. **Grade Scale Reference**
   - A+: 90-100
   - A:  85-89
   - B+: 80-84
   - ... (all 8 grades)

### Grade Color Function

```javascript
const getGradeColor = (grade) => {
  switch (grade.toUpperCase()) {
    case 'A+': return '#27ae60';  // Green
    case 'A':  return '#2ecc71';  // Light Green
    case 'B+': return '#3498db';  // Blue
    case 'B':  return '#9b59b6';  // Purple
    case 'B-': return '#f39c12';  // Orange
    case 'C':  return '#e74c3c';  // Red
    case 'D':  return '#c0392b';  // Dark Red
    case 'F':  return '#7f8c8d';  // Gray
    default:   return '#95a5a6';
  }
}
```

### States Handled

1. **Loading State**
   - Shows "Loading student details..."
   - While fetching data

2. **Error State**
   - Shows error message
   - Back button to return to list

3. **Not Found**
   - Shows "Student not found"
   - Back button available

4. **Success State**
   - Displays all information
   - Grade circle highlighted
   - Performance bar animated

---

## studentService.js

**Location**: `src/services/studentService.js`
**Lines**: 80
**Purpose**: Handle all API communication with JSON Server

### Configuration

```javascript
const API_BASE_URL = 'http://localhost:5000/students';
```

### Functions

#### 1. getAllStudents()

**Method**: GET
**Endpoint**: `/students`

```javascript
export const getAllStudents = async () => {
  const response = await fetch(API_BASE_URL);
  const data = await response.json();
  return data;  // Returns array of students
}
```

**Usage**:
```javascript
const students = await getAllStudents();
```

---

#### 2. getStudentById(id)

**Method**: GET
**Endpoint**: `/students/:id`

```javascript
export const getStudentById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/${id}`);
  const data = await response.json();
  return data;  // Returns single student object
}
```

**Usage**:
```javascript
const student = await getStudentById(1);
```

---

#### 3. addStudent(student)

**Method**: POST
**Endpoint**: `/students`

```javascript
export const addStudent = async (student) => {
  const response = await fetch(API_BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(student)
  });
  const data = await response.json();
  return data;  // Returns created student with ID
}
```

**Usage**:
```javascript
await addStudent({
  name: 'Vikram',
  section: 'A',
  marks: 95,
  grade: 'A+'
});
```

---

#### 4. updateStudent(id, student)

**Method**: PUT
**Endpoint**: `/students/:id`

```javascript
export const updateStudent = async (id, student) => {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(student)
  });
  const data = await response.json();
  return data;  // Returns updated student
}
```

**Usage**:
```javascript
await updateStudent(1, {
  name: 'Priya Singh',
  section: 'A',
  marks: 95,
  grade: 'A+'
});
```

---

#### 5. deleteStudent(id)

**Method**: DELETE
**Endpoint**: `/students/:id`

```javascript
export const deleteStudent = async (id) => {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  });
  return response.ok;  // Returns true if successful
}
```

**Usage**:
```javascript
await deleteStudent(1);
```

---

### Error Handling

All functions include try-catch:

```javascript
try {
  const response = await fetch(...);
  if (!response.ok) {
    throw new Error('Failed to fetch');
  }
  const data = await response.json();
  return data;
} catch (error) {
  console.error('Error:', error);
  throw error;  // Re-throw for caller to handle
}
```

---

### Response Format

**Add/Update Response** (with server-generated ID):
```json
{
  "id": 6,
  "name": "Vikram",
  "section": "A",
  "marks": 95,
  "grade": "A+"
}
```

**Get Response** (array or single object):
```json
{
  "id": 1,
  "name": "Aarav Kumar",
  "section": "A",
  "marks": 85,
  "grade": "A"
}
```

---

## Data Flow Diagram

```
App.jsx
  ├── useState (students, views, etc.)
  │
  ├─→ StudentList.jsx
  │   ├─→ Load button
  │   │   └─→ handleLoadStudents()
  │   │       └─→ getAllStudents() ←→ JSON Server
  │   │
  │   ├─→ Add button
  │   │   └─→ onAddClick()
  │   │
  │   ├─→ Edit button
  │   │   └─→ onEditClick()
  │   │
  │   ├─→ View button
  │   │   └─→ onViewClick()
  │   │
  │   └─→ Delete button
  │       └─→ handleDelete()
  │           └─→ deleteStudent() ←→ JSON Server
  │
  ├─→ StudentForm.jsx
  │   ├─→ handleChange()
  │   │   └─→ calculateGrade()
  │   │
  │   └─→ handleSubmit()
  │       ├─→ addStudent() ←→ JSON Server
  │       └─→ updateStudent() ←→ JSON Server
  │
  └─→ StudentDetails.jsx
      └─→ useEffect()
          └─→ getStudentById() ←→ JSON Server
```

---

## Common Patterns Used

### 1. Async/Await Pattern

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await addStudent(formData);
    alert('Success!');
  } catch (error) {
    alert('Error!');
  }
}
```

### 2. Conditional Rendering

```javascript
{isEditing ? (
  <input value={editingStudent.name} ... />
) : (
  <input value="" ... />
)}
```

### 3. Event Handler Pattern

```javascript
const handleClick = () => {
  // Do something
  setView('list');
}

<button onClick={handleClick}>Click</button>
```

### 4. State Lifting

```javascript
// Parent (App.jsx) manages state
const [students, setStudents] = useState([]);

// Pass to child as prop
<StudentList students={students} />

// Call parent's function from child
<button onClick={onLoadClick}>Load</button>
```

---

## Tips for Extension

### Adding Search
```javascript
const [searchTerm, setSearchTerm] = useState('');
const filtered = students.filter(s => 
  s.name.toLowerCase().includes(searchTerm.toLowerCase())
);
```

### Adding Sort
```javascript
const sortedStudents = [...students].sort((a, b) => 
  b.marks - a.marks
);
```

### Adding Pagination
```javascript
const itemsPerPage = 5;
const page = 1;
const start = (page - 1) * itemsPerPage;
const paginated = students.slice(start, start + itemsPerPage);
```

---

**All components work together seamlessly to create a complete CRUD application!** ✨

