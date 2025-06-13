// Scroll‑reveal using IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('animate-fade-in-down');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('main h1, .card-glass, .btn-glow').forEach(el => {
  el.classList.add('opacity-0');
  observer.observe(el);
});
