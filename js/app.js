'use strict';
var numCorrect = 0;
var isFormatCorrect;
var fullNameQ;
var myCarQ;
var jobTitleQ;
var favGameFranchQ;
var favMovieQ;
var userName = prompt('Hello, Hello!  What is your name?');
alert('Well hello, ' + userName + '!  Welcome.  I am going to ask 5 questions, and see how you do!');
alert('Please answer each question with either a "Yes/No" or "Y/N"');
userName.toUpperCase();
console.log(userName);
// Questions to be answered
// 1 Full Name Question
do {
  fullNameQ = prompt('Is my full name Justin Paul Jones?').toUpperCase();
  console.log('User Answer to NAME question: ' + fullNameQ);
  if (fullNameQ === 'YES' || fullNameQ === 'Y') {
    console.log('INCORRECT');
    isFormatCorrect = true;
  }
  else if (fullNameQ === 'NO' || fullNameQ === 'N') {
    console.log('CORRECT');
    isFormatCorrect = true;
    numCorrect += 1;
  }
  else {
    console.log('INVALID INPUT: ' + fullNameQ);
    isFormatCorrect = false;
  }
} while (isFormatCorrect === false);

// 2 Car I want Question

do {
  myCarQ = prompt('Would I like to own a Tesla one day?').toUpperCase();
  console.log('User Answer to CAR question: ' + myCarQ);
  if (myCarQ === 'YES' || myCarQ === 'Y') {
    console.log('CORRECT');
    isFormatCorrect = true;
    numCorrect += 1;
  }
  else if (myCarQ === 'NO' || myCarQ === 'N') {
    console.log('INCORRECT');
    isFormatCorrect = true;
  }
  else {
    console.log('INVALID INPUT: ' + myCarQ);
    isFormatCorrect = false;
  }
} while (isFormatCorrect === false);

// 3 Job Title Question

do {
  jobTitleQ = prompt('Was my old job title Awesome Navigator?').toUpperCase();
  console.log('User Answer to JOB TITLE question: ' + jobTitleQ);
  if (jobTitleQ === 'YES' || jobTitleQ === 'Y') {
    console.log('INCORRECT');
    isFormatCorrect = true;
  }
  else if (jobTitleQ === 'NO' || jobTitleQ === 'N') {
    console.log('CORRECT');
    isFormatCorrect = true;
    numCorrect += 1;
  }
  else {
    console.log('INVALID INPUT: ' + jobTitleQ);
    isFormatCorrect = false;
  }
} while (isFormatCorrect === false);

// 4 Favorite Game Franchise

do {
  favGameFranchQ = prompt('Is Starfox my favorite game franchise?').toUpperCase();
  console.log('User Answer to FAV GAME FRANCHISE question: ' + favGameFranchQ);
  if (favGameFranchQ === 'YES' || favGameFranchQ === 'Y') {
    console.log('CORRECT');
    isFormatCorrect = true;
    numCorrect += 1;
  }
  else if (favGameFranchQ === 'NO' || favGameFranchQ === 'N') {
    console.log('INCORRECT');
    isFormatCorrect = true;
  }
  else {
    console.log('INVALID INPUT: ' + favGameFranchQ);
    isFormatCorrect = false;
  }
} while (isFormatCorrect === false);

// 5 Favorite Movie

do {
  favMovieQ = prompt('Is GhostSmasher my all-time favorite?').toUpperCase();
  console.log('User Answer to FAV GAME FRANCHISE question: ' + favMovieQ);
  if (favMovieQ === 'YES' || favMovieQ === 'Y') {
    console.log('CORRECT');
    isFormatCorrect = true;
    numCorrect += 1;
  }
  else if (favMovieQ === 'NO' || favMovieQ === 'N') {
    console.log('INCORRECT');
    isFormatCorrect = true;
  }
  else {
    console.log('INVALID INPUT: ' + favMovieQ);
    isFormatCorrect = false;
  }
} while (isFormatCorrect === false);

console.log(numCorrect);
