let frame = document.querySelector(".frame");
let white = document.querySelector(".white");
let green = document.querySelector(".green");


frame.addEventListener("click", function() {
  white.classList.toggle("normal");
  white.classList.toggle("big");
  green.classList.toggle("small");
  green.classList.toggle("normal");
})
