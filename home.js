const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", () => {

  sidebar.classList.toggle("hidden");

  menuBtn.classList.toggle("active");

});
