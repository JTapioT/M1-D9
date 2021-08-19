let createBoard = function() {
  // Select the <div> element with an id "board"
  let board = document.getElementById("board");

  // Create an <div> element
  let boardCell = document.createElement("div");

  // Insert the newly created element 76 times to make a board
  for(let i=0; i <= 76; i++) {
    boardCell.innerText = i;
    board.appendChild(boardCell);
  }
}

window.onload() {
  createBoard();
}