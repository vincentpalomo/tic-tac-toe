let tile = document.querySelectorAll(".tile");
let statusText = document.querySelector("#statusText");
let reset = document.querySelector("#reset");

let state = false;

let board = [null, null, null, null, null, null, null, null, null]

let currentPlayer = "X"

buildInitialState()
  
  
function buildInitialState() {
  tile.forEach(tile => tile.addEventListener('click', tileClicked))
  console.log('clicked', tileClicked)
  state = true;
}
  //function to get the input of the tile clicked
function tileClicked () {
  let tileIndex = this.getAttribute("data-class-index")
  console.log("tile i:", tileIndex)

  updateTile(this, tileIndex);
}
  
// create function to update tile of current player 
function updateTile (tile, index) {
  board[index] = currentPlayer;
  tile.textContent = currentPlayer;
}

function changePlayer () {
  for {player[i]) 
}

// render
// function renderState() {

// }

// maybe a dozen or so helper functions for tiny pieces of the interface

// listeners
// function onBoardClick() {
  // update state, maybe with another dozen or so helper functions...

// //   renderState() // show the user the new state
// }
// const board = document.getElementById('board');
// board.addEventListener('click', onBoardClick); // etc

