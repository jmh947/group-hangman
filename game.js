//set variables 
//      userGuess
//      words array 
//      selectedWord
//      splitSelectedWord 
//      var underscoresArray = [];
//      remainingGuesses
//      lettersGuessed
//      wins
//      losses

// set functions

//      1)function start game
//          a)set remaining guesses to 15
//          b)set letters guessed to empty (maybe make lettersGuessed an array)
//          c) run function getRandomWord

//      2) function getRandomWord
//          a)pick random word from words array and set it to selectedWord
//          b)split selected word so we can get individual characters

//      3) function getUnderscores
//          a)run a for loop to set an "_" for each character in splitSelectedWord.length
//          b) push "_" for each letter in the loop into an array ()

//      4)function getUserInput
//          a)get user click and save it as UserInput
//          b)run function checkLetters > pass UserInput 

//      5)function wrong
//          a)user losses one guess (remainingGuesses--)
//          b)userGuess gets saved to lettersGuessed array and is shown in letters guessed box(html)

//      6)function right
//          a)userInput replaces underscore in shown word (html)

//      7)function gameOver
//          a)prompt "GAME OVER! press Button to start a new game!"

//      8) function checkAnswer(userinput, splitSelectedWord)
//            a)if userGuess === splitSelectedWord
//                  I)true- run userGuess to html of underscores
//                  II)fales - remainingGuess -- && User guess > lettersGuessed


