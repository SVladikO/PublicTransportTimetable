let InfoTable = require('./src/js/app');
let Color = require('./src/js/color');

let text = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-.':?><+/=_!";
let color = Color._red;
let columns = 270;
let time = 100;
let tableHeight = 40;
//  *** ENG CHARACTERS CHECK  *** 
new InfoTable('scoreboard0', tableHeight, text, time, columns, Color.green).show();
new InfoTable('scoreboard1', tableHeight, text, time, columns, Color.lightBlue).show();
new InfoTable('scoreboard2', tableHeight, text, time, columns, Color.blue).show();
new InfoTable('scoreboard3', tableHeight, text, time, columns, Color.red).show();
new InfoTable('scoreboard4', tableHeight, text, time, columns, Color.yellow).show();
new InfoTable('scoreboard5', tableHeight, text, time, columns, Color._blue).show();
new InfoTable('scoreboard6', tableHeight, text, time, columns, Color._red).show();
new InfoTable('scoreboard7', tableHeight, text, time, columns, Color._yellow_on).show();

//  *** UA CHARACTERS CHECK  ***
let textUA = "0123456789АБВГДЕЄЖІЇЙЗИКЛМНОПРСТУФЦЧШЩЬЮЯ._-!:><=+/";
// let textUA = "АБВ";

new InfoTable('scoreboard8', tableHeight, textUA, time, columns, Color.lightBlue).setLanguage('ua').show();
new InfoTable('scoreboard9', tableHeight, textUA, time, columns, Color.blue).setLanguage('ua').show();
new InfoTable('scoreboard10', tableHeight, textUA, time, columns, Color.red).setLanguage('ua').show();
new InfoTable('scoreboard11', tableHeight, textUA, time, columns, Color.yellow).setLanguage('ua').show();
new InfoTable('scoreboard12', tableHeight, textUA, time, columns, Color._blue).setLanguage('ua').show();
new InfoTable('scoreboard13', tableHeight, textUA, time, columns, Color._red).setLanguage('ua').show();
new InfoTable('scoreboard14', tableHeight, textUA, time, columns, Color._yellow_on).setLanguage('ua').show();
new InfoTable('scoreboard15', tableHeight, textUA, time, columns, Color.green).setLanguage('ua').show();


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
