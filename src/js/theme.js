const btn = document.getElementById('theme-toggle');
const root = document.documentElement;
const darkClass = 'dark';

function loadTheme() {
  if (localStorage.theme === 'light') {
    root.classList.add(darkClass);  // Tailwind flips in dark mode
  }
}
function toggle() {
  if (root.classList.toggle(darkClass)) {
    localStorage.theme = 'light';
  } else {
    localStorage.removeItem('theme');
  }
}

btn.addEventListener('click', toggle);
document.addEventListener('DOMContentLoaded', () => {
  loadTheme();
  document.getElementById('year').textContent = new Date().getFullYear();
});
