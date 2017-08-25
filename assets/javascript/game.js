// alert("Are you ready?")
// alert("Type a letter on the keyboard and try to guess what letter I'm thinking of...")

// GLOBAL VARIABLES
// Arrays and variables for holding data
// ========================================================================

	var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
	var wins = 0;
	var losses = 0;
	var guesses = 9;
	var guessDisplay = document.getElementById("guesses");
	var winsCount = document.getElementById("wins");
	var lossCount = document.getElementById("losses");
	var playerGuess = "";
	var computerGuess = "";
	var displayLetter = [];


// FUNCTIONS
// ========================================================================
// Computer picks a random letter

	computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
		console.log(computerGuess)

// Function for restarting the game
	function restartGame(){
		guesses = 9;
		displayLetter = [];
		computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
		console.log(computerGuess)
	}
	
// User presses key

	document.onkeyup = function (event) {

		playerGuess = event.key;

		console.log(playerGuess)

// Letter is incorrect
	// Guesses decrease
		if (guesses === 0){
			losses++;
			document.querySelector("#losscount").innerHTML="Losses: "+losses;
			console.log(losses);
			alert ("You lose. Try again.")
			restartGame();
		}

		else if (playerGuess !== computerGuess){
			alert ("Incorrect. Try again");
			guesses--;
			document.querySelector("#guesscount").innerHTML="Guesses left: "+guesses;
			displayLetter.push(playerGuess);
			document.querySelector("#lettersused").innerHTML="Guesses: "+displayLetter+" ";
		}

// Letter is correct	
	// Wins increase, guesses reset, game resets	

		else if (playerGuess === computerGuess){
			alert ("Correct! You got it!");
			wins++;
			document.querySelector("#wins").innerHTML="Wins: "+wins;
			restartGame();
		}


		else {
			console.log("000");
		}
}

// Guesses run out, player loses, game resets, guesses so far clears

// Display: guesses that the user has already typed (guesses so far), reset when game resets

// Limit user options to only letter keys

// If not letter key, alert please type a letter

//






// Problems with:
	// createElement, inner.HTML, appendChild, what is DOM

// ========================================================================







// MAIN PROCESS


	// var playerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
	// var playerGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
		
// Key press is detected


		// }
		

// Win count goes up

// Losses count goes up

		// if (computerChoices.indexOf(playterGuess))

		

