//set gameState to gameStateRollDice
//Players rolls 2 dice - gameStateRollDice
//Players chooses dice orientation -gameStateChooseDice
//Prompt to choose between 1 & 2, will show error msg if input is not 1 or 2
//Add dice number as string(to not add number) then convert to numerals using Number()
//Compare combined numbers accross all players and higher combined number wins
// Add score to winner
// Press submit button to roll dice (set gameState to gameStateRollDice)

var gameStateRollDice = "gamestate is roll dice";
var gameStateChooseDice = "game state is choose dice";
var gameState = gameStateRollDice;

var playerDiceRoll = [];

var rollDice = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;
  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = Math.floor(randomDecimal) + 1;
  console.log("dicenumber = " + diceNumber);
  return diceNumber;
};

var rollDiceForPlayer = function () {
  var counter = 0;
  while (counter < 2) {
    playerDiceRoll.push(rollDice()); //using roll to generate numbers, using push() to add the numbers to playerDiceRoll string created
    counter++;
  }
  console.log(playerDiceRoll);
  return (
    "Dice 1 = " +
    playerDiceRoll[0] +
    "<br>Dice 2 = " +
    playerDiceRoll[1] +
    "<br Please input 1 (Dice1) or 2 (Dice2) to pick the dice result as the first digit"
  );
};
var playerScoreCounter = function (playerInput) {
  if (playerInput != 1 && playerInput != 2) {
    console.log("error input");
    return (
      "Please enter 1 or 2 only. <br> Your dice rolls are: " +
      playerDiceRoll[0] +
      " & " +
      playerDiceRoll[1]
    );
  }
  if (playerInput == 1) {
    console.log("input 1");
    var playerScore = Number(
      String(playerDiceRoll[0]) + String(playerDiceRoll[1])
    );
    console.log(playerScore);
    return "Your score is: " + playerScore;
  }
  if (playerInput == 2) {
    console.log("input 2");
    var playerScore = Number(
      String(playerDiceRoll[1]) + String(playerDiceRoll[0])
    );
    console.log(playerScore);
    return "Your score is: " + playerScore;
  }
};
var main = function (input) {
  console.log(gameState);
  if (gameState == gameStateRollDice) {
    gameState = gameStateChooseDice;
  }
  console.log(rollDiceForPlayer());
  console.log(gameState);

  if (gameState == gameStateChooseDice) {
    myOutputMessage = playerScoreCounter(input);

    return myOutputMessage;
  }
};
//hello
