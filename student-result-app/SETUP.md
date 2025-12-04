# 🚀 Quick Setup Guide - Student Result Management App

## Step 1: Install Dependencies

Open PowerShell in the project folder and run:

```powershell
npm install
```

This will install:
- React & React DOM
- Vite (build tool)
- JSON Server (backend)

⏳ Wait for installation to complete (2-3 minutes)

---

## Step 2: Start JSON Server (Terminal 1)

Open a **NEW** PowerShell terminal and run:

```powershell
npm run server
```

You should see:
```
  ✓ JSON Server started
  ✓ Listening on port 5000
  ✓ Database: db.json
```

**Keep this terminal open!**

---

## Step 3: Start React Development Server (Terminal 2)

Open another **NEW** PowerShell terminal and run:

```powershell
npm run dev
```

You should see:
```
  ✓ Vite dev server running at:
  ✓ http://localhost:3000
```

The app will automatically open in your browser at `http://localhost:3000`

---

## 🎮 How to Test the App

### Test 1: Load Students
1. Click **"Load Students"** button
2. You should see 5 students in the table (Aarav, Priya, Rohit, Neha, Arjun)

### Test 2: Add a New Student
1. Click **"+ Add Student"** button
2. Fill in the form:
   - Name: `Vikram Gupta`
   - Section: `A`
   - Marks: `95`
   - Grade: (auto-fills as `A+`)
3. Click **"Add Student"**
4. Click **"Load Students"** to see the new student

### Test 3: Edit a Student
1. Click **"Edit"** on any student
2. Change the marks (e.g., from 85 to 78)
3. Grade updates automatically
4. Click **"Update Student"**
5. Click **"Load Students"** to see changes

### Test 4: View Details
1. Click **"View"** on any student
2. See detailed information with:
   - Color-coded grade
   - Performance bar
   - Grade scale reference
3. Click **"← Back to List"**

### Test 5: Delete a Student
1. Click **"Delete"** on any student
2. Confirm deletion in popup
3. Click **"Load Students"** to refresh

---

## 📊 Sample Test Data

Initial students in `db.json`:
- Aarav Kumar (A, 85 marks)
- Priya Singh (A+, 92 marks)
- Rohit Sharma (B, 78 marks)
- Neha Verma (A, 88 marks)
- Arjun Patel (B-, 71 marks)

---

## 🔌 Ports

- **React App**: http://localhost:3000
- **JSON Server**: http://localhost:5000

---

## ✅ What's Working

- ✅ View all students (GET)
- ✅ Add new students (POST)
- ✅ Edit students (PUT)
- ✅ Delete students (DELETE)
- ✅ View detailed results
- ✅ Auto-calculate grades
- ✅ Responsive design
- ✅ Form validation
- ✅ Loading states

---

## 🛑 If Something Goes Wrong

### Port Already in Use
If port 3000 or 5000 is already in use:

1. Find the process:
   ```powershell
   netstat -ano | findstr :3000
   netstat -ano | findstr :5000
   ```

2. Kill the process:
   ```powershell
   taskkill /PID <PID_NUMBER> /F
   ```

### Dependencies Issues
Reinstall everything:

```powershell
Remove-Item node_modules -Recurse
npm install
```

### JSON Server Not Responding
- Make sure `db.json` exists in root folder
- Check file has valid JSON format
- Restart the server with `npm run server`

### React App Not Loading
- Check browser console for errors (F12)
- Make sure both servers are running
- Clear browser cache (Ctrl+Shift+Delete)

---

## 📁 File Structure Review

```
student-result-app/
├── src/
│   ├── components/
│   │   ├── StudentList.jsx ......... Table & action buttons
│   │   ├── StudentForm.jsx ......... Add/Edit form
│   │   └── StudentDetails.jsx ...... Detailed view
│   ├── services/
│   │   └── studentService.js ....... API calls (CRUD)
│   ├── App.jsx ..................... Main state & routing
│   ├── App.css ..................... All styling
│   └── index.jsx ................... React entry point
├── public/
│   └── index.html .................. HTML template
├── db.json ......................... JSON Server database
├── package.json .................... Dependencies
├── vite.config.js .................. Build config
└── README.md ....................... Full documentation
```

---

## 🎓 Key Concepts Covered

1. **React Hooks**: useState for state management
2. **Component Composition**: Multiple components working together
3. **Fetch API**: GET, POST, PUT, DELETE requests
4. **Form Handling**: Input, validation, submission
5. **Conditional Rendering**: Different views (list, form, details)
6. **Responsive Design**: Mobile-first CSS approach
7. **State Management**: Lifting state in App.jsx

---

## 📚 Next Steps After Setup

1. **Explore the code**: Read through each component
2. **Modify the styling**: Change colors in App.css
3. **Add features**: Search, sort, pagination
4. **Test edge cases**: Empty marks, special characters
5. **Deploy**: Build and host on Vercel/Netlify

---

## 🆘 Need Help?

Check the full **README.md** for:
- Detailed feature list
- API endpoint documentation
- Component documentation
- Troubleshooting guide
- Ideas for extra features

---

**Happy coding! 🎉**
