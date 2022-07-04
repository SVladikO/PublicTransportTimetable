<div align="center">
<a href="https://github.com/SVladikO/timetable-f">
    <img src="https://github.com/SVladikO/timetable-f/blob/develop/assets/img/icon.png?raw=true">
  </a>

  <h1>timetable-f</h1>
  <a href='https://coveralls.io/github/SVladikO/timetable-f?branch=master'><img src='https://coveralls.io/repos/github/SVladikO/timetable-f/badge.svg?branch=master' alt='Coverage Status' /></a>


   <p>The main purpose is to process text in timetable.</p>
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
npm i timetable-f
```
<h2 id='quickStart'>QuickStart</h2>
<h4>Example 1:</h4>

```
new Timetable('#root').show(' YOUR TEXT ');
```

<img src="https://github.com/SVladikO/timetable-f/blob/master/assets/img/your_text.png?raw=true">
<br/>
<p>
<a href='https://codepen.io/vlad-serhiychuk/pen/bGvVWdL' target="_blank"> Try it on CodePen</a>
</p>
<br>
<h4>Example 2 timer.</h4>

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

<p><a href='https://codepen.io/vlad-serhiychuk/pen/XWEmRXL' target="_blank"> Try it on CodePen</a></p>



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
<a href="https://github.com/SVladikO/timetable-f/blob/master/src/scripts/character.js" target="_blank">here</a>
</p>


<h2 id='api'># API</h2>

<h3 id='show'>## show()</h3>

```
const table = new Timetable('.className');
table.show('your text');
```

We only show your text.

<h3 id='moveLeft'>## moveLeft()</h3>

```bash
const table = new Timetable('.className');
table.moveLeft('your text');
```

In the above example text will move from right to left (by default one circle & with speed 500)

<h3 id='moveRight'>## moveRight()</h3>

```bash
const table = new Timetable('className');
table.moveRight('your text');
```

In the above example text will move from left to right (by default one circle & speed 500)


<h3 id='Customization'>## Customization</h3>


<h4>Check default values: </h4>

```
Timetable.getDefault();
```
<h4> Set your custom values: </h4>

```
const options = {
  'languageKey': 'eng',
  // You can style your root through this field
  'rootHeight': 30,
  'rootWidth': 0,
  'rootBackground': '#16300b',
  'lampColorOn': '#9dd143',
  'lampColorOff': '#1d5110',
  'timeInterval': 500
};
const t = new Timetable('#root', options);
```

<h4>Change language to 'ua'</h4>

```
    const table = new Timetable('.className', {languageKey = 'ua'})
```

<h4>Change colors:</h4>

```
   const options = {
       rootBackground = 'black',
       lampColorOn = 'red',
       lampColorOff = 'blue',
   };
    
    const table = new Timetable('.className', options)
    table.show('your text');
```
<h4>If you want to change default parameters for moveLeft() or moveRight():</h4>

```bash
const timeToRepeat = 2; // optional =0
const timeout = 300; // optional =500

const table = new Timetable('.className');
table.moveLeft('your text', timeToRepeat, timeout);
```

<h4>You can clear it any time you want.</h4>

```bash
table.clear()
```

[//]: # ()
[//]: # (<h3>createCharacter</h3>)

[//]: # (When you want to add some characters or maybe language)

[//]: # (you can use next tool:)

[//]: # ()
[//]: # (```bash)

[//]: # (const Timetable = require&#40;'timetable-f'&#41;;)

[//]: # (Timetable.createCharacter&#40;'className'&#41;;)

[//]: # (```)

You click on table and see coordinates in console.
Then copied into Character obj.

<h2>Contributing</h2>
Do you want to contribute to this module ? You are welcome!)

<h2>Motivation</h2>
I always loved timetable. Especially different colors with different data. That's some kind of magic)