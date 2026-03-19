const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

let experiences = [
  { id: 1, company: "Empresa A", role: "Pasantía", startDate: "2023", endDate: "2024", description: "Aprendí JS", tech: ["JS"], highlights: ["Proyecto 1"] },
  { id: 2, company: "Empresa B", role: "Junior", startDate: "2024", endDate: null, description: "Backend", tech: ["Node.js"], highlights: ["API simple"] }
];

let nextId = 3;

app.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a la API de Experiencias' });
});

// Listar todas las experiencias
app.get('/experiences', (req, res) => {
  res.json(experiences);
});

// Obtener por id
app.get('/experiences/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const exp = experiences.find(e => e.id === id);
  if (!exp) return res.status(404).json({ error: 'Experiencia no encontrada' });
  res.json(exp);
});

app.listen(PORT, () => {
  console.log(`Server corriendo en http://localhost:${PORT}`);
});