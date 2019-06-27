<div align="center">
<a href="https://github.com/SVladikO/timetable-f">
    <img src="https://github.com/SVladikO/timetable-f/blob/develop/dev/img/timetable-f.png">
  </a>
  
  <h1>timetable-f</h1>
  <a href='https://coveralls.io/github/SVladikO/_timetable?branch=master'><img src='https://coveralls.io/repos/github/SVladikO/_timetable/badge.svg?branch=master' alt='Coverage Status' /></a>

  <p>
  	timetable-f is a module. The main purpose is to process text in timetable. <br>

    show(), moveLeft(), moveRight() 
  </p>
</div>

## Table of Contents

1. [Install](#install)
2. [Introduction](#introduction)
3. [Usage](#usage)
4. [Additional information](#customExample)
5. [Contributing](#contributing)

<h2>Install</h2>

```bash
npm install timetable-f
```

<h2>Introduction</h2>
<p>
  	timetable-f is a module. The main purpose is to process text in timetable. <br>

    show(), moveLeft(), moveRight()
</p>
<p>    
    This version 0.1.0 support next characters only in UpperCase:
</p>

```bash
{
  ua: 'АБВГДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ._-!:><=+/0123456789',
  eng: "ABCDEFGHIJKLMNOPQRSTUVWXYZ-.':?><+/=_!0123456789"
}
```

<div align="center">
  <img src="https://github.com/SVladikO/timetable-f/blob/develop/dev/img/supported_characters.png">
</div>

<h2>Usage</h2>
<h4>show() with default options:</h4>

```bash
const Timetable = require('timetable-f');

// Be sure that div.className is exist in DOM
const table = new Timetable('className').init();
table.show('text');
```

By default the second parameter in Timetable constructor set:
```bash
{ 
	height: 30,  
	columns: 40,
	color: 'chartreuse',
	language: 'eng',
	interval: 500,
	backgroundColor: 'black'
}
```
<h4>show() with custom options:</h4>

```bash
const Timetable = require('timetable-f');

const options = { 
  height: 80, 
	columns: 80,
	color: 'red',
	language: 'eng',
	interval: 1000,
	backgroundColor: 'black'
  };

const table = new Timetable('className', options).init();
table.show('ENG_TEXT');
```
<h4>moveLeft()</h4>

```bash
const Timetable = require('timetable-f');

const text = 'text';
const timeToRepeat = 2; // optional =0
const timeout = 300; // optional =500

const table = new Timetable('className').init();
table.moveLeft(text, timeToRepeat, timeout);
```

<h4>moveRight()</h4>

```bash
const Timetable = require('timetable-f');

const text = 'text';
const timeToRepeat = 2; // optional =0
const timeout = 300; // optional =500

const table = new Timetable('className').init();
table.moveRight(text, timeToRepeat, timeout);
```

<h4>getColumnsByText - calculate columns by custom text:</h4>

```bash
const Timetable = require('timetable-f');
const text = "text";
const options = {
  columns: Timetable.getColumnsByText(text, 'eng'),
};
 
const table = new Timetable('className', options).init();
table.show(text);
```
<h4>getColumnsFullWidth - calculate columns by div[className].width</h4>

```bash
const Timetable = require('timetable-f');
const tableHeight = 70;
const className = 'className';
const options = {
  height: tableHeight,
  // tableHeight here is need because imageSize calculated from tableHeight
  columns: Timetable.getColumnsFullWidth(tableHeight, className)
};
const table = new Timetable(className, options).init();
table.moveLeft('text');
```

<h4>Create characters</h4>
When you want to add some characters or maybe language
you can use next tool:

```bash
const Timetable = require('timetable-f');
Timetable.createCharacter('className');
```
You click on table and see coordinates in console.
Then copied into Character obj.

<h2>Additional information</h2>
<h4>show(), moveLeft(), moveRight()  common features</h4>

All methods show(), moveLeft(), moveRight() delete previous text if they work with one object

```bash
const Timetable = require('timetable-f');

const table = new Timetable('timer').init();
table.show('text 0');
table.moveLeft('text 1');
table.moveRight('text 2');
table.show('text 3');
```
<h4>Create timer</h4>

```bash
const Timetable = require('timetable-f');
// Be sure div[className] is in DOM
const timer = new Timetable('timer', { height: 80, color: '#00aaff' }).init();
const format = time => time < 10 ? '0' + time : time;

setInterval(() => {
  let date = new Date();
  const HOURS = format(date.getHours());
  const MINUTES = format(date.getMinutes());
  const SECONDS = format(date.getSeconds());
  timer.show(`${HOURS}:${MINUTES}:${SECONDS}`);
}, 1000);
```
<div align="center">
    <img src="https://github.com/SVladikO/timetable-f/blob/develop/dev/img/timertimetable-f.png">
</div>

<h2>Contributing</h2>
Do you want to contribute to this module ? You are welcome!)
