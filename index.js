let Timetable = require('./src/scripts/timetable');

// Create timer
(function() {
  let options = {
    height: 85,
    columns: 40,
    color: 'red',
    language: 'eng',
    timeInterval: 1000
  };

  let timer = new Timetable('timer', options).init();
  let format = time => time < 10 ? '0' + time : time;

  setInterval(() => {
    let date = new Date();
    const HOURS = format(date.getHours());
    const MINUTES = format(date.getMinutes());
    const SECONDS = format(date.getSeconds());

    timer.show(`${HOURS}:${MINUTES}:${SECONDS}`);
  }, 1000);
})();

(function() {
  const ENG_CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ-.':?><+/=_!0123456789";

  let options = {
    columns: 280,
    color: 'green'
  };
  new Timetable('eng_char', options).init().show(ENG_CHARACTERS);
})();

(function() {
  const UA_CHARACTERS = 'АБВГДЕЄЖІЇЙЗИКЛМНОПРСТУФЦЧШЩЬЮЯ._-!:><=+/0123456789';

  let options = {
    columns: 250,
    color: 'red',
    language: 'ua'
  };
  new Timetable('ua_char', options).init().show(UA_CHARACTERS);
})();

new Timetable('scoreboard1', { color: 'green' }).init().show('green');
new Timetable('scoreboard2', { color: 'red' }).init().show('red');
new Timetable('scoreboard3', { color: 'yellow' }).init().show('yellow');
new Timetable('scoreboard4', { color: 'blue' }).init().show('blue');
new Timetable('scoreboard5', { color: 'white' }).init().show('white');

new Timetable('scoreboard7').init().moveLeft(0, 2);
new Timetable('scoreboard8').init().moveRight(0, 2);
new Timetable('scoreboard9').init().moveRight(0, 2);

// CREATE CHARACTER
// new Table('scoreboard0').createCharacter();

// new Timetable('scoreboard3', { color: 'red', columns: 160 }).init().show('TRAIN                                                                                             TIME');
// new Timetable('scoreboard4', { color: 'white', columns: 160 }).init().show('001         Kushuniv > Moskva    12:00');
