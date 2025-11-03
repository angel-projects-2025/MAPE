document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const btnPrev = document.querySelector(".btn-carrusel.prev");
  const btnNext = document.querySelector(".btn-carrusel.next");
  const dots = document.querySelectorAll(".dot");

  if (slides.length === 0) return;

  let currentIndex = 0;

  function mostrarSlide(index) {
    // Aseguramos que el índice sea válido
    currentIndex = (index + slides.length) % slides.length;

    // Activar/desactivar clases
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === currentIndex);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });

    // Pausar los videos que no están activos
    slides.forEach((slide, i) => {
      const video = slide.querySelector("video");
      if (video) {
        if (i !== currentIndex) {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }

  // Botón "anterior"
  if (btnPrev) {
    btnPrev.addEventListener("click", () => {
      mostrarSlide(currentIndex - 1);
    });
  }

  // Botón "siguiente"
  if (btnNext) {
    btnNext.addEventListener("click", () => {
      mostrarSlide(currentIndex + 1);
    });
  }

  // Clic en puntos
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      mostrarSlide(i);
    });
  });

  // Mostrar la primera imagen al cargar
  mostrarSlide(currentIndex);
});


// Aparición al hacer scroll
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 100;
    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('active');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// --- EFECTO DE APARICIÓN HORIZONTAL ---
document.addEventListener("DOMContentLoaded", () => {
  const revealSection = document.querySelectorAll('.reveal');
  const cartas = document.querySelectorAll('.carta-producto');

  function revealHorizontal() {
    const windowHeight = window.innerHeight;

    revealSection.forEach(sec => {
      const top = sec.getBoundingClientRect().top;
      if (top < windowHeight - 100) {
        sec.classList.add('active');
      }
    });

    cartas.forEach((card, i) => {
      const top = card.getBoundingClientRect().top;
      if (top < windowHeight - 100) {
        setTimeout(() => card.classList.add('visible'), i * 150);
      }
    });
  }

  window.addEventListener('scroll', revealHorizontal);
  window.addEventListener('load', revealHorizontal);

  // 🔹 Llamada inicial para que aparezcan aunque ya estén visibles al cargar
  revealHorizontal();
});

// --- EFECTO DESDE LOS COSTADOS ---
document.addEventListener("DOMContentLoaded", () => {
  const revealLeft = document.querySelectorAll(".reveal-left");
  const revealRight = document.querySelectorAll(".reveal-right");

  function revelarCostados() {
    const alturaPantalla = window.innerHeight;

    revealLeft.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < alturaPantalla - 100) {
        el.classList.add("active");
      }
    });

    revealRight.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < alturaPantalla - 100) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revelarCostados);
  window.addEventListener("load", revelarCostados);
});
