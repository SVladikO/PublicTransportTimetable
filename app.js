let Timetable = require('./index.js');

(() => {

  let timetable = new Timetable('#timer').init();
  let format = time => time < 10 ? '0' + time : time;

  setInterval(() => {
    let date = new Date();
    const HOURS = format(date.getHours());
    const MINUTES = format(date.getMinutes());
    const SECONDS = format(date.getSeconds());

    timetable.show(`${HOURS}:${MINUTES}:${SECONDS}`);
  }, 1000);
})();
//
// // ENG CHARACTERS
//
// (() => {
//   const TEXT = "ABCDEFGHIJKLMNOPQRSTUVWXYZ-.':?><+/=_!0123456789";
//
//   let options = {
//     // language: 'eng',
//     boardHeight: 25,
//     boardBgColor: 'black',
//     lampColorOn: 'white',
//     lampColorOff: 'red',
//     // timeInterval: 500,
//     columnsInBoard: Timetable.getColumnsByText(TEXT, 'eng')
//
//   };
//   new Timetable('#eng_char', options).init().show(TEXT);
// })();
//
// // UA CHARACTERS
//
// (() => {
//   const TEXT = 'АБВГДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ._-!:><=+/0123456789';
//
//   let options = {
//     language: 'ua',
//     boardHeight: 25,
//     boardBgColor: 'black',
//     lampColorOn: 'yellow',
//     lampColorOff: 'blue',
//     // timeInterval: 500,
//     columnsInBoard: Timetable.getColumnsByText(TEXT, 'ua')
//   };
//   new Timetable('.ua_char', options).init().show(TEXT);
// })();
//
// //          ****  MOVE LEFT    ***
// (() => {
//   const TEXT = 'scoreboard0';
//   const options = {
//     boardHeight: 45,
//     boardBgColor: 'red',
//     // lampColorOn: 'yellow',
//     // lampColorOff: 'blue',
//     timeInterval: 600,
//     columnsInBoard: 38
//   };
//
//   new Timetable('.scoreboard0', options).init().moveLeft(TEXT);
// })();
//
// //          ****  MOVE RIGHT    ***
// (() => {
//   const TEXT = 'scoreboard1';
//   const options = {
//     boardHeight: 45,
//     boardBgColor: 'red',
//     lampColorOn: 'blue',
//     lampColorOff: 'orange',
//     timeInterval: 600,
//     columnsInBoard: 38
//   };
//
//   new Timetable('.scoreboard1', options).init().moveRight(TEXT);
// })();
//
// //          **** SHOW  ***
// (() => {
//   const TEXT = 'scoreboard2';
//   const options = {
//     boardHeight: 45,
//     boardBgColor: 'red',
//     lampColorOn: 'yellow',
//     // lampColorOff: 'blue',
//     timeInterval: 600,
//     columnsInBoard: 38
//   };
//
//   new Timetable('.scoreboard2', options).init().show(TEXT);
// })();
//
// // CREATE CHARACTER
// Timetable.createCharacter('.character');
