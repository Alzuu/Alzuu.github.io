document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search)
    const idLibro = params.get("id")
    console.log("ID capturado de la URL:", idLibro);

    if (idLibro) {
        const portada = document.querySelector("#portada")
        const titulo = document.querySelector("#titulo")
        const año = document.querySelector("#año")
        const autor = document.querySelector("#autor")
        const descripcion = document.querySelector("#descripcion")
        const listaPersonajes = document.querySelector(".lista-personajes")

        fetch(`/api/libros/${idLibro}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("ERROR: LIBRO NO ENCONTRADO")
                }
                return response.json()
            })
            .then(libro => {
                console.log("Datos del libro recibidos:", libro);
                document.title = `${libro.titulo} - PaperBox`

                if (portada) {
                    portada.src = `../../${libro.portada}`
                    portada.alt = `${libro.titulo}: portada`
                }

                if (titulo) titulo.textContent = libro.titulo

                if (año) año.textContent = libro.anio

                if (autor) autor.textContent = libro.autor

                if (descripcion) {
                    descripcion.textContent = libro.descripcion || " - "
                }

                if (listaPersonajes && libro.personajes && Array.isArray(libro.personajes)) {
                    listaPersonajes.innerHTML = "";
                    libro.personajes.forEach(personaje => {
                        const li = document.createElement("li");
                        li.innerHTML = `<span class="tag-personaje">${personaje}</span>`;
                        listaPersonajes.appendChild(li);
                    });
                }
            })
            .catch(error => {
                console.error("ERROR AL CARGAR LIBRO", error)
            })

    } else {
        console.error("ERROR: NO SE ENCONTRÓ EL ID DEL LIBRO")
    }
})