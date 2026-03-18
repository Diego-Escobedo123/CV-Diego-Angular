const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// datos en memoria (ejemplo sencillo)
let experiences = [
  { id: 1, company: "Empresa A", role: "Pasantía", startDate: "2023", endDate: "2024", description: "Aprendí JS", tech: ["JS"], highlights: ["Proyecto 1"] },
  { id: 2, company: "Empresa B", role: "Junior", startDate: "2024", endDate: null, description: "Backend", tech: ["Node.js"], highlights: ["API simple"] }
];

let nextId = 3;

app.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a la API de Experiencias' });
});

app.listen(PORT, () => {
  console.log(`Server corriendo en http://localhost:${PORT}`);
});