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

// CREATE USER BOARD:
let createUserBoard = function() {
  // CREATE CONTAINER:
  let userBoardContainer = document.createElement("div");
  userBoardContainer.id = "userBoard";
  document.body.appendChild(userBoardContainer);
  
  // GET THE NEWLY CREATED CONTAINER ELEMENT:
  let userBoard = document.getElementById("userBoard");

  // ADD TITLE:
  let userBoardTitle = document.createElement("h2");
  userBoardTitle.innerText = "User board";
  userBoardTitle.style.textAlign = "center";
  userBoard.appendChild(userBoardTitle);

  // ADD THE CELLS:
  for(let i=1; i <= 24; i++) {
    let userBoardCell = document.createElement("div");
    userBoardCell.classList.add("boardCell");

    let randomNumber = Math.ceil(Math.random() * 76);
    userBoardCell.innerText = randomNumber;

    userBoard.appendChild(userBoardCell);
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

// CREATE RESET BUTTON:
let resetButton = function() {
  let buttonElement = document.createElement("button");
  buttonElement.id = "resetBtn";
  buttonElement.innerText = "Reset the board!";
  document.body.appendChild(buttonElement);

  let resetButton = document.getElementById("resetBtn");
  resetButton.onclick = function() {
    let boardElements = document.getElementsByClassName("boardCell");
    for(let element of boardElements) {
      element.classList.remove("selected");
    }
  }
}

// Maybe create re-usable user-board buttons. Repeating steps.
// CREATE USERBOARD BUTTON:
let userBoardButton = function() {
  let userBoardBtnElement = document.createElement("button");
  userBoardBtnElement.classList = "userBoardBtn";
  userBoardBtnElement.innerText = "Random number!";
  userBoardBtnElement.display = "inline-block";

  let userBoardBtnContainer = document.createElement("div");
  userBoardBtnContainer.id = "userBoardBtnContainer"

  let userBoard = document.getElementById("userBoard");
  userBoard.appendChild(userBoardBtnContainer);
  userBoardBtnContainer.appendChild(userBoardBtnElement);
}

// CREATE USERBOARD RESET BUTTON:
let userBoardResetButton = function() {
  let userBoardResetBtn = document.createElement("button");
    userBoardResetBtn.classList = "userBoardResetBtn";
    userBoardResetBtn.innerText = "Reset!";
    userBoardResetBtn.display = "inline-block";

  let userBoardBtnContainer = document.getElementById("userBoardBtnContainer");
  userBoardBtnContainer.appendChild(userBoardResetBtn);
}


// Function to run when button clicked:
let randomNumbers = function() {
  // Get all the board elements, which contain the number:
  let boardNumbers = document.getElementsByClassName("boardCell");

  // Take Always a new number:
  
  // Loop through the container element full of elements with numbers:
  for (let j = 0; j < boardNumbers.length; j++) {
  // Randomly select an element which contains the number between 1-76:
  let selectedNumberEl = boardNumbers[Math.floor(Math.random() * 76)];
  // If the number has class 'selected' - continue with next iteration:
  if(selectedNumberEl.classList.contains("selected")) {
      continue;
    } else {
      // Add class 'selected' to the randomly selected element:
      selectedNumberEl.classList.add("selected");
      // Break out from the loop!
      // Otherwise this will carry on and go over every number
      // and color the element!
      break;
    }
  }
}


window.onload = function() {
  createBoard();
  createButton();
  resetButton();
  createUserBoard();
  userBoardButton();
  userBoardResetButton();
}


// EXTRA: 
// Create a USER BOARD with 24 randomized numbers that highlights as the main board does
// Let the user choose HOW MANY user boards he's willing to play with and create them.