let Table = require('./src/scripts/table');
let Color = require('./src/scripts/color');

let text = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-.':?><+/=_!";
// let textUA = '0123456789АБВГДЕЄЖІЇЙЗИКЛМНОПРСТУФЦЧШЩЬЮЯ._-!:><=+/';
let options = {
  tableHeight: 85,
  tableColumns: 50,
  color: Color.green,
  language: 'eng',
  timeInterval: 1000
};
//  *** ENG CHARACTERS CHECK  ***
new Table('scoreboard0', options).show(text);
text = '0';
new Table('scoreboard1', options).show(text);
new Table('scoreboard8', options).moveLeft(text, 3);
new Table('scoreboard9', options).moveRight(text, 2, 100);
new Table('scoreboard10', options).show(text);
new Table('scoreboard11', options).show(text);
new Table('scoreboard12', options).show(text);
new Table('scoreboard13', options).show(text);
new Table('scoreboard14', options).show(text);
new Table('scoreboard15', options).show(text);
new Table('scoreboard16', options).show(text);

// *** TIMER CHECK ***
options.color = Color.red;

let timer = new Table('timer', options);
let format = time => time < 10 ? '0' + time : time;
setInterval(() => {
  let date = new Date();
  const HOURS = format(date.getHours());
  const MINUTES = format(date.getMinutes());
  const SECONDS = format(date.getSeconds());

  timer.show(`${HOURS}:${MINUTES}:${SECONDS}`);
}, 1000);

// CREATE CHARACTER
// new Table('scoreboard0').createCharacter();

global.Table = Table;
