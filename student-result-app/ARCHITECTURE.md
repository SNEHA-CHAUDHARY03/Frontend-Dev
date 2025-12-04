# 🏗️ Application Architecture

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    BROWSER (React App)                       │
│                   Port 3000 (Localhost)                      │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                   App.jsx (Main)                      │  │
│  │  • State Management (useState)                        │  │
│  │  • View Switching (list/form/details)                │  │
│  │  • Student Data Management                           │  │
│  └────────┬──────────────────────┬──────────────┬────────┘  │
│           │                      │              │            │
│    ┌──────▼────────┐     ┌───────▼────────┐   │            │
│    │  StudentList  │     │  StudentForm   │   │            │
│    │  Components   │     │  Components    │   │            │
│    ├───────────────┤     ├────────────────┤   │            │
│    │ • Table View  │     │ • Add Form     │   │            │
│    │ • Action Btns │     │ • Edit Form    │   │            │
│    │ • Load/Add    │     │ • Validation   │   │            │
│    │ • Edit/Delete │     │ • Auto-Grade   │   │            │
│    │ • View Details│     └────────────────┘   │            │
│    └───────────────┘                          │            │
│                                    ┌──────────▼────────────┐│
│                                    │ StudentDetails        ││
│                                    │ Components            ││
│                                    ├───────────────────────┤│
│                                    │ • View Details        ││
│                                    │ • Performance Bar     ││
│                                    │ • Grade Circle        ││
│                                    │ • Grade Legend        ││
│                                    └───────────────────────┘│
│                                                               │
│  ┌───────────────────────────────────────────────────────┐  │
│  │           studentService.js (API Layer)               │  │
│  │                                                       │  │
│  │  • getAllStudents()      → GET /students              │  │
│  │  • getStudentById(id)    → GET /students/:id          │  │
│  │  • addStudent(data)      → POST /students             │  │
│  │  • updateStudent(id, data) → PUT /students/:id        │  │
│  │  • deleteStudent(id)     → DELETE /students/:id       │  │
│  │                                                       │  │
│  │  (Fetch API - All CRUD Operations)                   │  │
│  └───────────────────┬───────────────────────────────────┘  │
│                      │                                       │
└──────────────────────┼───────────────────────────────────────┘
                       │ HTTP Requests
                       │ JSON Format
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│                    JSON Server (Backend)                     │
│                   Port 5000 (Localhost)                      │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                    db.json                            │  │
│  │                                                       │  │
│  │  {                                                    │  │
│  │    "students": [                                      │  │
│  │      {                                                │  │
│  │        "id": 1,                                       │  │
│  │        "name": "Aarav Kumar",                         │  │
│  │        "section": "A",                               │  │
│  │        "marks": 85,                                  │  │
│  │        "grade": "A"                                  │  │
│  │      },                                              │  │
│  │      ...                                             │  │
│  │    ]                                                 │  │
│  │  }                                                   │  │
│  │                                                       │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                               │
│  Persistent Data Storage (File-based JSON)                   │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

## Component Hierarchy

```
App
├── Header
│   └── Title & Description
│
├── Main Content (Conditional Rendering)
│   │
│   ├── View: 'list'
│   │   └── StudentList
│   │       ├── List Header
│   │       │   ├── Title
│   │       │   └── Action Buttons
│   │       │       ├── Load Students
│   │       │       └── Add Student
│   │       │
│   │       └── Students Table
│   │           ├── Table Header
│   │           └── Table Rows (Students)
│   │               ├── Student ID
│   │               ├── Name
│   │               ├── Section
│   │               ├── Marks
│   │               ├── Grade Badge
│   │               └── Action Buttons
│   │                   ├── View
│   │                   ├── Edit
│   │                   └── Delete
│   │
│   ├── View: 'form'
│   │   └── StudentForm
│   │       ├── Form Title
│   │       ├── Form Fields
│   │       │   ├── Name Input
│   │       │   ├── Section Select
│   │       │   ├── Marks Number
│   │       │   └── Grade Display (Read-only)
│   │       │
│   │       ├── Error Message (if any)
│   │       └── Form Buttons
│   │           ├── Submit (Add/Update)
│   │           └── Cancel
│   │
│   └── View: 'details'
│       └── StudentDetails
│           ├── Back Button
│           │
│           ├── Header Section
│           │   ├── Student Name
│           │   └── Grade Circle
│           │
│           ├── Details Card
│           │   ├── Student ID
│           │   ├── Name
│           │   ├── Section
│           │   ├── Marks
│           │   └── Grade
│           │
│           ├── Performance Section
│           │   ├── Progress Bar
│           │   └── Percentage
│           │
│           └── Grade Scale Reference
│               └── Legend (A+, A, B+, ... F)
│
└── Footer
    └── Copyright & Info
```

---

## Data Flow Diagram

```
┌─────────────────────┐
│  User Interaction   │
│  (Button Clicks)    │
└──────────┬──────────┘
           │
           ▼
┌──────────────────────────┐
│  Event Handlers in       │
│  App.jsx                 │
│                          │
│  • handleLoadStudents()  │
│  • handleAddClick()      │
│  • handleEditClick()     │
│  • handleViewClick()     │
│  • handleDeleteClick()   │
└──────────┬───────────────┘
           │
           ▼
┌──────────────────────────┐
│  Update React State      │
│  • setStudents()         │
│  • setCurrentView()      │
│  • setEditingStudent()   │
└──────────┬───────────────┘
           │
           ├─────────────────────┐
           │                     │
           ▼                     ▼
┌──────────────────────┐  ┌──────────────────┐
│ API Call via         │  │ Component        │
│ studentService.js    │  │ Re-renders       │
│                      │  │ (with new state) │
│ • GET /students      │  │                  │
│ • POST /students     │  │ • StudentList    │
│ • PUT /students/:id  │  │ • StudentForm    │
│ • DELETE /students   │  │ • StudentDetails │
└────────┬─────────────┘  └──────────────────┘
         │
         ▼
┌──────────────────────────────────────┐
│  JSON Server Response                │
│  (db.json is updated)                │
└──────────────────────────────────────┘
```

---

## State Management Flow

```
Global State (App.jsx)
│
├── students: Array[]
│   └── Used by: StudentList, Details
│
├── currentView: 'list' | 'form' | 'details'
│   └── Controls which component to show
│
├── isEditing: Boolean
│   └── True if editing existing student
│
├── editingStudent: Object | null
│   └── Student data being edited
│
├── selectedStudentId: Number | null
│   └── Student ID for details view
│
└── isLoading: Boolean
    └── API request in progress

                    ▼
        (Passed as props to children)
                    ▼
        Components re-render with data
```

---

## API Call Sequence

### Load Students
```
1. User clicks "Load Students"
                    ▼
2. handleLoadStudents() triggered
                    ▼
3. Call getAllStudents()
                    ▼
4. GET http://localhost:5000/students
                    ▼
5. JSON Server returns array of students
                    ▼
6. setStudents(data)
                    ▼
7. App re-renders with new data
                    ▼
8. StudentList displays all students
```

### Add Student
```
1. User clicks "+ Add Student"
                    ▼
2. handleAddClick() → Switch to form view
                    ▼
3. User fills form and clicks "Add"
                    ▼
4. handleSubmit() in StudentForm
                    ▼
5. validateForm()
                    ▼
6. Call addStudent(formData)
                    ▼
7. POST http://localhost:5000/students
                    ▼
8. JSON Server creates new student (auto ID)
                    ▼
9. Return new student with ID
                    ▼
10. Show success alert
                    ▼
11. handleFormSubmit()
                    ▼
12. Return to list and reload students
```

### Update Student
```
1. User clicks "Edit" button
                    ▼
2. handleEditClick(student) → Form with data
                    ▼
3. User modifies and clicks "Update"
                    ▼
4. handleSubmit() in StudentForm
                    ▼
5. validateForm()
                    ▼
6. Call updateStudent(id, formData)
                    ▼
7. PUT http://localhost:5000/students/:id
                    ▼
8. JSON Server updates student record
                    ▼
9. Return updated student
                    ▼
10. Show success alert
                    ▼
11. handleFormSubmit()
                    ▼
12. Return to list and reload
```

### Delete Student
```
1. User clicks "Delete" button
                    ▼
2. window.confirm() dialog appears
                    ▼
3. If confirmed, call deleteStudent(id)
                    ▼
4. DELETE http://localhost:5000/students/:id
                    ▼
5. JSON Server removes student
                    ▼
6. Return response.ok = true
                    ▼
7. Show success alert
                    ▼
8. handleDeleteClick()
                    ▼
9. Reload students from server
```

### View Details
```
1. User clicks "View" button
                    ▼
2. handleViewClick(studentId)
                    ▼
3. setSelectedStudentId(studentId)
                    ▼
4. Switch to details view
                    ▼
5. StudentDetails component mounts
                    ▼
6. useEffect hook triggers
                    ▼
7. Call getStudentById(id)
                    ▼
8. GET http://localhost:5000/students/:id
                    ▼
9. JSON Server returns single student
                    ▼
10. setStudent(data)
                    ▼
11. Component re-renders with details
                    ▼
12. Display all information with styling
```

---

## File Organization

```
student-result-app/
│
├── 📄 Configuration Files
│   ├── package.json ................... Dependencies
│   ├── vite.config.js ................ Build config
│   └── .gitignore .................... Git ignore
│
├── 📄 Documentation Files
│   ├── README.md ..................... Full docs
│   ├── SETUP.md ...................... Setup guide
│   ├── PROJECT_SUMMARY.md ............ Overview
│   ├── COMPONENTS.md ................. Code docs
│   ├── QUICK_REFERENCE.md ............ Quick ref
│   └── ARCHITECTURE.md ............... This file
│
├── 📁 src/
│   ├── 📄 App.jsx ................... Main component
│   ├── 📄 App.css ................... Global styles
│   ├── 📄 index.jsx ................. Entry point
│   │
│   ├── 📁 components/
│   │   ├── StudentList.jsx
│   │   ├── StudentForm.jsx
│   │   └── StudentDetails.jsx
│   │
│   └── 📁 services/
│       └── studentService.js
│
├── 📁 public/
│   └── 📄 index.html ............... HTML template
│
└── 📄 db.json ...................... Database file
```

---

## Technology Stack Layers

```
┌─────────────────────────────────┐
│    Presentation Layer           │
│    (UI Components)              │
│  • StudentList.jsx              │
│  • StudentForm.jsx              │
│  • StudentDetails.jsx           │
│  • App.css                      │
└──────────────┬──────────────────┘
               │
┌──────────────▼──────────────────┐
│    State Management Layer       │
│    (App.jsx - useState)         │
│  • students                     │
│  • currentView                  │
│  • isEditing                    │
│  • etc.                         │
└──────────────┬──────────────────┘
               │
┌──────────────▼──────────────────┐
│    API Service Layer            │
│    (studentService.js)          │
│  • getAllStudents()             │
│  • addStudent()                 │
│  • updateStudent()              │
│  • deleteStudent()              │
└──────────────┬──────────────────┘
               │
┌──────────────▼──────────────────┐
│    HTTP Client Layer            │
│    (Fetch API)                  │
│  • GET, POST, PUT, DELETE       │
└──────────────┬──────────────────┘
               │
┌──────────────▼──────────────────┐
│    Backend Layer                │
│    (JSON Server)                │
│  • db.json                      │
│  • REST API endpoints           │
└─────────────────────────────────┘
```

---

## Browser Network Activity

### Typical Session

```
1. User loads app (http://localhost:3000)
   └─ Browser loads index.html
   └─ Browser loads React bundle (via Vite)
   └─ React mounts App component

2. User clicks "Load Students"
   ├─ Browser sends GET http://localhost:5000/students
   └─ JSON Server returns array of 5 students

3. User clicks "View Details"
   ├─ Browser sends GET http://localhost:5000/students/1
   └─ JSON Server returns single student

4. User clicks "+ Add Student"
   └─ Form appears (no network call)

5. User fills form and clicks "Add"
   ├─ Browser sends POST http://localhost:5000/students
   │  Body: { name, section, marks, grade }
   └─ JSON Server returns new student with ID

6. User clicks "Edit"
   └─ Form appears with data (no network call)

7. User modifies and clicks "Update"
   ├─ Browser sends PUT http://localhost:5000/students/1
   │  Body: { updated data }
   └─ JSON Server returns updated student

8. User clicks "Delete"
   ├─ Browser sends DELETE http://localhost:5000/students/1
   └─ JSON Server confirms deletion

9. User clicks "Load Students"
   ├─ Browser sends GET http://localhost:5000/students
   └─ JSON Server returns updated list
```

---

## Performance Considerations

```
Frontend:
├─ React component re-renders when state changes
├─ Only changed components re-render (React optimization)
├─ CSS animations are GPU-accelerated
└─ No major performance issues for small datasets

Backend:
├─ JSON Server is synchronous
├─ File-based database (db.json)
├─ Good for development/learning
└─ Not suitable for production

Network:
├─ Localhost requests are very fast (<10ms)
├─ No bandwidth limitations
└─ Perfect for development environment
```

---

## Error Handling Flow

```
User Action
    │
    ▼
API Call
    │
    ├─ Success
    │   ├─ Parse response
    │   ├─ Update state
    │   └─ Show success alert
    │
    └─ Error
        ├─ Catch in try-catch
        ├─ Log to console
        ├─ Display error message
        └─ User can retry
```

---

**This architecture provides a clean, scalable structure for learning React and CRUD operations!** ✨

