// highlight active link based on data-target
document.querySelectorAll('.nav-link').forEach(link => {
  if (link.dataset.target === location.pathname.split('/').pop()) {
    link.classList.add('active');
  }
});

// smooth scrolling for same-page anchors (if any)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});
