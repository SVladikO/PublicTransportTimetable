let InfoTable = require('./src/js/app');
let text = `That’s natural,
 because delete obj.key removes a value by the key. It’s all it does.
  Fine for objects. But for arrays we usually want the rest of elements
  to shift and occupy the freed place. We expect to have a shorter array now. `;

let numbers = '0123456789';
// text = numbers;
let columns = 100;
let time = 0;

// ENG CHARACTERS CHECK
// new InfoTable('scoreboard1', text, time, columns, 'lightBlue').moveLeft(5);
// new InfoTable('scoreboard2', text, time, columns, 'blue').moveLeft(5);
// new InfoTable('scoreboard3', text, time, columns, 'red').moveRight(5);
// new InfoTable('scoreboard4', text, time, columns, 'yellow').moveLeft(5);
// new InfoTable('scoreboard5', text, time, columns, '_blue').moveRight(5);
// new InfoTable('scoreboard6', text, time, columns, '_red').moveLeft(5);
// new InfoTable('scoreboard7', text, time, columns, '_yellow_on').moveLeft(5);
// new InfoTable('scoreboard8', text, time, columns).moveLeft(5);

// UA CHARACTERS CHECK
// text = `Супершвидко та якісно: чим здивувала світ унікальна пральна машина`;
// text = `Влад`;
// new InfoTable('scoreboard1', text, time, columns, 'lightBlue').setLanguage('ua').show(5);
// new InfoTable('scoreboard2', text, time, columns, 'blue').setLanguage('ua').moveLeft(5);
// new InfoTable('scoreboard3', text, time, columns, 'red').setLanguage('ua').moveRight(5);
// new InfoTable('scoreboard4', text, time, columns, 'yellow').setLanguage('ua').moveLeft(5);
// new InfoTable('scoreboard5', text, time, columns, '_blue').setLanguage('ua').moveRight(5);
// new InfoTable('scoreboard6', text, time, columns, '_red').setLanguage('ua').moveLeft(5);
// new InfoTable('scoreboard7', text, time, columns, '_yellow_on').setLanguage('ua').moveLeft(5);
// new InfoTable('scoreboard8', text, time, columns).setLanguage('ua').moveLeft(5);


// new InfoTable('root', text, time, columns, 'lightBlue').setLanguage('ua').show(5);
// new InfoTable('root', text, time, columns, 'lightBlue').setLanguage('ua').genies();

// TIMER CHECK
let timer = new InfoTable('timer', '', time, columns, '_red');
let format = time => time < 10 ? '0' + time : time;
setInterval(() => {
  let date = new Date();
  let timeStr = `${format(date.getHours())}:${format(date.getMinutes())}:${format(date.getSeconds())}`;
  timer.update(timeStr);
}, 1000);


// SUPPORTED COLORS

// new InfoTable('scoreboard0', 'lightBlue', 0, columns, 'lightBlue').show();
// new InfoTable('scoreboard1', 'blue', 0, columns, 'blue').show()
// new InfoTable('scoreboard2', 'red', 200, columns, 'red').show()
// new InfoTable('scoreboard3', 'yellow', 200, columns, 'yellow').show()
// new InfoTable('scoreboard4', '_red', 0, columns, '_red').show()
// new InfoTable('scoreboard5', '_blue', 0, columns, '_blue').show()
// new InfoTable('scoreboard6', '_yellow', 0, columns, '_yellow_on').show()
// new InfoTable('scoreboard7', '_green', 0, columns).show()

// let ua = 'АБВГДЕЄЖЗИІЇКЛМНОПРСТУФЧЦЧШЩЬЮЯ';
// let eng = 'abcdefghijklmnopqrstuvwxyz';

// // new InfoTable('scoreboard0', eng, 100, 6).createCharacter();
// new InfoTable('scoreboard7', '', time, columns).moveLeft(5);
// new InfoTable('scoreboard8', '1234567890', time, columns,
// ).show();
// new InfoTable('scoreboard10', ua, time, columns, '_red').setLanguage('ua').moveRight(4);


global.InfoTable = InfoTable;
