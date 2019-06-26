
  <h1>_timetable</h1>
  <p>
  	_timetable is a module. The main purpose is to show/moveLeft/moveRight text in timetable.
  </p>
<!-- </div> -->

## Table of Contents

1. [Install](#install)
2. [Introduction](#introduction)
3. [Usage](#usage)

<h2 align="center">Install</h2>

```bash
npm install _timetable
```

<h2 align="center">Introduction</h2>
	_timetable is a module. The main purpose is to show/moveLeft/moveRight text in timetable.

	<p>This version 0.1.0 support next characters (in Upper registry):
		<br>
		```bash
		{
		  ua: 'АБВГДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ._-!:><=+/0123456789',
		  eng: "ABCDEFGHIJKLMNOPQRSTUVWXYZ-.':?><+/=_!0123456789"
		}
		```
	</p>

<h2 align="usage">Usage</h2>

1. Create Timetable with default setting:

```bash
let Timetable = require('timetable');

// Be sure that div.className is exist in DOM
let timetable = new Timetable('className').init();
timetable.show('some text');
```

By default the second parameter in constructor set:
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

2. Create Timetable with custom parameters:

```bash
 let options = {   // IT GIVES YOU:
    height: 80,    // - bigger text 
	columns: 80,   // - longer table
	color: 'red',  // - text color
	language: 'eng',// - list of characters eng/ua
	interval: 1000, // - timeout (needed for moveLeft/moveRight) 
	backgroundColor: 'black' // - timetable background
  };

  let timetable = new Timetable('className', options).init();
  timetable.show(ENG_CHARACTERS);
```

3. moveLeft
```bash
let timetable = new Timetable('className').init();

const text = 'someText';
const timeToRepeat = 2; // optional =0 from method
const timeout = 1000; // optional =500 from constructor

timetable.moveLeft(text, timeToRepeat, timeout);
```

4. moveRight:
```bash
let timetable = new Timetable('className').init();

const text = 'someText';
const timeToRepeat = 2; // optional =0 from method
const timeout = 1000; // optional =500 from constructor

timetable.moveRight(text, timeToRepeat, timeout);
```

5. getColumnsByText - calculate columns for custom text:
```bash
const text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ-.':?><+/=_!0123456789";

let options = {
  columns: Timetable.getColumnsByText(ENG_CHARACTERS, 'eng'),
};
 
let timetable = new Timetable('eng_char', options).init()
timetable.show(ENG_CHARACTERS);
```
