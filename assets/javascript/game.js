

//**************variables*****************
var wordBank = ["storm", "wolverine", "cyclops", "iceman", "phoenix", 
"nightcrawler", "beast", "rogue", "psylocke", "colossus", 
"shadowcat", "dazzler", "professorx", "magneto", "mystique", "toad",
"destiny", "pyro", "blob", "polaris", "callisto", "caliban", "deadpool", "archangel", 
"warpath", "banshee", "havok", "longshot" , "jubilee", "magik",
"husk", "legion", "anole", "mirage", "cannonball", "wolfsbane", "warlock", "cypher",
"sunspot", "karma", "forge"];

var wins = 0;
var losses = 0;
var turns = 16;
var spaces = [];
var usedLetters = [];
var answer = wordBank[Math.floor(Math.random()*wordBank.length)];
var loserText = "You lost! Now all the Mutants are dead, YOU MONSTER! Refresh to play again."
var currentWord = answer.split('');
var correctGuess =[];


//****************Functions***************


//push spaces to display
function pushSpaces(){
		for (var i = 0; i < currentWord.length; i++) {
			spaces.push("_");
			var display = spaces.join(" ");
			document.querySelector('#gameContent').innerHTML = display;

			}
		}


	//still working on functionality but in theory this would send a new word to the
	//console (and eventually the display with added code) if the index of 
	//the displayed spaces array is zero and it actually worked. 
function newWord(){
	if (spaces.indexOf('_') === -1){
		
	}
}

// compares user input with selected word and replaces displayed spaces with characters

 	function checkWord(){	
	 	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	 		for (var i = 0; i < currentWord.length; i++) {
	 			if (currentWord[i] === userGuess){
	 				spaces.splice(i, currentWord[i] - currentWord, userGuess);
	 				usedLetters.push(userGuess);
	 				// console.log("This is working" + spaces);
	 				// console.log("Working" + usedLetters);'
	 				console.log(answer);
	 				pushSpaces();
	 			}
	 			
	 			else if(currentWord[i] !== userGuess) {
	 				if (usedLetters.indexOf(userGuess) === -1){
	 						usedLetters.push(userGuess);
	 						turns--;
	 						// displayCounter();
	 				}
				}
	 			
	 		}
 	
	}

	// function changeCounters(){
	// 	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	// 		for (var i = 0; i < currentWord.length; i++) {
				
	//  		}
 // 	}

//when page loads, random word from array is selected logs to console.
window.onload = function() {
	// var currentWord = answer.split('');
		console.log(currentWord);
		pushSpaces(currentWord);
		
		// displayCounters();
}

//reads user input and starts game action
 document.onkeyup = function(event) {

 		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
 		console.log(userGuess);
 		
 
 //check to see if answer contains user guess and replacing underscores in display		
 
		checkWord();  //having this in the onkeyup event cause the answer word
						// populated onload to be pushed to the spaces array 
						//every time user presses a key. I will have to 
						//revisit this for sure.  
 
		

	//This ends the game. 

 			if (turns === 0){
 				document.write('<p id="youLost">' + loserText +'</p>')
 			}
 		
//displays counters in HTML

 		var html = "<h1>Mutants Saved:</h1>" + 
		"<p>Wins: " + wins + "</p>" +
		"<p>Losses: " + losses + "</p>" +
		"<p>Turns: " + turns + "</p>" +
		"<p>Letters Used: " + usedLetters + "</p>";
		
		document.querySelector('#counters').innerHTML = html;
}



