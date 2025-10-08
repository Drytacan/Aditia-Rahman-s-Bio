const btn = document.querySelector(".menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if (!btn.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove("show");
  }
});
