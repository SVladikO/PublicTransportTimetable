let Timetable = require('./index.js');

// Create timer
(function () {
  let options = {
    // language: 'eng',
    boardHeight: 25,
    boardBgColor: 'black',
    lampColorOn: 'white',
    // lampColorOff: 'red',
    // timeInterval: 500,
    columnsInBoard: 60
  };

  let timer = new Timetable('.timer', options).init();
  let format = time => time < 10 ? '0' + time : time;

  setInterval(() => {
    let date = new Date();
    const HOURS = format(date.getHours());
    const MINUTES = format(date.getMinutes());
    const SECONDS = format(date.getSeconds());

    timer.show(`${HOURS}:${MINUTES}:${SECONDS}`);
  }, 1000);
})();


// ENG CHARACTERS


(function () {
  const TEXT = "ABCDEFGHIJKLMNOPQRSTUVWXYZ-.':?><+/=_!0123456789";

  let options = {
    // language: 'eng',
    boardHeight: 25,
    boardBgColor: 'black',
    lampColorOn: 'white',
    lampColorOff: 'red',
    // timeInterval: 500,
    columnsInBoard: Timetable.getColumnsByText(TEXT, 'eng')

  };
  let table = new Timetable('#eng_char', options).init();
  table.show(TEXT);
})();

// UA CHARACTERS

(function () {
  const TEXT = 'АБВГДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ._-!:><=+/0123456789';

  let options = {
    language: 'ua',
    boardHeight: 25,
    boardBgColor: 'black',
    lampColorOn: 'yellow',
    lampColorOff: 'blue',
    // timeInterval: 500,
    columnsInBoard: Timetable.getColumnsByText(TEXT, 'ua')
  };
  let table = new Timetable('.ua_char', options).init();
  table.show(TEXT);
})();

//          ****  MOVE LEFT    ***

(function () {
  const TEXT = 'scoreboard0';
  const options = {
    boardHeight: 45,
    boardBgColor: 'red',
    // lampColorOn: 'yellow',
    // lampColorOff: 'blue',
    timeInterval: 600,
    columnsInBoard: 38,
  };

  let table = new Timetable('.scoreboard0', options).init();
  table.moveLeft(TEXT);
})();


//          ****  MOVE RIGHT    ***


(function () {
  const TEXT = 'scoreboard1';
  const options = {
    boardHeight: 45,
    boardBgColor: 'red',
    lampColorOn: 'blue',
    lampColorOff: 'orange',
    timeInterval: 600,
    columnsInBoard: 38
  };

  let table = new Timetable('.scoreboard1', options)
  table.init();
  table.moveRight(TEXT);
})();


//          **** SHOW  ***


(function () {
  const TEXT = 'scoreboard2';
  const options = {
    boardHeight: 45,
    boardBgColor: 'red',
    lampColorOn: 'yellow',
    // lampColorOff: 'blue',
    timeInterval: 600,
    columnsInBoard: 38
  };

  let table = new Timetable('.scoreboard2', options)
  table.init();
  table.show(TEXT);
})();


// CREATE CHARACTER


Timetable.createCharacter('character');
