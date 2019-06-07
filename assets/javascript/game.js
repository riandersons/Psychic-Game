console.log('hi from js file')

let winCount = 1;
 let lossCount = 0;
 let guessesRemaining = 10;
 let guessedLetters = [];
//define variables for game play
 // set up array for computer to choose from
 let alphabet =
     ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q"
         , "r", "s", "t", "u", "v", "w", "x", "y", "z"];

 // set up the computer to pick a random indexed value from aray
 let randomIndex = Math.floor(Math.random() * alphabet.length);
 let computerChoice = alphabet[randomIndex];

 console.log("computer choice  ", computerChoice);

 // add a listener for the user to press a key
 document.onkeyup = function (event) {
     let userChoice = event.key;

     // reset computer choice if the user loses
     if (guessesRemaining <= 0) {
         lossCount++;
         document.getElementById("lossCount").innerHTML = lossCount++;
         console.log("You lost!");
         //   alert("You lost!");
         guessesRemaining = 9;
         guessedLetters = [];
         document.getElementById("guessedLetters").innerHTML = guessedLetters;
         document.getElementById("guessesRemaining").innerHTML = 10;
         randomIndex = Math.floor(Math.random() * alphabet.length);
         computerChoice = alphabet[randomIndex];
         console.log("computer choice  ", computerChoice);
     }
     // compares the randomly selected computer choice and user choice
     if (computerChoice === userChoice) {
         console.log("You won!");
         //   alert("You won!");
         document.getElementById("winCount").innerHTML = winCount++;
         guessedLetters = [];
         document.getElementById("guessedLetters").innerHTML = guessedLetters;
         randomIndex = Math.floor(Math.random() * alphabet.length);
         computerChoice = alphabet[randomIndex];
         console.log("computer choice  ", computerChoice);
         guessesRemaining = 10;
         document.getElementById("guessesRemaining").innerHTML = 10;
         console.log("computer choice  ", computerChoice);
     }
     else {
         console.log("Guess again!");
         document.getElementById("guessesRemaining").innerHTML = guessesRemaining--;
         guessedLetters.push(userChoice);
         document.getElementById("guessedLetters").innerHTML = guessedLetters;
     }
 }