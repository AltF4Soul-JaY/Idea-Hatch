// Navigate to a page
function goTo(page) {
  window.location.href = page;
}

// Highlight active nav link
function highlightActiveLink() {
  const current = location.pathname.split("/").pop();
  document.querySelectorAll("nav a").forEach(link => {
    const target = link.getAttribute("onclick")?.match(/'(.+)'/);
    if (target && target[1] === current) {
      link.classList.add("active");
    }
  });
}

// Auto year
function setCurrentYear() {
  const span = document.getElementById("year");
  if (span) span.textContent = new Date().getFullYear();
}

// Time greeting
function showGreeting() {
  const greet = document.getElementById("greeting");
  if (!greet) return;
  const h = new Date().getHours();
  greet.textContent = h < 12 ? "Good morning!" : h < 18 ? "Good afternoon!" : "Good evening!";
}

// Toggle theme
function toggleTheme() {
  document.body.classList.toggle("light");
  localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
}

// Load theme
function loadTheme() {
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  highlightActiveLink();
  setCurrentYear();
  showGreeting();
  loadTheme();
});
