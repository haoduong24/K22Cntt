import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Mock data for students
  const tvcListStudent = [
    { tvcId: 1, tvcName: "Duong Hao", tvcAge: 20, tvcIsActive: true },
    { tvcId: 2, tvcName: "Nguyen Trung Quoc", tvcAge: 21, tvcIsActive: false },
    { tvcId: 3, tvcName: "Tran Van Huu Phuc", tvcAge: 22, tvcIsActive: true },
    { tvcId: 4, tvcName: "Duong Nguyen Huu Phuc", tvcAge: 23, tvcIsActive: true }

  ];

  let data = JSON.parse(localStorage.getItem("TvcK22CNT1DataStudents"));
  if (data === null || data.length === 0) {
    data = tvcListStudent;
    localStorage.setItem("TvcK22CNT1DataStudents", JSON.stringify(data));
  }

  const [students, setStudents] = useState(data);
  const [student, setStudent] = useState({ tvcId: 0, tvcName: "", tvcAge: 0, tvcIsActive: false });
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    localStorage.setItem("TvcK22CNT1DataStudents", JSON.stringify(students));
  }, [students]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      setStudents((prev) => prev.map((s) => (s.tvcId === student.tvcId ? student : s)));
      setIsEdit(false);
    } else {
      setStudent((prev) => ({ ...prev, tvcId: students.length + 1 }));
      setStudents([...students, student]);
    }
    setStudent({ tvcId: 0, tvcName: "", tvcAge: 0, tvcIsActive: false });
  };

  const handleEdit = (student) => {
    setStudent(student);
    setIsEdit(true);
  };

  const handleDelete = (id) => {
    setStudents((prev) => prev.filter((s) => s.tvcId !== id));
  };

  return (
    <div className="container">
      <h1>Student Management</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={student.tvcName}
          onChange={(e) => setStudent({ ...student, tvcName: e.target.value })}
        />
        <input
          type="number"
          placeholder="Age"
          value={student.tvcAge}
          onChange={(e) => setStudent({ ...student, tvcAge: parseInt(e.target.value) })}
        />
        <label>
          <input
            type="checkbox"
            checked={student.tvcIsActive}
            onChange={(e) => setStudent({ ...student, tvcIsActive: e.target.checked })}
          />
          Active
        </label>
        <button type="submit">{isEdit ? "Update" : "Add"}</button>
      </form>
      <ul>
        {students.map((s) => (
          <li key={s.tvcId}>
            {s.tvcName} - {s.tvcAge} - {s.tvcIsActive ? "Active" : "Inactive"}
            <button onClick={() => handleEdit(s)}>Edit</button>
            <button onClick={() => handleDelete(s.tvcId)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;