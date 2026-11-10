let libros = [
    {
        id: 1, titulo: "El retrato de Dorian Gray", autor: "Oscar Wilde", anio: 1890,
        portada: `/assets/img/portadas/dorianGray.jpg`,
        descripcion: "",
        personajes: [
            "Basil Hallward", "Lord Henry 'Harry' Wotton", "Dorian Gray",
            "Lord George Fermor", "Sibyl Vane", "Señora Vane", "James Vane",
            "Señor Isaacs", "Victor", "Señor Hubbard", "Adrian Singleton", "Alan Campbell",
            "Lady Alice Chapman", "Duquesa de Monmouth", "Hetty Merton"
        ]
    },
    {
        id: 2, titulo: "Dracula", autor: "Bram Stoker", anio: 1890,
        portada: `/assets/img/portadas/dracula.jpg`,
        descripcion: "",
        personajes: [
           "Conde Drácula", "Jonathan Harker", "Mina Harker", "Lucy Westenra", 
           "Abraham Van Helsing", "Dr. John Seward", "Arthur Holmwood", "Quincey Morris",
           "R.M. Renfield"
        ]
    },
    {
        id: 3, titulo: "Frankenstein", autor: "Mary Shelley", anio: 1818,
        portada: `/assets/img/portadas/frankenstein.jpg`,
        descripcion: "",
        personajes: [
            "Victor Frankenstein", "La criatura", "Robert Walton", "Elizabeth Lavenza",
            "Henry Clerval", "Alphonse Frankenstein", "Caroline Beaufort"
        ]
    },
    {
        id: 4, titulo: "Estudio en Escarlata", autor: "Sir Arthur Conan Doyle", anio: 1887,
        portada: `/assets/img/portadas/estudioEscarlata.jpg`,
        descripcion: "",
        personajes: [
            "Sherlock Holmes", "Dr. John H. Watson", "Jefferson Hope", "John Ferrier",
            "Lucy Ferrier", "Enoch J. Drebber", "Joseph Strangerson", "Tobias Gregson",
            "G. Lestrade"
        ]
    },
    {
        id: 5, titulo: "El señor de las moscas", autor: "William Golding", anio: 1954,
        portada: `/assets/img/portadas/señorMoscas.jpg`,
        descripcion: "",
        personajes: [
           "Ralph", "Piggy", "Jack Merridew", "Simon", "Roger", "Sam y Eric"
        ]
    },
    {
        id: 6, titulo: "1984", autor: "George Orwell", anio: 1949,
        portada: `/assets/img/portadas/1984.jpg`,
        descripcion: "",
        personajes: [
           "Winston Smith", "Julia", "O'Brien", "Emmanuel Goldstein", "Sr.Charrington",
           "Tom Parsons", "Señora Parsons", "Ampleforth"
        ]
    },
    {
        id: 7, titulo: "Tiburon", autor: "Peter Benchley", anio: 1974,
        portada: `/assets/img/portadas/tiburon.jpg`,
        descripcion: "",
        personajes: [
            "Martin Brody", "Quint", "Matt Hooper", "Ellen Brody", "Larry Vaughan",
            "Midows", "Hendricks", "El tiburon blanco"
        ]
    },
    {
        id: 8, titulo: "20000 Leguas de Viaje Submarino", autor: "Julio Verne", anio: 1870,
        portada: `/assets/img/portadas/20000LeguasSubmarino.jpg`,
        descripcion: "",
        personajes: [
            "Pierre Arronax", "Conseil", "Ned Land", "Capitan Nemo"
        ]
    },
    {
        id: 9, titulo: "La Isla del Dr. Moreau", autor: "H.G. Wells", anio: 1896,
        portada: `/assets/img/portadas/moreau.jpg`,
        descripcion: "",
        personajes: [
            "Edward Prendick", "Doctor Moreau", "Montgomery", "M'ling", "puma",
            "hombre perro", "hombre mono", "hombre leopardo", "hiena-cerdo",
            "Capitan Davis", "Charles Prendick"
        ]
    },
    {
        id: 10, titulo: "Miguel Strogoff", autor: "Julio Verne", anio: 1876,
        portada: `/assets/img/portadas/strogoff.jpg`,
        descripcion: "",
        personajes: [
            "Miguel Strogoff", "Nadia Fedor", "Iván Ogareff", "Feofar Khan", "Marfa Strogoff",
            "Harry Blount", "Alcide Jolivet", "Sangarra", "Zimak"
        ]
    }
]

// GET: Obtener varios recursos (en este caso LIBROS).
const getLibros = (req, res) => {
    let cantidad = parseInt(req.query.cantidad) || libros.length
    let from = parseInt(req.query.from) || 0

    const resultado = libros.slice(from, from + cantidad)
    res.json(resultado)
}

// GET: Obtenert un recurso (LIBRO).
const getLibroPorID = (req, res) => {
    const id = parseInt(req.params.id)
    const libro = libros.find(l => l.id === id)

    if (!libro) {
        return res.status(404).json({ error: "LIBRO NO ENCONTRADO" })
    }

    res.json(libro)
}

// POST: Crear un recurso (LIBRO) nuevo.
const postLibro = (req, res) => {
    const { titulo, autor, anio } = req.body

    if (!titulo || typeof titulo !== 'string') {
        return res.status(400).json({ error: 'TITULO INVALIDO' })
    }

    if (!autor || typeof autor !== 'string') {
        return res.status(400).json({ error: 'AUTOR INVALIDO' })
    }

    const nuevoLibro = {
        id: libros.length > 0 ? libros[libros.length - 1].id + 1 : 1,
        titulo,
        autor,
        anio: anio || 0
    }

    libros.push(nuevoLibro)
    res.status(201).json(nuevoLibro)
}

// PUT: Actualizar un recurso (LIBRO) que existe.
const putLibro = (req, res) => {
    const id = parseInt(req.params.id)
    const { titulo, autor, anio } = req.body

    const libroIndex = libros.findIndex(l => l.id === id)

    if (!titulo || typeof titulo !== 'string') {
        return res.status(400).json({ error: 'TITULO INVALIDO' })
    }

    if (libroIndex == -1) {
        return res.status(404).json({ error: 'LIBRO NO ENCONTRADO' })
    }

    libros[libroIndex] = {
        id,
        titulo,
        autor: autor || libros[libroIndex].autor,
        anio: anio || libros[libroIndex].anio
    }
    res.json(libros[libroIndex])
}

module.exports = {
    getLibros,
    getLibroPorID,
    postLibro,
    putLibro
}