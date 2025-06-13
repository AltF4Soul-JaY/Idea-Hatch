// Navigate to a page
function goTo(page) {
  window.location.href = page;
}

// Highlight active nav link (if using onclick navigation)
function highlightActiveLink() {
  const current = location.pathname.split("/").pop();
  document.querySelectorAll("nav a").forEach(link => {
    const target = link.getAttribute("onclick")?.match(/'(.+)'/);
    if (target && target[1] === current) {
      link.classList.add("active");
    }
  });
}

// Auto-fill current year in footer
function setCurrentYear() {
  const span = document.getElementById("year");
  if (span) span.textContent = new Date().getFullYear();
}

// Time-based greeting (Good morning/afternoon/evening)
function showGreeting() {
  const greet = document.getElementById("greeting");
  if (!greet) return;
  const hour = new Date().getHours();
  greet.textContent = hour < 12 ? "Good morning!" : hour < 18 ? "Good afternoon!" : "Good evening!";
}

// Toggle light/dark theme
function toggleTheme() {
  document.body.classList.toggle("light");
  localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
}

// Load previously selected theme from localStorage
function loadTheme() {
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
  }
}

// Initialize all on page load
document.addEventListener("DOMContentLoaded", () => {
  highlightActiveLink();
  setCurrentYear();
  showGreeting();
  loadTheme();
});
