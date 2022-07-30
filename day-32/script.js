let subs = document.querySelector(".discount");
let plus = document.querySelector(".count");
let number = document.querySelector(".number");
let start = 0;

subs.addEventListener("click", function() {
  number.classList.toggle("add");
  start -= 1;
  number.innerHTML = start;
});

plus.addEventListener("click", function() {
  number.classList.toggle("add");
  start += 1;
  number.innerHTML = start;
});
