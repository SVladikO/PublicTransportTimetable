let InfoTable = require('./src/scripts/app');
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
new InfoTable('scoreboard0', options).show(text);
text = '0';
new InfoTable('scoreboard1', options).show(text);
new InfoTable('scoreboard8', options).moveLeft(text, 3);
new InfoTable('scoreboard9', options).moveRight(text, 2, 100);
new InfoTable('scoreboard10', options).show(text);
new InfoTable('scoreboard11', options).show(text);
new InfoTable('scoreboard12', options).show(text);
new InfoTable('scoreboard13', options).show(text);
new InfoTable('scoreboard14', options).show(text);
new InfoTable('scoreboard15', options).show(text);
new InfoTable('scoreboard16', options).show(text);

// *** TIMER CHECK ***
options.color = Color.red;

let timer = new InfoTable('timer', options);
let format = time => time < 10 ? '0' + time : time;
setInterval(() => {
  let date = new Date();
  const HOURS = format(date.getHours());
  const MINUTES = format(date.getMinutes());
  const SECONDS = format(date.getSeconds());

  timer.show(`${HOURS}:${MINUTES}:${SECONDS}`);
}, 1000);

// CREATE CHARACTER
// new InfoTable('scoreboard0').createCharacter();

global.InfoTable = InfoTable;
