const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
const app = express();
app.use(cors());
app.use(express.json());

let students = [
  { id: 1, name: 'Juan Perez', present: true },
  { id: 2, name: 'María Gomez', present: false }
];

app.get('/api/students', (req, res) => {
  res.json(students);
});

app.post('/api/attendance', (req, res) => {
  // recibe { courseId, records }
  // exemplo: actualizamos in-memory
  res.status(201).json({ message: 'Registro guardado (simulado)' });
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
