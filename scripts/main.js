// nav.js
// Highlight active link
const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
  const target = link.getAttribute('data-target');
  if (target === window.location.pathname.split('/').pop()) {
    link.classList.add('active');
  }
});

// Smooth scrolling for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(a => {
  a.addEventListener('click', function(e) {
    e.preventDefault();
    const selector = this.getAttribute('href');
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
  });
});
// animations.js
// Scroll‑reveal using IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-in-down');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

// Observe elements to animate
const revealElements = document.querySelectorAll('main h1, .card-glass, .btn-glow');
revealElements.forEach(el => {
  el.classList.add('opacity-0');
  observer.observe(el);
});
// theme.js
// Theme toggle and year auto-update
const themeToggleBtn = document.getElementById('theme-toggle');
const rootElement = document.documentElement;
const yearSpan = document.getElementById('year');

// Load theme from localStorage
function loadTheme() {
  if (localStorage.getItem('theme') === 'light') {
    rootElement.classList.add('dark');
  }
}

// Toggle theme and save preference
function toggleTheme() {
  const isDark = rootElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
}

document.addEventListener('DOMContentLoaded', () => {
  loadTheme();
  // Set current year in footer
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
  // Attach toggle handler
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }
});