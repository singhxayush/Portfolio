const hamburger_menu = document.querySelector(".hamburger-menu");
const home_btn = document.querySelector(".home");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

home_btn.addEventListener("click", () => {
  container.classList.toggle("active");
});


document.querySelector.addEventListener('keypress', function(e) {
  if (e.key == "Escape") {
    container.classList.toggle("active");
  }
});