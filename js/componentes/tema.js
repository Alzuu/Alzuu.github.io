export function botonTema() {
    const botonTema = document.querySelector("#btn-tema")
    const body = document.body
    const logo = document.querySelector("#logo")


    botonTema.addEventListener("click", () => {

        body.classList.toggle("modo-claro")

        if (body.classList.contains("modo-claro")) {
            botonTema.textContent = "☾"
            botonTema.setAttribute("arial-label", "Cambiar a modo OSCURO")
            logo.src = "/assets/paperboxLogoOscuro.png"
        } else {
            botonTema.textContent = "☀"
            botonTema.setAttribute("arial-label", "Cambiar a modo CLARO")
            logo.src = "/assets/paperboxLogoClaro.png"
        }
    })

}