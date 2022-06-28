/*const body = document.querySelector("colors");*/
const menu = document.querySelector(".menu-kleur");
const hamburger = document.querySelector(".fa-solid");

const home = document.querySelector(".menu-options");
const red = document.querySelector(".menu-options");
const orange = document.querySelector(".menu-options");
const purple = document.querySelector(".menu-options");
const green = document.querySelector(".menu-options");

const links = document.querySelectorAll(".menu-options");

hamburger.addEventListener("click", (e) => {
  menu.classList.toggle("active");
});

/*home.addEventListener("click", (e) => {
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
});*/

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (event) {
    document.write(event.target.value);
  });
}

