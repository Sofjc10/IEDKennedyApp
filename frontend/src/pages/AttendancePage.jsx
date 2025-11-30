import React, { useState } from "react";

export default function AttendanceForm() {
  const [attendance, setAttendance] = useState({});

  const students = [
    { id: 1, name: "Juan Perez" },
    { id: 2, name: "Ana Gomez" },
    { id: 3, name: "Carlos Ruiz" },
  ];

  const toggleAttendance = (id) => {
    setAttendance((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Asistencia guardada: " + JSON.stringify(attendance));
    // Aquí iría la llamada al backend con axios por ejemplo
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registrar asistencia</h2>
      {students.map((student) => (
        <div key={student.id}>
          <label>
            <input
              type="checkbox"
              checked={!!attendance[student.id]}
              onChange={() => toggleAttendance(student.id)}
            />
            {student.name}
          </label>
        </div>
      ))}
      <button type="submit">Guardar asistencia</button>
    </form>
  );
}

