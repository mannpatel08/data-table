
import React from "react";

export default function EmployeeTable({
  employees,
  setEmployees,
  setEditData,
  setPage,
  department,
  setDepartment,
  sort,
  setSort
}) {
  const departments = [...new Set(employees.map(emp => emp.department))];

  const handleDelete = (id) => {
    const updated = employees.filter(emp => emp.id !== id);
    setEmployees(updated);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Employee List</h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
    
        <select value={department} onChange={(e) => setDepartment(e.target.value)}>
          <option value="">All Departments</option>
          {departments.map((dept, i) => (
            <option key={i} value={dept}>{dept}</option>
          ))}
        </select>

        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Default Sort</option>
          <option value="salary-asc">Salary: Low - High</option>
          <option value="salary-desc">Salary: High - Low</option>
          <option value="name">Name (A–Z)</option>
        </select>
      </div>

      <table border="1" width="100%" cellPadding="8">
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.length === 0 ? (
            <tr>
              <td colSpan="4" align="center">No employees found</td>
            </tr>
          ) : (
            employees.map(emp => (
              <tr key={emp.id}>
                <td>{emp.name}</td>
                <td>{emp.department}</td>
                <td>{emp.salary}</td>
                <td>
                  <button onClick={() => {
                    setEditData(emp);
                    setPage("form");
                  }}>
                    Edit
                  </button>

                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => handleDelete(emp.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
