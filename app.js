let Timetable = require('./src/scripts/timetable');

// Create timer
(function() {
  let timer = new Timetable('timer', { height: 80, color: '#00aaff' }).init();
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
    columns: Timetable.getColumnsByText(ENG_CHARACTERS, 'eng'),
    height: 30,
    color: 'white'
  };
  new Timetable('eng_char', options).init().show(ENG_CHARACTERS);
})();

(function() {
  const UA_CHARACTERS = 'АБВГДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ._-!:><=+/0123456789';

  let options = {
    height: 30,
    columns: Timetable.getColumnsByText(UA_CHARACTERS, 'ua'),
    color: 'rgb(255, 0, 0)',
    language: 'ua'
  };
  new Timetable('ua_char', options).init().show(UA_CHARACTERS);
})();

(function() {
  const options = {
    height: 70,
    color: '#FFEB3B',
    columns: Timetable.getColumnsFullWidth(70, 'scoreboard0')
  };
  new Timetable('scoreboard0', options).init().moveLeft(0);
})();
new Timetable('scoreboard1').init().moveRight(0, 2);

(function() {
  const text = '_timetable'
  const options = {
    height: 80,
    columns: Timetable.getColumnsByText(text)
  };
  new Timetable('scoreboard2', options).init().show(text);
})();
// CREATE CHARACTER
// new Timetable('character', { columns: 7 }).init().createCharacter();
