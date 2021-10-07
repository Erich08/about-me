'use strict';

let score = 0;
let userName = prompt('Hello, what is your name?');

alert(`Hello ${userName}! Welcome to my About Me page!`);

alert("Let's play a little guessing game shall we?");

function color(){
  let questionOne = prompt(
    'Is my favorite color blue? Please respond to all questions with either yes or no.'
  ).toUpperCase();

  if (questionOne === 'YES' || questionOne === 'Y') {
    //console.log('You are correct!');
    alert('You are correct!');
    score++;
  } else {
    //console.log('Sorry, that is incorrect. My favorite color is blue.');
    alert('Sorry, that is incorrect. My favorite color is blue.');
  }
}

function growUp(){
  let questionTwo = prompt('Did I grow up in Texas?').toUpperCase();

  if (questionTwo === 'NO' || questionTwo === 'N') {
    //console.log('You are correct! I grew up in Oklahoma.');
    alert('You are correct! I grew up in Oklahoma.');
    score++;
  } else {
    //console.log('Sorry, that is incorrect. I grew up in Oklahoma');
    alert('Sorry, that is incorrect. I grew up in Oklahoma');
  }
}

let questionThree = prompt('Is my favorite meal lasagna?').toUpperCase();

if (questionThree === 'YES' || questionThree === 'Y') {
  //console.log('You are correct!');
  alert('You are correct!');
  score++;
} else {
  //console.log('Sorry, that is incorrect.');
  alert('Sorry, that is incorrect.');
}

let questionFour = prompt('Am I an Air Force veteran?').toUpperCase();

if (questionFour === 'YES' || questionFour === 'Y') {
  //console.log('That is incorrect! I am a Marine Corps veteran');
  alert('That is incorrect! I am a Marine Corps veteran');
} else {
  //console.log('You are correct! I am a Marine Corps veteran');
  alert('You are correct! I am a Marine Corps veteran');
  score++;
}

let questionFive = prompt('Do I have 2 kids?').toUpperCase();

if (questionFive === 'YES' || questionFive === 'Y') {
  //console.log('That is incorrect! I have three kids.');
  alert('That is incorrect! I have three kids.');
} else {
  //console.log('That is correct!');
  alert('That is correct!');
  score++;
}

let attempts = 1;

for (let i = 4; i >= attempts; i--) {
  let correctAnswer = 8;
  let numberGuesser = parseInt(prompt('Guess a number between 1-20'));

  if (numberGuesser === correctAnswer) {
    alert('You are correct.');
    score++;
    break;
  } else if (numberGuesser < correctAnswer) {
    alert(`Your guess is too low. You have ${i - 1} attempts remaining.`);
  } else if (numberGuesser > correctAnswer) {
    alert(`Your guess is too high. You have ${i} attempts remaining.`);
  }

  if (i === 1) {
    alert(`The correct answer was ${correctAnswer}.`);
    break;
  }
}
let sports = ['baseball', 'hockey', 'basketball', 'football', 'wrestling'];

//let userInput = prompt('What was a sport I played growing up?');

let guesses = 0;
let correct = false;
for (let k = 6; k > guesses; k--) {
  let userInput = prompt('What was a sport I played growing up?');
  for (let j = 0; j < sports.length; j++) {
    if (userInput.toLowerCase() === sports[j]) {
      alert('That is correct!');
      correct = true;
      score++;
    }
  }
  if (!correct) {
    alert(`You have ${[k - 1]} guesses left.`);
  }
  if (correct) break;
}

alert(`The sports I played growing up were ${sports}`);
alert(`Your total score was ${score}`);
