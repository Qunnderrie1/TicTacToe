import player from "./player.js";
import gameBoard from "./gameBoardArray.js";
import Board from "./Board.js"
import checkWinning from "./checkWinning.js";

const startGameContainer = document.querySelector(".startGameContainer");
const player2Name = document.querySelector(".player2Name");
const player1Name = document.querySelector(".player1Name");
const playerWinText = document.querySelector(".playerWinText");
const winnerBox = document.querySelector(".winnerBox");
const tiles = document.querySelectorAll(".tile");


// players array object to stored players in the players array
let players = [];

// To keep track of players turn
let playerTurn = 0;

// Player method for info input 
function playerInfo() {

    // Adding players name to the game 
    let gamePlayer1 = new player(player1Name.value, "X");
    let gamePlayer2 = new player(player2Name.value , 'O')
  

    if(!player1Name.value || !player2Name.value){
      alert("Please enter in all values")
      console.log("Error")
    }else{
        players.push(gamePlayer1);
        players.push(gamePlayer2);
        startGameContainer.style.visibility = "hidden"
        console.log("No Error")
    }
    console.log(players)

    // Input Only 2 players in the array
    // if (players.length == 1) {
    //   startGameContainer.style.visibility = "hidden";
    // }
  }


  // Method for the current tile that has been clicked and update the gameboard and game UI
function tileClicked(event) {
  // get current tile/button that has been clicked
  const tile = event.target;
  // get current tile index number that was clicked
  const tileNumber = tile.dataset.index;

  if (playerTurn == 0) {
    tile.innerText = players[playerTurn].marker;
    // Player X has enter a spot on the gameboard
    gameBoard[tileNumber - 1] = players[playerTurn].marker;
    tile.disabled
    playerTurn = 1;
  } else {
    // Player O has enter a spot on the gameboard
    tile.innerText = players[playerTurn].marker;
    gameBoard[tileNumber - 1] = players[playerTurn].marker;
    playerTurn = 0;
  }

  // Calling the checkWinning to see if a player has won the match
  checkWinning()
}

// Start a new game method
function startNewGame() {
    tiles.forEach((tile) => (tile.innerText = ""));
    gameBoard.fill(null);
    playerTurn = 0;
  }
// Restart a new game method
function reStartGame() {
    winnerBox.classList.remove("startGameContainer");
    winnerBox.style.visibility = "hidden";
    startNewGame();
  }

  export {playerInfo , tileClicked , reStartGame , playerTurn , players, startNewGame}

