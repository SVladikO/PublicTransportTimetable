let InfoTable = require('./src/js/app');
let text = `Once your package.json file is created, create the file that will be loaded when your module is required. The default name for this file is index.js.In the file, add a function as a property of the exports object. This will make the function available to other code:exports.printMsg = function() {
  console.log("This is a message from the demo package");Once your package.json file is created, create the file that will be loaded when your module is required. The default name for this file is index.js.In the file, add a function as a property of the exports object. This will make the function available to other code:exports.printMsg = function() {
  console.log("This is a message from the demo package");Once your package.json file is created, create the file that will be loaded when your module is required. The default name for this file is index.js.In the file, add a function as a property of the exports object. This will make the function available to other code:exports.printMsg = function() {
  console.log("This is a message from the demo package");Once your package.json file is created, create the file that will be loaded when your module is required. The default name for this file is index.js.In the file, add a function as a property of the exports object. This will make the function available to other code:exports.printMsg = function() {
  console.log("This is a message from the demo package");
}`;

let numbers = '0123456789';
console.log(text.length);
let table = new InfoTable('scoreboard0', numbers, 100, 20);
console.log(table.convertedText.length);
table.moveLeft(250);
new InfoTable('scoreboard1', text, 0, 15).moveRight(5);
new InfoTable('scoreboard2', text, 0, 15).moveLeft(5);
new InfoTable('scoreboard3', text, 0, 15).moveRight(5);
new InfoTable('scoreboard4', text, 0, 15).moveLeft(5);
new InfoTable('scoreboard5', text, 0, 15).moveRight(5);
new InfoTable('scoreboard6', text, 200, 15).moveLeft(5);
new InfoTable('scoreboard7', text, 0, 15).moveRight(5);
new InfoTable('scoreboard8', text, 0, 15).moveLeft(5);
new InfoTable('scoreboard9', text, 0, 15).moveRight(5);
new InfoTable('scoreboard10', text, 0, 15).moveLeft(5);

global.InfoTable = InfoTable;
