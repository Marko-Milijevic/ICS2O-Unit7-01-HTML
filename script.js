//This connects the "Guess" button to "random" function
document.getElementById('button').addEventListener ('click', randomizer)
let randomnumber = 0
let userGuess = 0

function randomizer () {
  //This allows my program to collect the number the user has entered and changes it into a integer
  userGuess = document.getElementById('input').value
  userGuess = parseInt(userGuess)
  //This allows the user to pick an integer between 0 and 6
  randomnumber = (Math.random() * 6) + 1
  randomnumber = parseInt(randomnumber)
  //This compares the user's guess and the random number that my program has chosen. If the user guesses correctly, then my program will display some text that says "You win!"
  if (userGuess == randomnumber) {
    document.getElementById('answer').innerHTML = "You win!"
  }
  //This compares the user's guess and the random number that my program has chosen. If the user guesses incorrectly, then my program will display some text that says "You lose!"
  if (userGuess != randomnumber) {
    document.getElementById('answer').innerHTML = "You lose!"
  }
}