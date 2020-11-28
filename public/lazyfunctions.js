const navbarButton = document.querySelector("#nav-mobile");
const navLinks = document.querySelector(".nav-links");
const navLines = document.querySelector(".line1 .line2 .line3");

navbarButton.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  navbarButton.classList.toggle('opened')
});

const textbutton = document.querySelector(".togglerText");
const world = document.querySelector(".world");
const kittenWhoa = document.querySelector(".kitten-whoa");

textbutton.addEventListener("click", () => {
  textbutton.classList.toggle("toggled");
  world.classList.toggle("toggle");
  kittenWhoa.classList.toggle("toggle");
});

world.addEventListener("click", () => {
  world.classList.toggle("toggle");
  kittenWhoa.classList.toggle("toggle");
  textbutton.classList.toggle("toggled");
});
kittenWhoa.addEventListener("click", () => {
  world.classList.toggle("toggle");
  kittenWhoa.classList.toggle("toggle");
  textbutton.classList.toggle("toggled");
});
