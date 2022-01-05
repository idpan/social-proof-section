const menuBtn = document.querySelector(".menu-btn");
const navbarMenu = document.querySelector(".navbar-menu");
const nav = document.querySelector(".navbar");
const projectMenu = document.querySelector(".projects-menu");
const projectElement = document.querySelector(".project-element");

let menuOpen = false;
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("open");
  if (menuBtn.classList.contains("open")) {
    navbarMenu.style.transform = "scaleY(1)";
  } else {
    navbarMenu.removeAttribute("style");
  }
});
function projectElementDropdown() {
  if (projectElement.classList.contains(".open")) {
    projectElement.style.height = "250px";
  } else {
    projectElement.style.height = "0px";
  }
}

if (window.innerWidth <= 768) {
  projectMenu.addEventListener("click", function () {
    projectElement.classList.toggle(".open");
    projectElementDropdown();
  });
} else {
  projectMenu.onmouseenter = function () {
    projectElement.classList.add(".open");
    projectElementDropdown();
  };
  projectMenu.onmouseleave = function () {
    projectElement.classList.remove(".open");
    projectElementDropdown();
  };
}
