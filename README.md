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
2. [Introdaction](#introdaction)
4. [API](#api)
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

1. Example 1
```
new Timetable('#root').show(' YOUR TEXT ');
```
<a href='https://codepen.io/gaearon/pen/yzMaBd'> Try it on CodePen</a>

2. Example 2 timer.
```
  let timetable = new Timetable('#timer');
  let format = time => time < 10 ? '0' + time : time;

  setInterval(() => {
    let date = new Date();
    const HOURS = format(date.getHours());
    const MINUTES = format(date.getMinutes());
    const SECONDS = format(date.getSeconds());

    timetable.show(` ${HOURS}:${MINUTES}:${SECONDS}`);
  }, 1000);
```
<img src="https://github.com/SVladikO/timetable-f/blob/master/assets/img/timer_timetable.png?raw=true">

<p><a href='https://codepen.io/gaearon/pen/yzMaBd'> Try it on CodePen</a></p>



<h2 id='introdaction'>Introduction</h2>
<p>    
    This version 1.0.0 support next characters:
</p>

```bash
{
  ua: 'АБВГДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ._-!:><=+/0123456789',
  eng: "ABCDEFGHIJKLMNOPQRSTUVWXYZ-.':?><+/=_!0123456789"
}
```
<p>The main purpose is to process text in timetable.</p>
<img src="https://github.com/SVladikO/timetable-f/blob/master/assets/img/supported_characters.png?raw=true">

<p>
You can find alphabet implementation   
<a href="https://github.com/SVladikO/timetable-f/blob/master/src/scripts/character.js">here</a>
</p>


<h2 id='api'>API</h2>

<h4 id=''>show()</h4>

 With default options:

```
const table = new Timetable('.className');
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

const table = new Timetable('className', options);
table.show('ENG_TEXT');
```
<h4>moveLeft()</h4>

```bash
const Timetable = require('timetable-f');

const text = 'text';
const timeToRepeat = 2; // optional =0
const timeout = 300; // optional =500

const table = new Timetable('className');
table.moveLeft(text, timeToRepeat, timeout);
```

<h4>moveRight()</h4>

```bash
const Timetable = require('timetable-f');

const text = 'text';
const timeToRepeat = 2; // optional =0
const timeout = 300; // optional =500

const table = new Timetable('className');
table.moveRight(text, timeToRepeat, timeout);
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

<h4>clear()</h4>
You can clear table.
All methods show(), moveLeft(), moveRight() delete previous text if they work with one object

```bash
const Timetable = require('timetable-f');

const table = new Timetable('className');
table.show('text 0');
table.clear();
table.moveLeft('text 1');
table.moveRight('text 2');
table.show('text 3'); // show 'text 3'
```

<h2>Contributing</h2>
Do you want to contribute to this module ? You are welcome!)

<h2>Motivation</h2>
I always loved timetable. Especially different colors with different data. That's some kind of magic)