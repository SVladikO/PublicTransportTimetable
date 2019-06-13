let InfoTable = require('./src/js/app');

let text = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-.':?><+/=_!";
let columns = 40;
let time = 500;

//  *** ENG CHARACTERS CHECK  *** 
// new InfoTable('scoreboard1', text, time, columns, 'lightBlue').moveLeft(5);
// new InfoTable('scoreboard2', text, time, columns, 'blue').moveRight(5);
// new InfoTable('scoreboard3', text, time, columns, 'red').moveLeft(5);
// new InfoTable('scoreboard4', text, time, columns, 'yellow').moveLeft(5);
// new InfoTable('scoreboard5', text, time, columns, '_blue').moveLeft(5);
// new InfoTable('scoreboard6', text, time, columns, '_red').moveLeft(5);
// new InfoTable('scoreboard7', text, time, columns, '_yellow_on').moveRight(5);
// new InfoTable('scoreboard8', text, time, columns).moveLeft(5);

//  *** UA CHARACTERS CHECK  ***
let textUA = "0123456789АБВГДЕЄЖЇЙЗИІКЛМНОПРСТУФЦЧШЩЬЮЯ._-!:><=+/";


// new InfoTable('scoreboard1', textUA, time, columns, 'lightBlue').setLanguage('ua').show();
// new InfoTable('scoreboard2', textUA, time, columns, 'blue').setLanguage('ua').moveLeft(5);
// new InfoTable('scoreboard3', textUA, time, columns, 'red').setLanguage('ua').moveRight(5);
// new InfoTable('scoreboard4', textUA, time, columns, 'yellow').setLanguage('ua').moveLeft(5);
// new InfoTable('scoreboard5', textUA, time, columns, '_blue').setLanguage('ua').moveRight(5);
// new InfoTable('scoreboard6', textUA, time, columns, '_red').setLanguage('ua').moveLeft(5);
// new InfoTable('scoreboard7', textUA, time, columns, '_yellow_on').setLanguage('ua').moveLeft(5);
// new InfoTable('scoreboard8', textUA, time, columns).setLanguage('ua').moveLeft(5);

// *** TIMER CHECK ***
// let timer = new InfoTable('timer', '', time, columns, '_red');
// let format = time => time < 10 ? '0' + time : time;
// setInterval(() => {
//   let date = new Date();
//   let timeStr = `${format(date.getHours())}:${format(date.getMinutes())}:${format(date.getSeconds())}`;
//   timer.update(timeStr);
// }, 1000);


// SUPPORTED COLORS

// new InfoTable('scoreboard0', 'lightBlue', 0, columns, 'lightBlue').show();
// new InfoTable('scoreboard1', 'blue', 0, columns, 'blue').show()
// new InfoTable('scoreboard2', 'red', 200, columns, 'red').show()
// new InfoTable('scoreboard3', 'yellow', 200, columns, 'yellow').show()
// new InfoTable('scoreboard4', '_red', 0, columns, '_red').show()
// new InfoTable('scoreboard5', '_blue', 0, columns, '_blue').show()
// new InfoTable('scoreboard6', '_yellow', 0, columns, '_yellow_on').show()
// new InfoTable('scoreboard7', '_green', 0, columns).show()


// CREATE CHARACTER
// new InfoTable('scoreboard0').createCharacter();

global.InfoTable = InfoTable;
