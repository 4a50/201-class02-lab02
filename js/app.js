'use strict';
var numCorrect = 0;
var isFormatCorrect;
var favMovieQ;
var userName = prompt('Hello, Hello!  What is your name?');
alert('Well hello, ' + userName + '!  Welcome.  I am going to ask 7 questions about me, and see how you do!');
alert('Please answer the first 5 with either a "Yes/No" or "Y/N"');
userName.toUpperCase();
// Questions to be answered
// 1 Full Name Question
function inputName() {
  do {
    var fullNameQ = prompt('Is my full name Justin Paul Jones?').toUpperCase();

    if (fullNameQ === 'YES' || fullNameQ === 'Y') {

      alert('Sorry about that, my full name is "Jonathan" Paul Jones');
      isFormatCorrect = true;
    }
    else if (fullNameQ === 'NO' || fullNameQ === 'N') {

      alert('That is Correct!');
      isFormatCorrect = true;
      numCorrect++;
    }
    else {

      alert('Please answer with either a "y/n" or "yes/no"');
      isFormatCorrect = false;
    }
  } while (isFormatCorrect === false);
}
// 2 Car I want Question
function favCar() {
  do {
    var myCarQ = prompt('Would I like to own a Tesla one day?').toUpperCase();

    if (myCarQ === 'YES' || myCarQ === 'Y') {

      alert('That is Correct!');
      isFormatCorrect = true;
      numCorrect++;
    }
    else if (myCarQ === 'NO' || myCarQ === 'N') {

      alert('Nope! I really want a Tesla');
      isFormatCorrect = true;
    }
    else {

      alert('Please answer with either a "y/n" or "yes/no"');
      isFormatCorrect = false;
    }
  } while (isFormatCorrect === false);
}
// 3 Job Title Question
function jobTitle() {
  do {
    var jobTitleQ = prompt('Was my old job title Awesome Navigator?').toUpperCase();

    if (jobTitleQ === 'YES' || jobTitleQ === 'Y') {

      alert('Close.  50-50-90 right?  I was an "Assistant" Navigator');
      isFormatCorrect = true;
    }
    else if (jobTitleQ === 'NO' || jobTitleQ === 'N') {

      alert('That is Correct!');
      isFormatCorrect = true;
      numCorrect++;
    }
    else {

      alert('Please answer with either a "y/n" or "yes/no"');
      isFormatCorrect = false;
    }
  } while (isFormatCorrect === false);
}
// 4 Favorite Game Franchise
function favGame() {
  do {
    var favGameFranchQ = prompt('Is Starfox my favorite game franchise?').toUpperCase();

    if (favGameFranchQ === 'YES' || favGameFranchQ === 'Y') {

      alert('That is Correct!');
      isFormatCorrect = true;
      numCorrect++;
    }
    else if (favGameFranchQ === 'NO' || favGameFranchQ === 'N') {

      alert('I love those Arwings! I really love StarFox!');
      isFormatCorrect = true;
    }
    else {

      alert('Please answer with either a "y/n" or "yes/no"');
      isFormatCorrect = false;
    }
  } while (isFormatCorrect === false);
}
// 5 Favorite Movie
function favMovie() {
  do {
    favMovieQ = prompt('Is GhostSmashers my all-time favorite?').toUpperCase();

    if (favMovieQ === 'YES' || favMovieQ === 'Y') {

      alert('Fun fact, GhostSmashers was a working title for Ghostbusters, which IS my favorite movie!');
      isFormatCorrect = true;
    }
    else if (favMovieQ === 'NO' || favMovieQ === 'N') {
      alert('That is Correct!');
      isFormatCorrect = true;
      numCorrect++;
    }
    else {

      alert('Please answer with either a "y/n" or "yes/no"');
      isFormatCorrect = false;
    }
  } while (isFormatCorrect === false);
}
// 6 Guessing Game
function guessGame() {
  var correctNumber = 7;
  var guessNumber;
  alert('We are going to play a game of number guessing, I am thinking of a number from 1 to 10.  You have 4 tries.  Good Luck! :)');
  for (var i = 4; i > 0; i--) {
    console.log(i);
    guessNumber = parseInt(prompt('Pick an number between 1 and 10'), 10);
    if (guessNumber) {
      console.log(guessNumber);
      if (guessNumber === correctNumber) {
        alert('You\'re Right!  It was ' + guessNumber + '!  Good job!');
        numCorrect++;
        break;
      } else if (guessNumber > correctNumber) {
        console.log('Too high');
        alert('It\'s a GOOD guess, the guess is TOO HIGH.  Try again, you have ' + (i - 1) + ' guess(es) remaining.');
      } else if (guessNumber < correctNumber) {
        console.log('Too LOW');
        alert('It\'s a GOOD guess, the guess is TOO LOW.  Try again, you have ' + (i - 1) + ' guess(es) remaining.');
      }
    }
    else {
      alert('Whoops!  That\'s not a number silly.  You have ' + (i - 1) + ' guess(es) remaining');
      console.log('User input not a number');
    }
    if (i === 1) {
      alert('Aww.  You are all out of chances, the answer was ' + correctNumber + '.');
      console.log('Out of guesses. Not a correct answer');
    }
  }
}
// 7 Multiple Guesses.
function favOldGame() {
  var myFavs = ['STARFOX', 'SUPER METROID', 'MEGA MAN X'];
  var userAns;
  var isCorrect = false;


  for (var q = 6; q > 0; q--) {
    userAns = prompt('What is one of my favorite games?').toUpperCase();

    for (var j = 0; j < myFavs.length; j++) {
      if (userAns === myFavs[j]) {
        alert('You\'re Right! ' + userAns + ' IS one of my all time favs!');
        console.log('Correct Array item guessed: ' + myFavs[j]);
        numCorrect++;
        isCorrect = true;
        break;
      }
      else {
        console.log('User entry not found in myFav Array');
        isCorrect = false;
      }
    }
    if (isCorrect === true) {
      break;
    } else {
      alert('Awww, nope.  I\'m sure ' + userAns + ' is a good game, but not one of my favorites.  You have ' + (q - 1) + ' guesses remaining.');
      console.log('Incorrect Game Guess');
    }
  }
  alert('Well played ' + userName + '.  The possible answers were ' + myFavs + '.  If you haven\'t you should grab a Super Nintendo and try them out!');
}

//Closing
function closing() {
  if (numCorrect > 5) {
    alert(userName + ', thank you for taking the time to get to know me a little.  You scored ' + numCorrect + ' out of 7!  Very Cool, can\' wait to get to know you!  Take Care now.');
  } else {
    alert(userName + ', thank you for taking the time, but you only scored ' + numCorrect + ' out of 7!  Could be better, but it\'s all good.  Take Care now.');
  }
}
inputName();
favCar();
jobTitle();
favGame();
favMovie();
guessGame();
favOldGame();
closing();
