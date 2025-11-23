// Selecciona todos los carruseles que existan en la página
const carruseles = document.querySelectorAll(".carrusel-js");

carruseles.forEach(carrusel => {

    const contenedor = carrusel.querySelector(".carrusel-contenedor");
    const imagenes = carrusel.querySelectorAll(".carrusel-img");
    const total = imagenes.length;

    let index = 0;

    function mover() {

        // quitar zoom
        imagenes.forEach(img => img.classList.remove("active"));

        index = (index + 1) % total;

        // mover
        contenedor.style.transform = `translateX(-${index * 100}%)`;

        // zoom a imagen actual
        imagenes[index].classList.add("active");
    }

    // activar zoom a primera imagen
    imagenes[0].classList.add("active");

    // iniciar carrusel
    setInterval(mover, 6000);
});

document.addEventListener("DOMContentLoaded", () => {

    const elementos = document.querySelectorAll(".aparecer");

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    elementos.forEach(el => observador.observe(el));

});
