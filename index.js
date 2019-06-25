let Table = require('./src/scripts/tableService');

// Create timer
(function() {
  let options = {
    height: 85,
    columns: 40,
    color: 'red',
    language: 'eng',
    timeInterval: 1000
  };

  let timer = new Table('timer', options);
  let format = time => time < 10 ? '0' + time : time;

  setInterval(() => {
    let date = new Date();
    const HOURS = format(date.getHours());
    const MINUTES = format(date.getMinutes());
    const SECONDS = format(date.getSeconds());

    timer.show(`${HOURS}:${MINUTES}:${SECONDS}`);
  }, 1000);
})();

// (function() {
//   const ENG_CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ-.':?><+/=_!0123456789";

//   let options = {
//     columns: 200,
//     color: 'green'
//   };
//   new Table('eng_char', options).show(ENG_CHARACTERS);
// })();

// (function() {
//   const UA_CHARACTERS = 'АБВГДЕЄЖІЇЙЗИКЛМНОПРСТУФЦЧШЩЬЮЯ._-!:><=+/0123456789';

//   let options = {
//     columns: 200,
//     color: 'red',
//     language: 'ua'
//   };
//   new Table('ua_char', options).show(UA_CHARACTERS);
// })();

// new Table('scoreboard1', { color: 'green' }).show('green');
// new Table('scoreboard2', { color: 'red' }).show('red');
// new Table('scoreboard3', { color: 'yellow' }).show('yellow');
// new Table('scoreboard4', { color: 'blue' }).show('blue');
// new Table('scoreboard5', { color: 'white' }).show('white');

// setTimeout(() => new Table('scoreboard6').moveLeft(0, 2), 2000);
setTimeout(() => new Table('scoreboard6'), 3000);

new Table('scoreboard7').moveRight(0, 2);
new Table('scoreboard8').moveRight(0, 2);
new Table('scoreboard9').moveRight(0, 2);

// CREATE CHARACTER
// new Table('scoreboard0').createCharacter();
