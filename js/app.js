'use strict';
var numCorrect = 0;
var isFormatCorrect;
var fullNameQ;
var myCarQ;
var jobTitleQ;
var favGameFranchQ;
var favMovieQ;
var userName = prompt('Hello, Hello!  What is your name?');
alert('Well hello, ' + userName + '!  Welcome.  I am going to ask 5 questions about me, and see how you do!');
alert('Please answer each question with either a "Yes/No" or "Y/N"');
userName.toUpperCase();
//console.log(userName);
// Questions to be answered
// 1 Full Name Question
do {
  fullNameQ = prompt('Is my full name Justin Paul Jones?').toUpperCase();
  //console.log('User Answer to NAME question: ' + fullNameQ);

  if (fullNameQ === 'YES' || fullNameQ === 'Y') {
    //console.log('INCORRECT');
    alert('Sorry about that, my full name is "Jonathan" Paul Jones');
    isFormatCorrect = true;
  }
  else if (fullNameQ === 'NO' || fullNameQ === 'N') {
    //console.log('CORRECT');
    alert('That is Correct!');
    isFormatCorrect = true;
    numCorrect += 1;
  }
  else {
    //console.log('INVALID INPUT: ' + fullNameQ);
    alert('Please answer with either a "y/n" or "yes/no"');
    isFormatCorrect = false;
  }
} while (isFormatCorrect === false);

// 2 Car I want Question

do {
  myCarQ = prompt('Would I like to own a Tesla one day?').toUpperCase();
  //console.log('User Answer to CAR question: ' + myCarQ);
  if (myCarQ === 'YES' || myCarQ === 'Y') {
    //console.log('CORRECT');
    alert('That is Correct!');
    isFormatCorrect = true;
    numCorrect += 1;
  }
  else if (myCarQ === 'NO' || myCarQ === 'N') {
    //console.log('INCORRECT');
    alert('Nope! I really want a Tesla');
    isFormatCorrect = true;
  }
  else {
    //console.log('INVALID INPUT: ' + myCarQ);
    alert('Please answer with either a "y/n" or "yes/no"');
    isFormatCorrect = false;
  }
} while (isFormatCorrect === false);

// 3 Job Title Question

do {
  jobTitleQ = prompt('Was my old job title Awesome Navigator?').toUpperCase();
  //console.log('User Answer to JOB TITLE question: ' + jobTitleQ);
  if (jobTitleQ === 'YES' || jobTitleQ === 'Y') {
    //console.log('INCORRECT');
    alert('Close.  50-50-90 right?  I was an "Assistant" Navigator');
    isFormatCorrect = true;
  }
  else if (jobTitleQ === 'NO' || jobTitleQ === 'N') {
    //console.log('CORRECT');
    alert('That is Correct!');
    isFormatCorrect = true;
    numCorrect += 1;
  }
  else {
    //console.log('INVALID INPUT: ' + jobTitleQ);
    alert('Please answer with either a "y/n" or "yes/no"');
    isFormatCorrect = false;
  }
} while (isFormatCorrect === false);

// 4 Favorite Game Franchise

do {
  favGameFranchQ = prompt('Is Starfox my favorite game franchise?').toUpperCase();
  //console.log('User Answer to FAV GAME FRANCHISE question: ' + favGameFranchQ);
  if (favGameFranchQ === 'YES' || favGameFranchQ === 'Y') {
    //console.log('CORRECT');
    alert('That is Correct!');
    isFormatCorrect = true;
    numCorrect += 1;
  }
  else if (favGameFranchQ === 'NO' || favGameFranchQ === 'N') {
    //console.log('INCORRECT');
    alert('I love those Arwings! I really love StarFox!');
    isFormatCorrect = true;
  }
  else {
    //console.log('INVALID INPUT: ' + favGameFranchQ);
    alert('Please answer with either a "y/n" or "yes/no"');
    isFormatCorrect = false;
  }
} while (isFormatCorrect === false);

// 5 Favorite Movie

do {
  favMovieQ = prompt('Is GhostSmashers my all-time favorite?').toUpperCase();
  //console.log('User Answer to FAV GAME FRANCHISE question: ' + favMovieQ);
  if (favMovieQ === 'YES' || favMovieQ === 'Y') {
    //console.log('INCORRECT');
    alert('Fun fact, GhostSmasher was a working title for Ghostbusters, which IS my favorite movie!');
    isFormatCorrect = true;
  }
  else if (favMovieQ === 'NO' || favMovieQ === 'N') {
    alert('That is Correct!');
    isFormatCorrect = true;
    numCorrect += 1;
  }
  else {
    //console.log('INVALID INPUT: ' + favMovieQ);
    alert('Please answer with either a "y/n" or "yes/no"');
    isFormatCorrect = false;
  }
} while (isFormatCorrect === false);

// 6 Guessing Game
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
      break;
    } else if (guessNumber > correctNumber) {
      alert('It\'s a GOOD guess, the guess is TOO HIGH.  Try again, you have ' + (i - 1) + ' guess(es) remaining.');
    } else if (guessNumber < correctNumber) {
      alert('It\'s a GOOD guess, the guess is TOO LOW.  Try again, you have ' + (i - 1) + ' guess(es) remaining.');
    }
  }
  else {
    alert('Whoops!  That\'s not a number silly.  You have ' + (i - 1) + ' guess(es) remaining');
  }
  if (i === 1) {
    alert('Aww.  You are all out of chances, the answer was ' + correctNumber + '.');
  }
}
// 7 Next Shennanigans.

alert(userName + ', thank you for taking the time to get to know me a little.  You scored ' + numCorrect + ' out of 7!  Take Care now.');
//console.log(numCorrect);
