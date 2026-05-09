const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");

closeBtn.addEventListener("click", () => {
  sidebar.classList.add("hidden");
});

menuBtn.addEventListener("click", () => {
  sidebar.classList.remove("hidden");
});
