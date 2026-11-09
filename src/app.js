const express = require('express');
const path = require('path');
const librosRoutes = require('./routes/libros.routes')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Archivos estáticos.
app.use(express.static(path.join(__dirname, '../public')));

// Defino rutas de la API.
app.use('/api', librosRoutes);

// Inicio srv.
app.listen(PORT, () => {
    console.log(`PAPERBOX srv corriendo en: http://localhost:${PORT}`);
})