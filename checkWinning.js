//Check for winnning results
import Board from './Board.js'
import gameBoard from './gameBoardArray.js'
import {playerTurn , players, startNewGame} from './playerInfo.js'


// Winner name will be displayed on the screen 
const playerWinText = document.querySelector(".playerWinText");
// Winner Container will be diplayed once player wins
const winnerBox = document.querySelector(".winnerBox");


// Check for winning results
function checkWinning() {
    for (const winningCombo of Board) {
      const { combo } = winningCombo;
      const tileValue1 = gameBoard[combo[0] - 1];
      const tileValue2 = gameBoard[combo[1] - 1];
      const tileValue3 = gameBoard[combo[2] - 1];
  
      if (tileValue1 != null && tileValue1 === tileValue2 && tileValue1 === tileValue3) {
  
        if(playerTurn == 0){
          playerWinText.textContent = players[1].name;
          winnerBox.style.visibility = "visible";
        }else{
          playerWinText.textContent = players[0].name;
          winnerBox.style.visibility = "visible";
        }
      }
    }
  
    // Check for a draw
    const allTileFilledIn = gameBoard.every((tile) => tile !== null); 
    if (allTileFilledIn) {
      playerWinText.textContent = "Its a draw!";
      winnerBox.style.visibility = "visible";

      // Restart Game
      startNewGame();
    }
  }

  export default  checkWinning;
  