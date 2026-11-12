export function iniciarBusqueda() {
    const busqueda = document.querySelector("#search");
    const inputBusqueda = document.querySelector("#search-input");

    if (!busqueda || !inputBusqueda) return

    busqueda.addEventListener("submit", async (event) => {
        event.preventDefault()

        const titulo = inputBusqueda.value.trim()

        if (!titulo) return

        try {
            const respuesta = await fetch(
                `/api/libros/titulo?titulo=${encodeURIComponent(titulo)}`
            )

            const resultados = await respuesta.json()

            if (!respuesta.ok) {
                throw new Error(resultados.error)
            }

            if (resultados.length === 0) {
                alert("No se encontraron libros.")
                return;
            }

            // Redirigir al primer resultado.
            window.location.href =
                `/pags/libros/libro.html?id=${resultados[0].id}`

        } catch (error) {
            console.error("Error al buscar el libro:", error)
        }
    });
}