'use strict';

// write 5 questions. They must accept yes or no or y/n IN ANY CASE
// examples: yes or YES or no or NO or y or Y or N or n.
var totalScore = 0;
var userName = prompt('Hey there, what\'s your name?');
//console.log(userName);
alert('Welcome to the page ' + userName + ' I have some question\'s for you.');

//question 1
function seattle() {
  var answerSeattle = prompt('Do I live in Seattle?').toLowerCase();
  if (answerSeattle === 'yes' || answerSeattle === 'y') {
    //console.log('That would be right..');
    alert(' You\'re right. that\'s dope..');
    totalScore++;
  }
  else if (answerSeattle !== 'yes' || answerSeattle !== 'y') {
    //console.log('Ah, well thats too bad');
    alert('Ah wrong, well thats too bad');
  }
}

seattle();

//question 2
function pizza() {

  var answerPizza = prompt('So ' + userName + ' Do you think I like pizza?').toLowerCase();
  if (answerPizza === 'yes' || answerPizza === 'y') {
  //console.log('That\'s good ' + userName + ' it seems like we can be freinds!');
    alert('That\'s good ' + userName + ' it seems like we can be friends!');
    totalScore++;
  }
  else if (answerPizza !== 'yes' || answerPizza !== 'y') {
  //console.log('Well ' + userName + ' we are getting off to a rough start huh?');
    alert('Well ' + userName + ' we are getting off to a rough start huh?');
  }
}
pizza();

//question 3
function cats() {
  var answerCats = prompt('Do you think I like cats over dogs?').toLowerCase();
  if (answerCats === 'yes' || answerCats === 'y') {
    //console.log('Well ' + userName + ' You are correcto');
    alert('Well ' + userName + ' You are correcto');
    totalScore++;
  }
  else if (answerCats !== 'yes' || answerCats !== 'y') {
    //console.log('Wrong!');
    alert('Wrong!');
  }
}
cats();

//question 4
function skyDiving() {
  var answerSkydiving = prompt('Do you think I\'ve been skydiving before?').toLowerCase();
  if (answerSkydiving === 'no' || answerSkydiving === 'n') {
    //conole.log('You\'re right');
    alert('You\'re right');
    totalScore++;
  }
  else if (answerSkydiving !== 'no' || answerSkydiving !== 'n') {
    //console.log('What\'re you crazy ' + userName + '! I hate flying, there\'s no way I\'d be jumping out of plane!');
    alert('What\'re you crazy ' + userName + '! I hate flying, there\'s no way I\'d be jumping out of plane!');
  }
}
skyDiving();

//question 5
function fifth(){
  var answer5th = prompt('Do you think I could think of a 5th question to ask you about me?').toLowerCase();
  if (answer5th === 'yes' || answer5th === 'y') {
    //console.log('ha! No way' + userName + );
    alert('ha! No way' + userName + '');
  }
  else if (answer5th !== 'yes' || answer5th !== 'y') {
    //console.log('Smart' + userName +);
    alert('Smart ' + userName + '');
    totalScore++;
  }
}
fifth();
function correctNumber(){
  let i = 1;
  let correctNumber = 23;
  for (i = 1; i < 6; i++) {
    var guess = parseInt(prompt('Pick a number between 1 and 100!'));
    if (guess < correctNumber) {
      console.log('Higher bro');
      alert('Higher bro');
    }
    if (guess > correctNumber) {
      console.log('Lower my dude');
      alert('Lower my dude');
    }
    if (guess === correctNumber) {
      console.log('Gold star for you');
      alert('Gold star for you');
      totalScore++;

      break;
    }

    if (i === 5) {
      console.log('You lose it was 23');
      break;
    }

  }
}
correctNumber();
function colors(){
  var favColors = ['blue', 'black', 'gray'];
  let i = 0;
  for (i = 1; i < 7; i++) {
    var check = prompt('Guess one of my top 3 favorite colors').toLowerCase();
    if (favColors.includes(check)) {
      console.log('You are correct!');
      alert('You are correct');
      totalScore++;
      break;
    }
    if (check !== favColors) {
      console.log('Try again!');
      alert('Try again');
    }
    if (i === 6) {
      console.log('okay thats enough.');
      alert('okay thats enough.');
      break;
    }
  }
}
colors();

alert('Lot\'s of question\'s and you got ' + totalScore + ' right!');
// template literal
// While using template literal, you don't need to use an ' in your text. Also you will only use template literal if it
// includes some javascript
alert(`Goodbye, ${userName} I hope you enjoyed the site`);
