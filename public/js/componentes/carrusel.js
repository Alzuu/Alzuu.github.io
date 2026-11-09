export function botonesCarrusel() {

    const carrusel = document.querySelector(".carrusel-lista")
    const botonSig = document.querySelector("#btn-der")
    const botonPrev = document.querySelector("#btn-izq")

    // Cargar los libros desde mi API de forma dinámica.
    if (carrusel) {
        fetch('/api/libros?cantidad=10&from=0')
            .then(response => {
                if (!response.ok) {
                    throw new Error('ERROR: Al obtener libros del server.')
                }
                return response.json()
            })
            .then(libros => {
                // Limpio la lista anterior.
                carrusel.innerHTML = ''

                //Creo cada li con los datos del server.
                libros.forEach(libro => {
                    const li = document.createElement('li')
                    li.classList.add('carrusel-item')

                    li.innerHTML = `
                       <a href="./pags/libros/dracula.html?id=${libro.id}">
                            <img src="${libro.portada}" width="300" alt="${libro.titulo}" />
                        </a>
                    `
                    carrusel.appendChild(li);
                });
            })
            .catch(error => {
                console.error('Error al cargar el carrusel:', error);
            });
    }
    botonSig.addEventListener("click", () => {
        carrusel.scrollBy({
            left: 300,
            behavior: "smooth"
        })
    })

    botonPrev.addEventListener("click", () => {
        carrusel.scrollBy({
            left: -300,
            behavior: "smooth"
        })
    })
}