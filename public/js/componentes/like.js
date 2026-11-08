export function botonLike() {
    const posts = document.querySelectorAll(".post")

    posts.forEach(post => {
        const boton = post.querySelector(".like-check")
        const contador = post.querySelector(".contador-like")

        boton.addEventListener("change", () => {
            let likes = Number(contador.textContent)

            if (boton.checked) {
                likes++
            } else {
                likes--
            }

            contador.textContent = likes
        })
    })
}