<div align="center">
  <h1>_timetable</h1>
  <p>
  	_timetable is a module. The main purpose is to process text in timetable. <br>

    show(), moveLeft(), moveRight() 
  </p>
</div>

## Table of Contents

1. [Install](#install)
2. [Introduction](#introduction)
3. [Usage](#usage)
4. [Additional information](#customExample)

<h2>Install</h2>

```bash
npm install _timetable
```

<h2>Introduction</h2>
<p>
  	_timetable is a module. The main purpose is to process text in timetable. <br>

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

<p></p>

<h2>Usage</h2>
<h4>show() with default options:</h4>

```bash
const Timetable = require('_timetable');

// Be sure that div.className is exist in DOM
const timetable = new Timetable('className').init();
timetable.show('some text');
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
const Timetable = require('_timetable');

const options = { 
    height: 80, 
	  columns: 80,
	  color: 'red',
	  language: 'eng',
	  interval: 1000,
	  backgroundColor: 'black'
  };

const timetable = new Timetable('className', options).init();
timetable.show('ENG_TEXT');
```
<h4>moveLeft()</h4>

```bash
const Timetable = require('_timetable');

const text = 'ENG_TEXT';
const timeToRepeat = 2; // optional =0
const timeout = 1000; // optional =500

const timetable = new Timetable('className').init();
timetable.moveLeft(text, timeToRepeat, timeout);
```

<h4>moveRight()</h4>

```bash
const Timetable = require('_timetable');

const text = 'ENG_TEXT';
const timeToRepeat = 2; // optional =0
const timeout = 1000; // optional =500

const timetable = new Timetable('className').init();
timetable.moveRight(text, timeToRepeat, timeout);
```

<h4>getColumnsByText - calculate columns by custom text:</h4>

```bash
const Timetable = require('_timetable');
const text = "ENG_TEXT";
const options = {
  columns: Timetable.getColumnsByText(text, 'eng'),
};
 
const timetable = new Timetable('className', options).init();
timetable.show(text);
```
<h4>getColumnsFullWidth - calculate columns by div[className].width</h4>

```bash
const Timetable = require('_timetable');
const tableHeight = 70;
const options = {
  height: tableHeight,
  // tableHeight here is need because imageSize calculated from tableHeight
  columns: Timetable.getColumnsFullWidth(tableHeight, 'className')
};

const timetable = new Timetable('className', options).init();
timetable.moveLeft(0);
```

<h4>Create characters</h4>
When you want to add some characters or maybe language
you can use next tool:

```bash
const Timetable = require('_timetable');
new Timetable('character', { columns: 7 }).init().createCharacter();
```
You see timetable with 7 columns. You click on lamps and see coordinates in console.
Then copy them into Character obj.

<h2>Additional information</h2>
<h4>show(), moveLeft(), moveRight()  common features</h4>

All methods show(), moveLeft(), moveRight() delete previous text if they work with one object

```bash
const Timetable = require('_timetable');

const timetable = new Timetable('className').init();
timetable.show('some text');  
timetable.moveLeft('next text 1');  
timetable.moveRight('next text 2');  
timetable.show('next text 3'); 
timetable.clear();
```
<h4>Create timer</h4>

```bash
const Timetable = require('_timetable');
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