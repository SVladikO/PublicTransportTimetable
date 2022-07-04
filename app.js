let Timetable = require('./index.js');

(() => {
  let timetable = new Timetable('#timer', { rootWidth: 180 });
  let format = time => time < 10 ? '0' + time : time;

  setInterval(() => {
    let date = new Date();
    const HOURS = format(date.getHours());
    const MINUTES = format(date.getMinutes());
    const SECONDS = format(date.getSeconds());

    timetable.show(` ${HOURS}:${MINUTES}:${SECONDS}`);
  }, 1000);
})();

// ENG CHARACTERS
(() => {
  const TEXT = "ABCDEFGHIJKLMNOPQRSTUVWXYZ-.':?><+/=_!0123456789";
  new Timetable('#eng_char').show(TEXT);
})();

// UA CHARACTERS
(() => {
  const TEXT = 'АБВГДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ._-!:><=+/0123456789';

  let options = {
    languageKey: 'ua'
  };
  new Timetable('.ua_char', options).show(TEXT);
})();

//          ****  MOVE LEFT    ***
(() => {
  const TEXT = ' !!!! MOVE LEFT';
  const options = {
    rootHeight: 45,
    rootWidth: 300,
    timeInterval: 100,
    columnsInBoard: 38
  };

  console.log(new Timetable('.scoreboard0', options).moveLeft(TEXT, 3));
})();

//          ****  MOVE RIGHT    ***
(() => {
  const TEXT = 'MOVE RIGHT';
  const options = {
    rootHeight: 45,
    rootWidth: 300,
    lampColorOn: 'blue',
    lampColorOff: 'orange',
    timeInterval: 100,
    columnsInBoard: 38
  };

  new Timetable('.scoreboard1', options).moveRight(TEXT, 3);
})();

// CREATE CHARACTER
Timetable.createCharacter('.character');
