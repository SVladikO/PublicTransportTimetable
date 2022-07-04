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
    * [show()](#show)
    * [moveLeft()](#moveLeft)
    * [moveRight()](#moveRight)
    * [Customization](#Customization)

[//]: # (    * [createCharacter]&#40;#createCharacter&#41;)
6. [Contributing](#contributin4)
7. [Motivation](#motivation)

<h2 id='Install'>Install</h2>

```bash
npm install timetable-f
```

<h2 id='quickStart'>QuickStart</h2>

1. Example 1
```
new Timetable('#root').show(' YOUR TEXT ');
```
<img src="https://github.com/SVladikO/timetable-f/blob/master/assets/img/your_text.png?raw=true">
<br/>
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
<img src="https://github.com/SVladikO/timetable-f/blob/master/assets/img/timer.png?raw=true">

<p><a href='https://codepen.io/gaearon/pen/yzMaBd'> Try it on CodePen</a></p>



<h2 id='introdaction'>Introduction</h2>
<p>    
    From version 1.0.0 this package support next characters:
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

<h3 id='show'>show()</h3>
```
const table = new Timetable('.className');
table.show('your text');
```
We only show your text.

<h3 id='moveLeft'>moveLeft()</h3>

```bash
const table = new Timetable('.className');
table.moveLeft('your text');
```
In the above example text will move from right to left (by default one circle & with speed 500)

<h3 id='moveRight'>moveRight()</h3>

```bash
const table = new Timetable('className');
table.moveRight('your text', timeToRepeat, timeout);
```
In the above example text will move from left to right (by default one circle & speed 500)



<h3 id='Customization'>Customization</h3>
If you want to check default options you can call getDefault method.
```bash
new Timetable('.className').getDefault();
```
On current moment it's:

```aidl
    language = 'eng',
    // You can style your root through this field
    rootHeight = 30,
    rootWidth = 0,
    rootBackground = '#16300b',
    lampColorOn = '#9dd143',
    lampColorOff = '#1d5110',
    timeInterval = 500
```

If you want to change default parameters:
```bash
const timeToRepeat = 2; // optional =0
const timeout = 300; // optional =500

const table = new Timetable('.className');
table.moveLeft('your text', timeToRepeat, timeout);
```
You can clear it any time you want.

```bash
table.clear()
```



<h3>createCharacter</h3>
When you want to add some characters or maybe language
you can use next tool:

```bash
const Timetable = require('timetable-f');
Timetable.createCharacter('className');
```
You click on table and see coordinates in console.
Then copied into Character obj.


<h2>Contributing</h2>
Do you want to contribute to this module ? You are welcome!)

<h2>Motivation</h2>
I always loved timetable. Especially different colors with different data. That's some kind of magic)