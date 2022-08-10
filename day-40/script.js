let pic = document.querySelectorAll(".pic");

pic.forEach(e => {
  e.addEventListener("click", () =>
    e.classList.toggle("clicked"))
});