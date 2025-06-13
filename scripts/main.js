
// Set dynamic year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Add hover effect to nav links (optional enhancement)
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("mouseover", () => link.classList.add("underline"));
  link.addEventListener("mouseout", () => link.classList.remove("underline"));
});
