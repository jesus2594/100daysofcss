let horizontial = document.querySelector(".horizontial");
let vertical = document.querySelector(".vertical");

addHorizons();
addVerticals();

function addHorizons() {
  for (let i = 0; i < 100; i++) {
    let span = document.createElement("span");
    horizontial.appendChild(span);
    span.classList.add("line-h");
  }
}

function addVerticals() {
  for (let i = 0; i < 100; i++) {
    let span = document.createElement("span");
    vertical.appendChild(span);
    span.classList.add("line-v");
  }
}
