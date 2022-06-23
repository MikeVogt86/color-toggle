const menu = document.querySelector(".menu-kleur");
const hamburger = document.querySelector(".fa-solid");

const home = document.querySelector(".home-btn");
const red = document.querySelector(".red-btn");
const orange = document.querySelector(".orange-btn");
const purple = document.querySelector(".purple-btn");
const green = document.querySelector(".green-btn");

hamburger.addEventListener("click", (e) => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});

