// Theme toggle between light and dark mode
document.getElementById('theme-toggle')?.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
});

// Highlight active navigation link
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll(".nav-link").forEach(link => {
  if (link.getAttribute("data-target") === currentPage) {
    link.classList.add("text-pink-400", "font-bold");
  }
});

// Dynamic year in footer
document.getElementById("year").textContent = new Date().getFullYear();
