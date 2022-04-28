let color = "black";

function populateBoard(size) {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => {
    div.remove();
  });
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = "#fff";
    square.addEventListener("mouseover", colorSquare);
    board.insertAdjacentElement("beforeend", square);
  }
}

function changeSize(input) {
  if (input >= 2 && input <= 100) {
    populateBoard(input);
  } else {
    console.log("enter number between 2 and 100");
  }
}

function randomRgbColor() {
  let rng = Math.floor(Math.random() * 256);
  return rng;
}

function colorSquare() {
  if (color === "random") {
    this.style.backgroundColor = `rgb(${randomRgbColor()},${randomRgbColor()},${randomRgbColor()})`;
  } else {
    this.style.backgroundColor = color;
  }
}

function changeColor(choice) {
  color = choice;
}
