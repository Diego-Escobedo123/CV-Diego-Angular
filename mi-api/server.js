const express = require('express');

const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
  res.send('¡Hola, mundo de mi API!');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});