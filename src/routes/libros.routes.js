const express = require('express')
const router = express.Router()
const {
    getLibros,
    getLibroPorID,
    getLibroPorTitulo,
    postLibro,
    putLibro
} = require('../controllers/libros.controller')

// Endpoints.
router.get('/libros', getLibros)
router.get('/libros/:id', getLibroPorID)
router.get('/libros/titulo', getLibroPorTitulo)
router.post('/libros', postLibro)
router.put('/libros:id', putLibro)

module.exports = router