// CREATE BOARD:
let createBoard = function() {
  // Create a <div> element:
  let boardContainer = document.createElement("div");
  // Add an ID 'board' for container:
  boardContainer.id = "boardContainer";
  // Insert the element to the body:
  document.body.appendChild(boardContainer);

  // Select the container element with an id "board"
  let board = document.getElementById("boardContainer");

  // For-loop -> create element -> insert element to boardContainer.
  for(let i=1; i <= 76; i++) {
    // Create an <div> element
    let boardCell = document.createElement("div");
    // add Class to the created element:
    boardCell.classList.add("boardCell");
    // Innertext value:
    boardCell.innerText = i;
    // Add to board:
    board.appendChild(boardCell);
  }
}

// CREATE BUTTON:
let createButton = function() {
  // Create a <button> element:
  let buttonElement = document.createElement("button");
  // Add an ID to the button element:
  buttonElement.id = "pickANumber";
  // Add innerText to the button element:
  buttonElement.innerText = "Random number!";

  // Add button element to the body:
  document.body.appendChild(buttonElement);

  // Select the button element and add function to run for eventListener
  // onclick:
  let button = document.getElementById("pickANumber");
  button.onclick = randomNumbers;
}

// Function to run when button clicked:
let randomNumbers = function() {
  // Get all the board elements, which contain the number:
  let boardNumbers = document.getElementsByClassName("boardCell");

  // Randomly select an element which contains the number between 1-76:
  let selectedNumberElement = boardNumbers[Math.ceil(Math.random() * 76)];

  // Add class 'selected' to the randomly selected element:
  selectedNumberElement.classList.add("selected");
}


window.onload = function() {
  createBoard();
  createButton();
}


// EXTRA: 
// Take ALWAYS a new number (eg. avoid randoming the number 10 3 times)
// Create a USER BOARD with 24 randomized numbers that highlights as the main board does
// Let the user choose HOW MANY user boards he's willing to play with and create them.