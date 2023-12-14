// note: all of the variables are global variables
var die1, die2, dieSum, balance, banner, outcome, die1Name, die2Name, numRolls, balSentence; // define variables
balance = 0;  // initial value
var die1Image = new Image();
var die2Image = new Image();



function rollDice() {
    die1 = Math.floor(Math.random() * 6) + 1;
    die2 = Math.floor(Math.random() * 6) + 1;
    dieSum = die1 + die2;

    // set the dice images based on the roll
    die1Image = document.querySelectorAll("img")[0];
    die1Name = "images/dice" + die1 + ".png";
    die1Image.setAttribute("src", die1Name);

    die2Image = document.querySelectorAll("img")[1];
    die2Name = "images/dice" + die2 + ".png";
    die2Image.setAttribute("src", die2Name);
}

function calculate(){
    // in h3 report calculations
    if (dieSum <= 5){
      balance -= 5;
    } else if (dieSum >= 9){
      balance += 5;
    } 

    // Report the outcome:
    banner = die1 + " + " + die2 + " is: " + dieSum + "<br>";
    document.querySelector("h3").innerHTML += banner;
}

function whoWon() {
    // in h3 report how much money was won or lost and the balance
    if (balance < 0){
      balSentence = "Your balance: -$" + Math.abs(balance) + ".";
      outcome = "<br>You lose, you owe me " + Math.abs(balance) + " dollars.<br><br>";
    } else if (balance > 0){
      balSentence = "Your balance: +$" + Math.abs(balance) + "."
      outcome = "<br>You win, I owe you " + Math.abs(balance) + " dollars.<br><br>";
    } else {
      balSentence = "Your balance: $0"
      outcome = "Its a draw, nobody wins or loses.<br><br>";
    }

    // Report the outcome:
    document.querySelector("h3").innerHTML += "<br>" + outcome;
    document.querySelector(".balance").innerHTML = balSentence;
}

/*function updateBalance(){
  return balance;
}*/

function letsPlay(){
  numRolls = document.getElementById('input').value;
  balance = 0;
  for(let i = 0; i < numRolls; i++){
    rollDice();
    calculate();
  }
  whoWon();
}

function letsPlayAgain(){
  location.reload();
  /*numRolls = 0;
  balance = 0;
  let games = 0;
  while (numRolls > games){
    rollDice();
    whoWon();
    games++;
  }
  updateBalance();*/
}


