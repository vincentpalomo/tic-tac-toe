let tile = document.querySelectorAll(".tile");
let statusText = document.querySelector("#statusText");
let reset = document.querySelector("#reset");

let state = false;

let board = [
    [null, null, null], 
    [null, null, null], 
    [null, null, null]
]

let players = ["X", "O"]

let currentPlayer = "X"

buildInitialState()
  
  
function buildInitialState() {
  tile.forEach(tile => tile.addEventListener('click', tileClicked))
  console.log('clicked', tileClicked)
  reset.addEventListener('click', resetGame)
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
  changePlayer()
}

// create function to change between player X and O
function changePlayer () {
    for (let i = 0; i < players.length; i++) {
        let playerX = players[0]
        let playerO = players[1]
        // console.log('player x:', playerX)
        // console.log('player o:', playerO)
        console.log('currentplayer:', currentPlayer)
        // currentPlayer = (currentPlayer == "X") ? "O" : "X"; // ternary
        if (currentPlayer == playerX) {
            currentPlayer = playerO;
        } else if (currentPlayer == playerO) {
           currentPlayer = playerX;
        }
    }

}

// changePlayer()
// render
// function renderState() {

// }

// function to reset game
function resetGame () {
    currentPlayer = "X";
    board = [
        [null, null, null], 
        [null, null, null], 
        [null, null, null]
    ];
    tile.forEach(tile => tile.textContent = "");
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

