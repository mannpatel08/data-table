# 🧑‍💼 Employee Management System (React)

A **complete CRUD-based Employee Management System** built using **React + Vite**, designed to demonstrate **real-world React concepts** such as state management, component communication, localStorage persistence, filtering, sorting, and clean UI logic.

This project is **interview-ready** and ideal for beginners to intermediate developers who want to understand how real applications are structured.

---
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/ee96fc83-c315-4bdf-ab78-81d926db3a18" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/371d948f-155b-49a8-8c55-5dac9fe26903" />


## 🚀 Features

### ✅ Core Functionality

* ➕ Add new employees
* ✏️ Edit existing employee details
* ❌ Delete employees
* 👀 View all employees in a table

### 🔍 Advanced Features

* 🏢 **Filter employees by Department**
* 🔃 **Sort employees** by:

  * Salary (Low → High)
  * Salary (High → Low)
  * Name (A–Z)
* 💾 **Persistent data storage** using `localStorage`
* ⚡ Optimized rendering using `useMemo`

---

## 🧠 Concepts Used

This project covers important React concepts:

* Functional Components
* `useState`, `useEffect`, `useMemo`
* Parent → Child communication using props
* Centralized state management
* Conditional rendering
* Array methods (`map`, `filter`, `sort`)
* Controlled form inputs
* LocalStorage CRUD operations

---

## 📁 Project Folder Structure

```
src/
 ├─ components/
 │   ├─ Navbar.jsx          # Navigation between pages
 │   ├─ Home.jsx            # Dashboard / landing page
 │   ├─ EmployeeForm.jsx    # Add & Edit employee form
 │   └─ EmployeeTable.jsx   # Employee list + Filter & Sort UI
 │
 ├─ App.jsx                 # Main state & logic controller
 ├─ main.jsx                # Application entry point
 └─ index.css               # Global styles
```

---

## 🔄 Application Flow

1. User navigates using the **Navbar**
2. Employees are:

   * Loaded from `localStorage` on app start
   * Stored back to `localStorage` on every update
3. Filtering & sorting logic lives in **App.jsx**
4. UI controls for filter & sort are handled inside **EmployeeTable.jsx**
5. Editing an employee redirects the user to the form with pre-filled data

This separation ensures **clean architecture and scalability**.

---

## 🛠 Tech Stack

* ⚛️ React (Functional Components)
* ⚡ Vite (Fast development server)
* 🟨 JavaScript (ES6+)
* 🎨 CSS (Basic styling)
* 🌐 Browser LocalStorage

---

## ▶️ How to Run the Project

```bash
npm install
npm run dev
```

Then open:

```
http://localhost:5173
```

---

## 🎯 Why This Project Matters (Interview Perspective)

> “This project demonstrates how to build a real-world CRUD application using React, with proper state lifting, reusable components, performance optimization, and client-side persistence.”

Recruiters can clearly see:

* Practical React knowledge
* Clean coding practices
* Understanding of UI + logic separation

---

## 🔮 Possible Enhancements

* 🔍 Search employees by name
* 📄 Pagination
* 🎨 Tailwind / Material UI styling
* 🌐 Backend integration (Node + MongoDB)
* 🔐 Authentication

---

## 👨‍💻 Author

**Dhruv Surti**
Full Stack Developer | React Enthusiast

---

⭐ If you found this project helpful, feel free to star the repository!
