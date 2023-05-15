const animacion = document.querySelectorAll(".animacion")
const animado = () => {
    let scroll = document.documentElement.scrollTop;
    animacion.forEach(ele => {
        (ele.offsetTop - (window.innerHeight) < scroll) 
            ? ele.classList.add("act")
            : ele.classList.remove("act")
    })
}
window.addEventListener("scroll", e => animado())










