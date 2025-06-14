// ✅ Highlight active nav link
document.querySelectorAll('nav a').forEach(link => {
  const current = location.pathname.split("/").pop();
  if (link.getAttribute("href") === current) {
    link.classList.add("border-b-2", "border-cyan-400", "pb-1");
  }
});

// ✅ Auto-set year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// ✅ Load blog posts if on updates.html
if (window.location.pathname.includes("updates.html")) {
  fetch("data/updates.json")
    .then(res => res.json())
    .then(posts => {
      const container = document.getElementById("updates-container");
      posts.forEach(post => {
        const card = document.createElement("div");
        card.className =
          "bg-white bg-opacity-5 border border-white/20 rounded-xl p-6 flex gap-6 backdrop-blur-md shadow-md";
        card.innerHTML = `
          <img src="${post.image}" alt="${post.title}" class="w-40 h-40 object-cover rounded-xl" />
          <div class="flex-1">
            <h2 class="text-2xl font-semibold mb-2">${post.title}</h2>
            <p class="text-gray-300 mb-3">${post.content}</p>
            <p class="text-sm text-gray-400">By ${post.author} • ${post.date}</p>
          </div>
        `;
        container.appendChild(card);
      });
    });
}
