export function botonesCarrusel() {

    const carrusel = document.querySelector(".carrusel-lista")
    const botonSig = document.querySelector("#btn-der")
    const botonPrev = document.querySelector("#btn-izq")

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