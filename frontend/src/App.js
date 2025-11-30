import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

// Generador de ID simple para React Keys
let nextId = 1;

const colors = {
  fondoSidebar: "#87CEEB", // azul cielo claro
  textoSidebar: "#003366", // azul oscuro
  fondoApp: "#F0F8FF", // fondo general claro
  botonGuardar: "#4CAF50", // verde confianza
  botonEliminar: "#FF6F61", // rojo suave
  fondoCard: "#FFFFFF", // blanco para tarjetas
  fondoCardSec: "#E6F2FF", // azul muy claro para filas pares
  fondoInput: "#A8E6CF", // verde suave para inputs
  bordeInput: "#003366", // azul oscuro para bordes inputs
  titulo: "#003366",
};

const estudiantesBase = [
  {
    id: nextId++,
    nombre: "Sofia Rodriguez",
    grado: 11,
    asistencia: "Presente",
    uniforme: "Conforme",
    intervenciones: "",
    foto: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: nextId++,
    nombre: "Mateo Gomez",
    grado: 10,
    asistencia: "Presente",
    uniforme: "Conforme",
    intervenciones: "",
    foto: "https://randomuser.me/api/portraits/men/43.jpg",
  },
  {
    id: nextId++,
    nombre: "Isabella Diaz",
    grado: 9,
    asistencia: "Presente",
    uniforme: "Conforme",
    intervenciones: "",
    foto: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: nextId++,
    nombre: "Sebastian Peña",
    grado: 8,
    asistencia: "Presente",
    uniforme: "Conforme",
    intervenciones: "",
    foto: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    id: nextId++,
    nombre: "Valentina Torres",
    grado: 11,
    asistencia: "Presente",
    uniforme: "Conforme",
    intervenciones: "",
    foto: "https://randomuser.me/api/portraits/women/48.jpg",
  },
  {
    id: nextId++,
    nombre: "Alejandro Moreno",
    grado: 10,
    asistencia: "Presente",
    uniforme: "Conforme",
    intervenciones: "",
    foto: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    id: nextId++,
    nombre: "Camila Silva",
    grado: 9,
    asistencia: "Presente",
    uniforme: "Conforme",
    intervenciones: "",
    foto: "https://randomuser.me/api/portraits/women/39.jpg",
  },
  {
    id: nextId++,
    nombre: "Nicolas Rojas",
    grado: 8,
    asistencia: "Presente",
    uniforme: "Conforme",
    intervenciones: "",
    foto: "https://randomuser.me/api/portraits/men/55.jpg",
  },
];

const linkStyle = {
  color: colors.textoSidebar,
  textDecoration: "none",
  display: "block",
  margin: "15px 0",
  padding: "12px 18px",
  borderRadius: "6px",
  backgroundColor: "#B0E0E6",
  fontWeight: "600",
  transition: "background-color 0.3s",
  cursor: "pointer",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
};

// --- Componente Sidebar ---
function Sidebar() {
  return (
    <div
      style={{
        width: 260,
        backgroundColor: colors.fondoSidebar,
        color: colors.textoSidebar,
        height: "100vh",
        padding: 25,
        boxSizing: "border-box",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h2 style={{ marginBottom: 40, fontWeight: "bold" }}>Rastreador de Asistencia</h2>
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>
            <Link style={linkStyle} to="/panel">
              Panel de Control
            </Link>
          </li>
          <li>
            <Link style={linkStyle} to="/estudiantes">
              Gestión de Estudiantes
            </Link>
          </li>
          <li>
            <Link style={linkStyle} to="/reportes">
              Reportes y Analíticas
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

// --- Componente PanelControl ---
function PanelControl() {
  const [datos, setDatos] = useState(estudiantesBase);

  const handleChange = (id, field, value) => {
    const nuevosDatos = datos.map((est) =>
      est.id === id ? { ...est, [field]: value } : est
    );
    setDatos(nuevosDatos);
  };

  const guardar = (estudiante) => {
    alert(
      `Datos guardados para ${estudiante.nombre}:\nAsistencia: ${estudiante.asistencia}\nUniforme: ${estudiante.uniforme}\nIntervenciones: ${estudiante.intervenciones}`
    );
  };

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: colors.fondoApp,
        padding: 20,
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: colors.titulo, marginBottom: 8 }}>Panel de Control</h1>
      <p>Seguimiento Diario</p>
      <p>Registra la asistencia y el cumplimiento del uniforme de los estudiantes de hoy.</p>

      {datos.map((est) => (
        <div
          key={est.id} // Usando el ID único
          style={{
            backgroundColor: colors.fondoCard,
            borderRadius: 8,
            padding: 20,
            marginBottom: 20,
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            maxWidth: 450,
          }}
        >
          <div style={{ textAlign: "center", marginBottom: 12 }}>
            <img
              src={est.foto}
              alt={est.nombre}
              style={{ width: 90, height: 90, borderRadius: "50%", objectFit: "cover" }}
            />
          </div>
          <h3 style={{ textAlign: "center", marginBottom: 0 }}>{est.nombre}</h3>
          <p style={{ textAlign: "center", marginTop: 4, fontWeight: "600" }}>Grado {est.grado}</p>

          <label style={{ display: "block", marginTop: 12, fontWeight: "600" }}>
            Asistencia:
            <select
              value={est.asistencia}
              onChange={(e) => handleChange(est.id, "asistencia", e.target.value)}
              style={{
                marginLeft: 10,
                padding: 6,
                borderRadius: 6,
                border: `1.5px solid ${colors.bordeInput}`,
                backgroundColor: colors.fondoInput,
                fontWeight: "600",
              }}
            >
              <option>Presente</option>
              <option>Ausente</option>
              <option>Tarde</option>
            </select>
          </label>

          <label style={{ display: "block", marginTop: 12, fontWeight: "600" }}>
            Uniforme:
            <select
              value={est.uniforme}
              onChange={(e) => handleChange(est.id, "uniforme", e.target.value)}
              style={{
                marginLeft: 10,
                padding: 6,
                borderRadius: 6,
                border: `1.5px solid ${colors.bordeInput}`,
                backgroundColor: colors.fondoInput,
                fontWeight: "600",
              }}
            >
              <option>Conforme</option>
              <option>No conforme</option>
            </select>
          </label>

          <label style={{ display: "block", marginTop: 12, fontWeight: "600" }}>
            Intervenciones:
            <input
              type="text"
              value={est.intervenciones}
              onChange={(e) => handleChange(est.id, "intervenciones", e.target.value)}
              placeholder="Añadir observaciones"
              style={{
                marginLeft: 10,
                padding: 6,
                borderRadius: 6,
                border: `1.5px solid ${colors.bordeInput}`,
                width: "calc(100% - 80px)",
                fontWeight: "500",
              }}
            />
          </label>

          <button
            onClick={() => guardar(est)}
            style={{
              marginTop: 16,
              backgroundColor: colors.botonGuardar,
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "10px 16px",
              cursor: "pointer",
              fontWeight: "bold",
              width: "100%",
              fontSize: 16,
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#3B9B40")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = colors.botonGuardar)}
          >
            Guardar
          </button>
        </div>
      ))}
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px 12px",
  marginBottom: 15,
  borderRadius: 6,
  border: "1px solid #ccc",
  fontSize: 16,
  boxSizing: "border-box",
};

const buttonStyle = {
  padding: "10px 16px",
  borderRadius: 6,
  border: "none",
  cursor: "pointer",
  boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
  transition: "background-color 0.3s ease",
};

const estudiantesData = [
  {
    id: nextId++,
    nombre: "Sofia Rodriguez",
    grado: 10,
    padre: "Carlos Rodriguez",
    email: "c.rodriguez@example.com",
    telefono: "+57 310-123-4567",
  },
  {
    id: nextId++,
    nombre: "Mateo Gomez",
    grado: 10,
    padre: "Lucia Gomez",
    email: "l.gomez@example.com",
    telefono: "+57 311-234-5678",
  },
  {
    id: nextId++,
    nombre: "Isabella Diaz",
    grado: 10,
    padre: "Juan Diaz",
    email: "j.diaz@example.com",
    telefono: "+57 312-345-6789",
  },
  {
    id: nextId++,
    nombre: "Sebastian Peña",
    grado: 10,
    padre: "Ana Peña",
    email: "a.pena@example.com",
    telefono: "+57 313-456-7890",
  },
];

// --- Componente Estudiantes ---
function Estudiantes() {
  const [listaEstudiantes, setListaEstudiantes] = useState(estudiantesData);
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevoPadre, setNuevoPadre] = useState("");
  const [nuevoEmail, setNuevoEmail] = useState("");
  const [nuevoTelefono, setNuevoTelefono] = useState("");

  const agregarEstudiante = () => {
    if (!nuevoNombre || !nuevoPadre || !nuevoEmail || !nuevoTelefono) {
      alert("Por favor complete todos los campos");
      return;
    }
    const nuevoEstudiante = {
      id: nextId++, // Asignar nuevo ID
      nombre: nuevoNombre,
      grado: 10, // Grado fijo para este ejemplo
      padre: nuevoPadre,
      email: nuevoEmail,
      telefono: nuevoTelefono,
    };
    setListaEstudiantes([...listaEstudiantes, nuevoEstudiante]);
    setNuevoNombre("");
    setNuevoPadre("");
    setNuevoEmail("");
    setNuevoTelefono("");
  };

  const eliminarEstudiante = (id) => {
    const nuevaLista = listaEstudiantes.filter((est) => est.id !== id);
    setListaEstudiantes(nuevaLista);
  };

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: colors.fondoApp,
        padding: 20,
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: colors.titulo }}>Gestión de Estudiantes</h1>
      <div style={{ marginBottom: 20, display: "flex", flexWrap: "wrap", gap: 12 }}>
        <input
          type="text"
          placeholder="Nombre del estudiante"
          value={nuevoNombre}
          onChange={(e) => setNuevoNombre(e.target.value)}
          style={{ ...inputStyle, maxWidth: 250 }}
        />
        <input
          type="text"
          placeholder="Nombre del padre/madre"
          value={nuevoPadre}
          onChange={(e) => setNuevoPadre(e.target.value)}
          style={{ ...inputStyle, maxWidth: 250 }}
        />
        <input
          type="email"
          placeholder="Email del padre/madre"
          value={nuevoEmail}
          onChange={(e) => setNuevoEmail(e.target.value)}
          style={{ ...inputStyle, maxWidth: 250 }}
        />
        <input
          type="tel"
          placeholder="Teléfono del padre/madre"
          value={nuevoTelefono}
          onChange={(e) => setNuevoTelefono(e.target.value)}
          style={{ ...inputStyle, maxWidth: 250 }}
        />
        <button
          onClick={agregarEstudiante}
          style={{ ...buttonStyle, backgroundColor: colors.botonGuardar, color: "white", fontWeight: "bold", alignSelf: "center" }}
        >
          Nuevo Estudiante
        </button>
      </div>
      <table
        border="1"
        cellPadding="8"
        cellSpacing="0"
        style={{
          borderCollapse: "collapse",
          width: "100%",
          maxWidth: 900,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          borderRadius: 6,
          overflow: "hidden",
          backgroundColor: colors.fondoCard,
        }}
      >
        <thead style={{ backgroundColor: "#B0E0E6", color: colors.textoSidebar }}>
          <tr>
            <th>Estudiante</th>
            <th>Grado</th>
            <th>Nombre del Padre/Madre</th>
            <th>Email del Padre/Madre</th>
            <th>Teléfono del Padre/Madre</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {listaEstudiantes.map((est, idx) => (
            <tr key={est.id} style={{ backgroundColor: idx % 2 === 0 ? colors.fondoCardSec : colors.fondoCard }}>
              <td>{est.nombre}</td>
              <td>{est.grado}</td>
              <td>{est.padre}</td>
              <td>{est.email}</td>
              <td>{est.telefono}</td>
              <td>
                <button
                  onClick={() => eliminarEstudiante(est.id)}
                  style={{ ...buttonStyle, backgroundColor: colors.botonEliminar, color: "white", fontWeight: "bold" }}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const reportesData = {
  asistenciaGeneral: 71,
  cumplimientoUniforme: 79,
  totalEstudiantes: 8,
  asistenciaPorGrado: {
    grado8: 70,
    grado9: 72,
    grado10: 75,
    grado11: 68,
  },
  cumplimientoPorGrado: {
    grado8: 80,
    grado9: 78,
    grado10: 82,
    grado11: 75,
  },
};

// --- Componente Reportes ---
function Reportes() {
  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: colors.fondoApp,
        padding: 20,
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: colors.titulo }}>Informes y Analíticas</h1>
      <p>Analiza los datos de asistencia y cumplimiento del uniforme en tiempo real.</p>

      <div
        style={{
          display: "flex",
          gap: 20,
          flexWrap: "wrap",
          justifyContent: "space-around",
          marginTop: 16,
        }}
      >
        {[
          {
            titulo: "Asistencia General",
            valor: reportesData.asistenciaGeneral + "%",
            detalle: "Basado en todos los registros de estudiantes",
          },
          {
            titulo: "Cumplimiento de Uniforme",
            valor: reportesData.cumplimientoUniforme + "%",
            detalle: "En todos los grados y días",
          },
          {
            titulo: "Total de Estudiantes",
            valor: "" + reportesData.totalEstudiantes,
            detalle: "Actualmente rastreados en el sistema",
          },
        ].map(({ titulo, valor, detalle }) => (
          <div
            key={titulo}
            style={{
              backgroundColor: "#B0E0E6",
              color: colors.textoSidebar,
              padding: 20,
              borderRadius: 12,
              flex: "1 1 220px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              textAlign: "center",
              fontWeight: "600",
              fontSize: "1.25rem",
              userSelect: "none",
            }}
          >
            <p>{titulo}</p>
            <p style={{ fontSize: "2rem", margin: 0 }}>{valor}</p>
            <small>{detalle}</small>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: 40, color: colors.titulo }}>Tasa de Asistencia por Grado</h2>
      <ul style={{ listStyleType: 'disc', paddingLeft: 20 }}>
        {Object.entries(reportesData.asistenciaPorGrado).map(([grado, porcentaje]) => (
          <li key={grado} style={{ marginBottom: 8 }}>
            <strong>{grado.replace("grado", "Grado ")}</strong>: {porcentaje}%
          </li>
        ))}
      </ul>

      <h2 style={{ marginTop: 40, color: colors.titulo }}>Cumplimiento de Uniforme por Grado</h2>
      <ul style={{ listStyleType: 'disc', paddingLeft: 20 }}>
        {Object.entries(reportesData.cumplimientoPorGrado).map(([grado, porcentaje]) => (
          <li key={grado} style={{ marginBottom: 8 }}>
            <strong>{grado.replace("grado", "Grado ")}</strong>: {porcentaje}%
          </li>
        ))}
      </ul>
    </div>
  );
}

// --- Componente principal de la aplicación (SOLUCIÓN DEL ERROR) ---
function App() {
  return (
    <Router>
      <div style={{ display: "flex", minHeight: "100vh", width: "100%" }}>
        <Sidebar />
        <div style={{ flexGrow: 1 }}>
          <Routes>
            {/* Ruta por defecto: redirige a /panel */}
            <Route path="/" element={<Navigate to="/panel" replace />} />
            {/* Rutas definidas */}
            <Route path="/panel" element={<PanelControl />} />
            <Route path="/estudiantes" element={<Estudiantes />} />
            <Route path="/reportes" element={<Reportes />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;