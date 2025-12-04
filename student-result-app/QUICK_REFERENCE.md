# 📋 Quick Reference Card

## 🚀 Start the App (3 Easy Steps)

### Step 1: Install Dependencies
```powershell
npm install
```

### Step 2: Start JSON Server (Terminal 1)
```powershell
npm run server
```
✓ Runs on: `http://localhost:5000`

### Step 3: Start React App (Terminal 2)
```powershell
npm run dev
```
✓ Runs on: `http://localhost:3000`

---

## 🎮 Using the App

| Action | Steps | Result |
|--------|-------|--------|
| **View All** | Click "Load Students" | See 5 students in table |
| **Add New** | Click "+ Add Student" → Fill form → Submit | New student in table |
| **Edit** | Click "Edit" → Modify → Update | Student data updated |
| **Delete** | Click "Delete" → Confirm | Student removed |
| **Details** | Click "View" | See detailed info |

---

## 📁 Key Files

```
src/
├── App.jsx ................. Main component (state)
├── App.css ................. All styling
├── index.jsx ............... Entry point
├── components/
│   ├── StudentList.jsx ...... Table view
│   ├── StudentForm.jsx ...... Add/Edit form
│   └── StudentDetails.jsx ... Detailed view
└── services/
    └── studentService.js ... API calls
```

---

## 🔌 API Endpoints

| Method | Endpoint | What it does |
|--------|----------|-------------|
| GET | `/students` | Get all students |
| GET | `/students/:id` | Get one student |
| POST | `/students` | Add student |
| PUT | `/students/:id` | Update student |
| DELETE | `/students/:id` | Delete student |

**Base URL**: `http://localhost:5000`

---

## 📊 Grade System

```
A+:  90-100  🟢 Green
A:   85-89   🟢 Light Green
B+:  80-84   🔵 Blue
B:   75-79   🟣 Purple
B-:  70-74   🟠 Orange
C:   60-69   🔴 Red
D:   50-59   🔴 Dark Red
F:   <50     ⚪ Gray
```

---

## 🧪 Test Checklist

- [ ] Click "Load Students"
- [ ] Click "View" → See details
- [ ] Click "+ Add Student"
- [ ] Click "Edit" → Change → Update
- [ ] Click "Delete" → Confirm
- [ ] Test on phone (mobile responsive)

---

## 💾 Form Fields

| Field | Type | Validation |
|-------|------|-----------|
| Name | Text | Required, can't be empty |
| Section | Select | Must pick A/B/C/D |
| Marks | Number | 0-100 required |
| Grade | Read-only | Auto-calculated |

---

## 🎨 Color Scheme

| Use | Color |
|-----|-------|
| Header | Purple (#667eea) |
| Primary Button | Blue (#3498db) |
| Success Button | Green (#27ae60) |
| Delete Button | Red (#e74c3c) |
| Card Background | White |

---

## ⌨️ Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Open Dev Tools | F12 |
| Refresh Page | Ctrl+R |
| Clear Cache | Ctrl+Shift+Delete |
| Search Code | Ctrl+F |

---

## 🐛 Quick Fixes

| Problem | Fix |
|---------|-----|
| Port in use | Kill process or change port |
| Blank page | Check console (F12) |
| Data not loading | Start JSON Server |
| Form won't submit | Check browser console |
| Grade not showing | Ensure marks are 0-100 |

---

## 📱 Responsive Sizes

| Device | Width | Breakpoint |
|--------|-------|-----------|
| Phone | <480px | Mobile |
| Tablet | 480-768px | Tablet |
| Desktop | >768px | Desktop |

---

## 🎯 Component Props

### StudentList
```javascript
students={[...]}
onAddClick={() => {}}
onEditClick={(student) => {}}
onViewClick={(id) => {}}
onDeleteClick={() => {}}
onLoadClick={() => {}}
isLoading={false}
```

### StudentForm
```javascript
isEditing={false}
editingStudent={null}
onFormSubmit={() => {}}
onCancel={() => {}}
```

### StudentDetails
```javascript
studentId={1}
onBack={() => {}}
```

---

## 🔗 Important Links

- **React Docs**: https://react.dev
- **JSON Server**: https://github.com/typicode/json-server
- **Fetch API**: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
- **Vite**: https://vitejs.dev

---

## 📚 Documentation Files

1. **README.md** - Full feature docs (500+ lines)
2. **SETUP.md** - Setup guide (200+ lines)
3. **PROJECT_SUMMARY.md** - Complete overview
4. **COMPONENTS.md** - Code documentation
5. **QUICK_REFERENCE.md** - This file

---

## 🎓 What You'll Learn

✅ React Components
✅ React Hooks (useState)
✅ Fetch API (CRUD)
✅ Form Handling
✅ State Management
✅ Responsive CSS
✅ Async/Await

---

## 💡 Extra Features to Add

1. Search by name
2. Sort by marks
3. Pagination
4. Class statistics
5. Export as CSV
6. Form validation
7. Loading spinners
8. Dark mode

---

## 🚢 Deploy Commands

### Build
```powershell
npm run build
```

### Preview
```powershell
npm run preview
```

### Deploy to Vercel
```powershell
npm install -g vercel
vercel
```

---

## 📞 Common Commands

```powershell
# Install dependencies
npm install

# Start dev server
npm run dev

# Start JSON Server
npm run server

# Build for production
npm run build

# Clear cache
npm cache clean --force

# Reinstall everything
rmdir /s node_modules
npm install
```

---

## 🌟 Key Concepts

### useState Hook
```javascript
const [students, setStudents] = useState([]);
```

### Fetch GET
```javascript
const data = await fetch(url).then(r => r.json());
```

### Fetch POST
```javascript
await fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
});
```

### Conditional Rendering
```javascript
{isLoading ? <p>Loading...</p> : <StudentList />}
```

### Event Handler
```javascript
<button onClick={() => setView('form')}>Click</button>
```

---

## ✅ Checklist Before Going Live

- [ ] All CRUD operations working
- [ ] Form validation working
- [ ] Error messages displaying
- [ ] Mobile responsive
- [ ] Loading states showing
- [ ] No console errors
- [ ] Data persisting in db.json
- [ ] Both servers running
- [ ] Tested on different browsers

---

## 🎉 You're Ready!

1. Install dependencies: `npm install`
2. Run JSON Server: `npm run server`
3. Run React App: `npm run dev`
4. Start building! 🚀

---

**Need help? Check README.md, SETUP.md, or COMPONENTS.md**

Happy Coding! 💻✨
