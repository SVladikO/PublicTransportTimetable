<div align="center">
<a href="https://github.com/SVladikO/timetable-f">
    <img src="https://github.com/SVladikO/timetable-f/blob/master/assets/img/icon.png">
  </a>
  
  <h1>timetable-f</h1>
  <a href='https://coveralls.io/github/SVladikO/timetable-f?branch=master'><img src='https://coveralls.io/repos/github/SVladikO/timetable-f/badge.svg?branch=master' alt='Coverage Status' /></a>


  <p>
  	timetable-f is a module. The main purpose is to process text in timetable. <br>

    show(), moveLeft(), moveRight() 
  </p>
</div>

## Table of Contents

1. [Install](#install)
2. [QuickStart](#quickStart)
3. [Introduction](#introduction)
4. [Usage](#usage)
    * [PrepareAssets](#PrepareAssets)
    * [show](#show)
    * [moveLeft](#moveLeft)
    * [moveRight](#moveRight)
    * [getColumnsByText](#getColumnsByText)
    * [getColumnsFullWidth](#getColumnsFullWidth)
    * [createCharacter](#createCharacter)
    * [clear](#clear)
    * [AnIdeaToUse](#anIdeaToUse)
5. [Contributing](#contributin4)
6. [Motivation](#motivation)

<h2 id='Install'>Install</h2>

```bash
npm install timetable-f
```

<h2 id='quickStart'>QuickStart</h2>

1. Let's show some text.
```
new Timetable('#root').init().show(' SEEMS IT WORKS ?');
```
<a href='https://codepen.io/gaearon/pen/yzMaBd'> Try it on CodePen</a>

2. Let's make timer.
```
new Timetable('#root').init().show(' SEEMS IT WORKS ?');
```
<a href='https://codepen.io/gaearon/pen/yzMaBd'> Try it on CodePen</a>


<h2 id='introduction'>Introduction</h2>
<p>
  	The main purpose is to process text in timetable. <br>

    show(), moveLeft(), moveRight()
</p>
<p>    
    This version 1.0.0 support next characters only in UpperCase:
</p>

```bash
{
  ua: 'АБВГДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ._-!:><=+/0123456789',
  eng: "ABCDEFGHIJKLMNOPQRSTUVWXYZ-.':?><+/=_!0123456789"
}
```

<div align="center">
  <img src="https://github.com/SVladikO/timetable-f/blob/master/assets/img/supported_characters.png">
</div>

<h2>Usage</h2>
<h4>PrepareAssets</h4>
<p>!!! Important !!!</p>
<p>Download image from 
   <a href='https://github.com/SVladikO/timetable-f/blob/master/assets/img/off.png'> here</a>.
   <br>
   By default "timetable-f" try to get image from 'public/img/off.png'. 
</p>

You can set your own path.

```bash
const Timetable = require('timetable-f');
Timetable.setImage('yourPath/off.png');
```

<h4>show</h4>

 With default options:

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

With custom options:

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
<h4>moveLeft</h4>

```bash
const Timetable = require('timetable-f');

const text = 'text';
const timeToRepeat = 2; // optional =0
const timeout = 300; // optional =500

const table = new Timetable('className').init();
table.moveLeft(text, timeToRepeat, timeout);
```

<h4>moveRight</h4>

```bash
const Timetable = require('timetable-f');

const text = 'text';
const timeToRepeat = 2; // optional =0
const timeout = 300; // optional =500

const table = new Timetable('className').init();
table.moveRight(text, timeToRepeat, timeout);
```

<h4>getColumnsByText</h4>
 <p>Calculate columns by custom text</p>

```bash
const Timetable = require('timetable-f');
const text = "text";
const options = {
  columns: Timetable.getColumnsByText(text, 'eng'),
};
 
const table = new Timetable('className', options).init();
table.show(text);
```
<h4>getColumnsFullWidth</h4>
<p> Calculate columns by div.className.width:</p>

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
table.show('text');
```

<h4>createCharacter</h4>
When you want to add some characters or maybe language
you can use next tool:

```bash
const Timetable = require('timetable-f');
Timetable.createCharacter('className');
```
You click on table and see coordinates in console.
Then copied into Character obj.

<h4>clear</h4>

You can clear table.
All methods show(), moveLeft(), moveRight() delete previous text if they work with one object

```bash
const Timetable = require('timetable-f');

const table = new Timetable('className').init();
table.show('text 0');
table.clear();
table.moveLeft('text 1');
table.moveRight('text 2');
table.show('text 3'); // show 'text 3'
```

<h4>AnIdeaToUse</h4>

```bash
const Timetable = require('timetable-f');
// Be sure div.className is in DOM
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
    <img src="https://github.com/SVladikO/timetable-f/blob/master/assets/img/timer_timetable.png">
</div>

<h2>Contributing</h2>
Do you want to contribute to this module ? You are welcome!)

<h2>Motivation</h2>
I always loved timetable. Especially different colors with different data. That's some kind of magic)