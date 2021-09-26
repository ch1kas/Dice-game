

function generateRandomNumber () {
  var randomNumber = Math.floor((Math.random()*6) + 1);
  return randomNumber
}
var firstRandomNum = generateRandomNumber()
var secondRandomNum = generateRandomNumber()
var firstPlayerDice = "images/dice" + firstRandomNum + ".png";
var secondPlayerDice = "images/dice" + secondRandomNum + ".png";

document.querySelector(".img1").src = firstPlayerDice;
document.querySelector(".img2").src = secondPlayerDice;

if (firstRandomNum > secondRandomNum) {
  document.querySelector("h1").textContent = "Player 1 Wins!";
} else if (secondRandomNum > firstRandomNum) {
  document.querySelector("h1").textContent = "Player 2 Wins!";
} else {
  document.querySelector("h1").textContent = "Draw!";
}
