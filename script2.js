document.addEventListener("DOMContentLoaded", () => {
  // Selecciona todas las secciones con la clase .reveal
  const elementos = document.querySelectorAll(".reveal");

  // Les añadimos la clase hidden al inicio
  elementos.forEach(el => el.classList.add("hidden"));

  // Creamos el observador para detectar cuando entran en pantalla
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // Deja de observar cuando ya apareció
      }
    });
  }, {
    threshold: 0.2 // 20% del elemento visible para activarse
  });

  // Observamos todos los elementos marcados con .reveal
  elementos.forEach(el => observer.observe(el));
});
