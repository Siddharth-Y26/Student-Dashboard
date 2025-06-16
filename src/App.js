import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/students")
      .then(res => res.json())
      .then(data => setStudents(data));
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">🎓 Student Dashboard</h1>
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">
          <h5 className="mb-0">Student Scores</h5>
        </div>
        <div className="card-body p-0">
          <table className="table table-striped mb-0">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {students.map(s => (
                <tr key={s.id}>
                  <td>{s.id}</td>
                  <td>{s.name}</td>
                  <td>
                    <span className={`badge ${s.score >= 75 ? 'bg-success' : 'bg-danger'}`}>
                      {s.score}
                    </span>
                  </td>
                </tr>
              ))}
              {students.length === 0 && (
                <tr>
                  <td colSpan="3" className="text-center text-muted p-3">
                    No students available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
