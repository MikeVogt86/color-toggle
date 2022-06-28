const body = document.querySelector("colors");
const menu = document.querySelector(".menu-kleur");
const hamburger = document.querySelector(".fa-solid");

const home = document.querySelector(".home-btn");
const red = document.querySelector(".red-btn");
const orange = document.querySelector(".orange-btn");
const purple = document.querySelector(".purple-btn");
const green = document.querySelector(".green-btn");

var links =document.querySelectorAll(".menu-options");




hamburger.addEventListener("click", (e) => {
  menu.classList.toggle("active");
});

home.addEventListener("click", (e) => {
  menu.classList.toggle("active");
  document.body.style.backgroundColor="grey";
});

red.addEventListener("click", (e) => {
  menu.classList.toggle("active");
  document.body.style.backgroundColor="red";
});

orange.addEventListener("click", (e) => {
  menu.classList.toggle("active");
  document.body.style.backgroundColor="orange";
});

purple.addEventListener("click", (e) => {
  menu.classList.toggle("active");
  document.body.style.backgroundColor="purple";
});

green.addEventListener("click", (e) => {
  menu.classList.toggle("active");
  document.body.style.backgroundColor="green";
});

hamburger.addEventListener("mouseover", (e) => {
  menu.classList.toggle("active");
});


links.addEventListener("click", (e) => {
  menu.classList.toggle("active");
  document.body.style.backgroundColor="grey";
  document.body.style.backgroundColor="red";
  document.body.style.backgroundColor="orange";
  document.body.style.backgroundColor="purple";
  document.body.style.backgroundColor="green";
  For (i=1; 1<=Links.Length;i++) {

    console.log("this is link number" +i);
  }
});


