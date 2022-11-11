let tile = document.querySelectorAll(".tile"); // get all the div tags with the tile class
let statusText = document.querySelector("#statusText"); // get the display for which players turn
let reset = document.querySelector("#reset"); // get the button for reset

let state = false; // running state of the board

// board of the tic tac toe in an array
let board = [
    [null, null, null], 
    [null, null, null], 
    [null, null, null]
]

// players in the game
let players = ["X", "O"]

//default player when starting the game will be X
let currentPlayer = "X"

// set win condition for the array?


buildInitialState()
  
// function to start the game  
function buildInitialState() {
  tile.forEach(tile => tile.addEventListener('click', tileClicked)) // adds an event on the tile clicked
  console.log('clicked', tileClicked)
  reset.addEventListener('click', resetGame) // adds an event to reset the game to the empty board
  statusText.textContent = `${currentPlayer}'s turn`;
  state = true; // setting true will make the game run
}

  //function to get the input of the tile clicked
function tileClicked (event) {
  let tileIndex = this.getAttribute("data-class-index") // clicking on a tile will give the index set in the HTML
  console.log("tile i:", tileIndex)

  let tile = event.target // gets the div in the HTML when you click on a tile
  console.log('tile clicked:', tile)
  tile.id = `${currentPlayer}` // will add the <div id="x" or "o" ... 
  if(tile.innerText != '') { // if there is a value in the string (X/O) you will not be able to click and switch the tile from either player
    return;
  }

  updateTile(this, tileIndex); // calling the function for the board tile and index
  console.log('this is:', this)
  console.log('tileIndex is:', tileIndex)
}
  
// create function to update tile of current player 
function updateTile (tile, index) {
  board[index] = currentPlayer; // the index in the array will be update to the currentPlayer variable
  // console.log("index value:", board[[index]])
  tile.textContent = currentPlayer; // updates the text of the tile from either X or O
  changePlayer()
}

// create function to change between player X and O
function changePlayer () {
    // for (let i = 0; i < players.length; i++) { // don't need loop since we got the value using player[]
        let playerX = players[0]
        let playerO = players[1]
        // console.log('player x:', playerX)
        // console.log('player o:', playerO)
        console.log('currentplayer:', currentPlayer)
        // currentPlayer = (currentPlayer == "X") ? "O" : "X"; // ternary       
        if (currentPlayer === playerX) {
          currentPlayer = playerO;
          statusText.textContent = `${currentPlayer}'s turn` // display player O turn
        } else {
          currentPlayer = playerX;
          statusText.textContent = `${currentPlayer}'s turn` // display player X turn
        }
    // }
    checkWinner()
}


// check winner function
function checkWinner () {
  let tileValues = board // will give back an array with all the values set when you click on a tile
  let playerX = players[0]
  let playerO = players[1]
  console.log('tile values:', tileValues) 
  console.log("tile value index 0:", tileValues[0])
   if (tileValues[0] && tileValues[0] === tileValues[1] && tileValues[1] === tileValues[2]) { // make own function for true or false
    console.log('currentplayer:', currentPlayer)
    if (currentPlayer !== playerX) {
    statusText.textContent = `X winner!`
   }else if (currentPlayer !== playerO) {
    statusText.textContent = `O winner`
   }
   return;


}

}



// render
// function renderState() {

// }

// function to reset game
function resetGame () {
    currentPlayer = "X"; // sets the player to default X
    board = [
        [null, null, null],  // clears the board of all values and returns to null
        [null, null, null], 
        [null, null, null]
    ];
    tile.forEach(tile => tile.textContent = ""); // returns the tiles (<div>X</div> --> <div></div>) to an empty element in HTML
    statusText.textContent = `${currentPlayer}'s turn` //displays current player to X
    state = true;
}

// maybe a dozen or so helper functions for tiny pieces of the interface

// listeners
// function onBoardClick() {
  // update state, maybe with another dozen or so helper functions...

// //   renderState() // show the user the new state
// }
// const board = document.getElementById('board');
// board.addEventListener('click', onBoardClick); // etc

