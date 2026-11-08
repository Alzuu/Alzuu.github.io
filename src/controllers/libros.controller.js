let libros = [
    {id: 1, titulo: "El retrato de Dorian Gray", autor: "Oscar Wilde", anio:1890},
    {id: 2, titulo: "La Odisea", autor: "Homero", anio:0},
    {id: 3, titulo: "Moby Dick", autor: "Herman Melville", anio:1851},
    {id: 4, titulo: "Los juegos del hambre", autor: "Suzanne Collins", anio:2008}
]

// GET: Obtenemos varios recursos (en este caso LIBROS).
const getLibros = (req, res) => {
    let cantidad = parseInt(req.query.cantidad) || libros.length
    let from = parseInt(req.query.from) || 0

    const resultado = libros.slice(from, from + cantidad)
    res.json(resultado)
}

// GET: Obtenemos un recurso (LIBRO).
const getLibroPorID = (req, res) => {
    const id = parseInt(req.params.id)
    const libro = libros.find(l => l.id === id)

    if(!libro) {
        return res.status((404).json({ error: "LIBRO NO ENCONTRADO" }))
    } 

    res.json(libro)
}