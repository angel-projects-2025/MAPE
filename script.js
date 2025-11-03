document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let currentIndex = 0;
  let autoSlide;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
  });

  function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 5000); // cambia cada 5 segundos
  }

  function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
  }

  showSlide(currentIndex);
  startAutoSlide();
});

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.querySelector(".contenedor-cartas");
  const prevBtn = document.querySelector(".prev-carta");
  const nextBtn = document.querySelector(".next-carta");

  const cartas = document.querySelectorAll(".carta");
  const totalCartas = cartas.length;
  const cartasVisibles = 4;
  let indice = 0;

  function actualizarCarrusel() {
    const desplazamiento = -(indice * (100 / cartasVisibles));
    contenedor.style.transform = `translateX(${desplazamiento}%)`;
  }

  nextBtn.addEventListener("click", () => {
    if (indice < totalCartas - cartasVisibles) {
      indice++;
    } else {
      indice = 0; // vuelve al inicio
    }
    actualizarCarrusel();
  });

  prevBtn.addEventListener("click", () => {
    if (indice > 0) {
      indice--;
    } else {
      indice = totalCartas - cartasVisibles; // va al final
    }
    actualizarCarrusel();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 }); // se activa con 10% visible

  reveals.forEach(r => observer.observe(r));
});
