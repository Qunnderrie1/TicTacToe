import player from "./player.js";
import gameBoard from "./gameBoardArray.js";
import winningCombos from "./Board.js";
import {playerInfo, tileClicked , reStartGame, playerTurn} from "./playerInfo.js";

// ALL COMMENTED OUT CODE WILL BE USED FOR LATER UPDATE TO ADD SINGLE PLAYER VS AI MODE


const startGameContainer = document.querySelector(".startGameContainer");
const reStartBtn = document.querySelector(".reStartGameBtn");
const playerContainer = document.querySelector(".playerContainer");
const startBtn = document.querySelector(".startBtn");


// const playerText = document.querySelector(".playerText");
// const playerValue = document.querySelector(".playerOptionsMenu");
// const nextBtn = document.querySelector(".nextBtn");
// const modeText = document.querySelector(".modeText");
// const gameBox = document.querySelector(".gameBox");
// const player2OptionalContainer = document.querySelector('.player2OptionalContainer')
const tiles = document.querySelectorAll(".tile");


// Onload Event
window.onload = () => {
  console.log(gameBoard)
  startGameContainer.style.visibility = "visible";
};

// nextBtn.addEventListener("click", playerOp);

// function playerOp() {


//   if (playerValue.children[0].selected) {
//     playerContainer.style.visibility = "hidden";
//     startGameContainer.style.visibility = "visible";
//     modeText.textContent = "You have choosen Single Player Mode";
//     player2OptionalContainer.style.visibility = "hidden"

//   } else if (playerValue.children[1].selected) {
//     playerContainer.style.visibility = "hidden";
//     startGameContainer.style.visibility = "visible";
//     modeText.textContent = "You have choosen Multiplayer Player Mode";

//   } else {
//     console.log("ERROR!");
//   }

// }
// nextPlayer.addEventListener('click' , playerInfo)


// Restart Button once a player wins or the game come to a draw
reStartBtn.addEventListener("click", reStartGame);

// Start Button is the start of the game once players entered in their names 
startBtn.addEventListener("click", playerInfo);

// Looping through each tiles on the game UI that have been clicked 
tiles.forEach((gameBtns) => {
  gameBtns.addEventListener("click", tileClicked);
});

