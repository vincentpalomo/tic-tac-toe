let tile = document.querySelectorAll(".tile"); // get all the div tags with the tile class
let statusText = document.querySelector("#statusText"); // get the display for which players turn
let reset = document.querySelector("#reset"); // get the button for reset

let state = false; // running state of the board

// board of the tic tac toe in an array
let board = [
    [null, null, null, 
    null, null, null, 
    null, null, null]
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
    if (state === false) {
      document.getElementById
    }
}

//winning boxes = 
// [0,1,2]row
// [3,4,5]row
// [6,7,8]row
// [0,3,6]column
// [1,4,7]column
// [2,5,8]column
// [0,4,8]diagonally 
// [2,4,6]anti-diagonally


// check winner function
// function checkWinner () {
//   let tileValues = board // will give back an array with all the values set when you click on a tile
//   let playerX = players[0]
//   let playerO = players[1]
//   console.log('tile values:', tileValues) 
//   console.log("tile value index 0:", tileValues[0])
//   if (tileValues[0] && tileValues[0] === tileValues[1] && tileValues[1] === tileValues[2] || //rows
//       tileValues[3] && tileValues[3] === tileValues[4] && tileValues[4] === tileValues[5] ||
//       tileValues[6] && tileValues[6] === tileValues[7] && tileValues[7] === tileValues[8] ||
//       tileValues[0] && tileValues[0] === tileValues[3] && tileValues[3] === tileValues[6] || //columns
//       tileValues[1] && tileValues[1] === tileValues[4] && tileValues[4] === tileValues[7] ||
//       tileValues[2] && tileValues[2] === tileValues[5] && tileValues[5] === tileValues[8] ||
//       tileValues[0] && tileValues[0] === tileValues[4] && tileValues[4] === tileValues[8] || //diagonals
//       tileValues[2] && tileValues[2] === tileValues[4] && tileValues[4] === tileValues[6] ) { // make own function for true or false
//       if (tileValues[0] && tileValues[1] && tileValues[2] && tileValues[3] && tileValues[4] && tileValues[5] && tileValues[6] && tileValues[7] && tileValues[8]) {
//           statusText.textContent = `Draw!`
//         }    
//     console.log('currentplayer:', currentPlayer)
//     if (currentPlayer !== playerX) {
//     statusText.textContent = `X wins!`
//    }else if (currentPlayer !== playerO) {
//     statusText.textContent = `O wins!`
//    }else {
//     statusText.textContent = `Draw!`
//    }

//   }

// }
let winner = null;

function checkWinner () {
  let tileValues = board
  console.log('board',board)

  row1 = [tileValues[0], tileValues[1], tileValues[2]]
  row2 = [tileValues[3], tileValues[4], tileValues[5]]
  row3 = [tileValues[6], tileValues[7], tileValues[8]]

  col1 = [tileValues[0], tileValues[3], tileValues[6]]
  col2 = [tileValues[1], tileValues[4], tileValues[7]]
  col3 = [tileValues[2], tileValues[5], tileValues[8]]

  dia1 = [tileValues[0], tileValues[4], tileValues[8]]
  dia2 = [tileValues[2], tileValues[4], tileValues[6]]
  
  console.log('rows', row1, row2, row3)
  // console.log('cols', col1, col2, col3)
  // console.log('dia', dia1, dia2)

  // see if rows are true
  if (row1[0] && row1[0] === row1[1] && row1[1] === row1[2]) {
    winner = row1[0];
    console.log('winner in row1', winner);
    statusText.textContent = `${winner} wins!`;
  } else if (row2[0] && row2[0] === row2[1] && row2[1] === row2[2]) {
    winner = row2[0];
    console.log('winner in row2', winner);
    statusText.textContent = `${winner} wins!`;
  } else if (row3[0] && row3[0] === row3[1] && row3[1] === row3[2]) {
    winner = row3[0];
    console.log('winner in row3', winner)
    statusText.textContent = `${winner} wins!`
  } else if (col1[0] && col1[0] === col1[1] && col1[1] === col1[2]) {
    winner = col1[0];
    console.log('winner in col1', winner);
    statusText.textContent = `${winner} wins!`;
  } else if (col2[0] && col2[0] === col2[1] && col2[1] === col2[2]) {
    winner = col2[0];
    console.log('winner in col2', winner);
    statusText.textContent = `${winner} wins!`;
  } else if (col3[0] && col3[0] === col3[1] && col3[1] === col3[2]) {
    winner = col3[0];
    console.log('winner in col3', winner);
    statusText.textContent = `${winner} wins!`;
  } else if (dia1[0] && dia1[0] === dia1[1] && dia1[1] === dia1[2]) {
    winner = dia1[0];
    console.log('winner in dia1', winner);
    statusText.textContent = `${winner} wins!`;
  } else if (dia2[0] && dia2[0] === dia2[1] && dia2[1] === dia2[2]) {
    winner = dia2[0];
    console.log('winner in dia2', winner);
    statusText.textContent = `${winner} wins!`;
  } else if (tileValues[0] && tileValues[1] && tileValues[2] && tileValues[3] && tileValues[4] && tileValues[5] && tileValues[6] && tileValues[7] && tileValues[8]) {
    statusText.textContent = `Draw!`
  }
}
// render
// function renderState() {

// }

// function to reset game
function resetGame () {
    currentPlayer = "X"; // sets the player to default X
    board = [
        [null, null, null,  // clears the board of all values and returns to null
        null, null, null, 
        null, null, null]
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

