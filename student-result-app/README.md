# Student Result Management System

A React-based CRUD application for managing student data with real-time backend synchronization using JSON Server.

## 📋 Features

### Core CRUD Operations
- **Create (Add)**: Add new students with name, section, marks, and grade
- **Read (View)**: Display all students in a table and view detailed information
- **Update (Edit)**: Modify student information
- **Delete (Remove)**: Remove students from the database

### Key Features
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Auto-calculated grades based on marks
- ✅ Detailed student result view with performance bar
- ✅ JSON Server for persistent data storage
- ✅ Fetch API for all CRUD operations
- ✅ React hooks (useState) for state management
- ✅ Beautiful gradient UI with smooth animations
- ✅ Form validation and error handling

### Extra Features (Bonus)
- 📊 Performance visualization with progress bars
- 🎨 Color-coded grades based on performance
- 📱 Mobile-responsive layout
- ⚡ Loading indicators
- 🔔 User feedback with alerts and messages
- 💾 Automatic state management

## 📁 Project Structure

```
student-result-app/
├── db.json                    # JSON Server database
├── package.json              # Dependencies & scripts
├── vite.config.js            # Vite configuration
│
├── src/
│   ├── components/
│   │   ├── StudentList.jsx    # List view with table
│   │   ├── StudentForm.jsx    # Add/Edit form
│   │   └── StudentDetails.jsx # Detailed view
│   ├── services/
│   │   └── studentService.js  # API calls
│   ├── App.jsx               # Main component & state
│   ├── App.css               # Styling
│   └── index.jsx             # React entry point
│
└── public/
    └── index.html            # HTML template
```

## 🎓 Grade Scale

| Grade | Marks   |
|-------|---------|
| A+    | 90-100  |
| A     | 85-89   |
| B+    | 80-84   |
| B     | 75-79   |
| B-    | 70-74   |
| C     | 60-69   |
| D     | 50-59   |
| F     | Below 50 |

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Navigate to project directory:**
   ```bash
   cd student-result-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start JSON Server (in a separate terminal):**
   ```bash
   npm run server
   ```
   - Runs on `http://localhost:5000`
   - Database file: `db.json`

4. **Start the React development server (in another terminal):**
   ```bash
   npm run dev
   ```
   - Opens at `http://localhost:3000`

## 💡 How to Use

### Loading Students
1. Click the **"Load Students"** button to fetch all students from JSON Server
2. Students will be displayed in a table

### Adding a New Student
1. Click the **"+ Add Student"** button
2. Fill in the form:
   - **Name**: Student's name
   - **Section**: Select A, B, C, or D
   - **Marks**: Enter marks (0-100)
   - **Grade**: Auto-calculated based on marks
3. Click **"Add Student"** to save
4. Click **"Load Students"** to refresh the list

### Editing a Student
1. Click the **"Edit"** button next to a student
2. Modify the information in the form
3. Click **"Update Student"** to save changes
4. Click **"Load Students"** to refresh the list

### Viewing Details
1. Click the **"View"** button next to a student
2. See:
   - Student ID and name
   - Section and marks
   - Grade with color indicator
   - Performance bar chart
   - Grade scale reference

### Deleting a Student
1. Click the **"Delete"** button next to a student
2. Confirm the deletion in the popup dialog
3. Student will be removed from the database
4. Click **"Load Students"** to refresh the list

## 🔧 API Endpoints

All endpoints are managed through `studentService.js`:

| Operation | Method | Endpoint | Function |
|-----------|--------|----------|----------|
| Get All   | GET    | `/students` | getAllStudents() |
| Get One   | GET    | `/students/:id` | getStudentById(id) |
| Create    | POST   | `/students` | addStudent(data) |
| Update    | PUT    | `/students/:id` | updateStudent(id, data) |
| Delete    | DELETE | `/students/:id` | deleteStudent(id) |

## 📦 Dependencies

- **react** (18.2.0): UI framework
- **react-dom** (18.2.0): React rendering
- **vite** (4.3.0): Build tool
- **json-server** (0.17.3): Mock backend

## 🏗️ Component Documentation

### StudentList.jsx
- Displays all students in a table
- Action buttons: Load, Add, Edit, View, Delete
- Grade badges with color coding
- Responsive table design

### StudentForm.jsx
- Used for both adding and editing
- Form validation
- Auto-calculates grade from marks
- Clear error messages
- Cancel button to go back

### StudentDetails.jsx
- Shows complete student information
- Performance progress bar
- Grade circle with color
- Grade scale reference
- Back navigation

### studentService.js
- Centralized API communication
- Fetch API for all HTTP requests
- Error handling and logging
- Base URL: `http://localhost:5000/students`

### App.jsx
- Main state management with useState
- View switching: list, form, details
- Loading indicators
- Form submission handlers
- Delete confirmation

## 🎨 Styling Features

- **Gradient header**: Purple gradient background
- **Responsive cards**: Adapts to all screen sizes
- **Hover effects**: Interactive button and row hover
- **Color-coded grades**: Visual performance indicators
- **Animations**: Smooth transitions and slide-ins
- **Mobile-first**: Optimized for all devices

## ⚙️ Available Scripts

```bash
# Start dev server (Vite)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Start JSON Server
npm run server
```

## 📝 Sample Data

The `db.json` includes 5 sample students:

1. **Aarav Kumar** - Section A, 85 marks, Grade A
2. **Priya Singh** - Section B, 92 marks, Grade A+
3. **Rohit Sharma** - Section A, 78 marks, Grade B
4. **Neha Verma** - Section C, 88 marks, Grade A
5. **Arjun Patel** - Section B, 71 marks, Grade B-

## 🐛 Troubleshooting

### JSON Server not connecting
- Ensure JSON Server is running: `npm run server`
- Check if port 5000 is available
- Verify db.json exists in project root

### React app not starting
- Clear node_modules: `rm -r node_modules` (or `rmdir /s node_modules` on Windows)
- Reinstall: `npm install`
- Check if port 3000 is available

### CORS errors
- JSON Server is already configured to accept requests from localhost:3000
- No additional CORS setup needed

### Grades not calculating
- Ensure marks are entered as numbers 0-100
- Grade field is read-only and auto-filled

## 🎓 Learning Outcomes

By completing this project, you'll learn:
- ✅ React component creation and composition
- ✅ useState hook for state management
- ✅ Conditional rendering based on views
- ✅ Fetch API for CRUD operations
- ✅ Form handling and validation
- ✅ Error handling and user feedback
- ✅ Responsive CSS and media queries
- ✅ JSON Server for mock backends

## 📚 Additional Features You Can Add

1. **Search**: Filter students by name
2. **Sort**: Sort by marks, grade, or name
3. **Pagination**: Display students per page
4. **Export**: Download student data as CSV
5. **Statistics**: Show class average, top performer
6. **Classes**: Manage multiple sections
7. **Reports**: Generate performance reports
8. **Validation**: Email/phone validation
9. **Authentication**: Login system
10. **Analytics**: Charts and visualizations

## 📄 License

This project is free to use for educational purposes.

## 🤝 Support

For issues or questions:
1. Check the troubleshooting section
2. Verify all servers are running
3. Check browser console for errors
4. Ensure db.json is properly formatted

---

**Created for learning React fundamentals and CRUD operations**

Happy coding! 🚀
