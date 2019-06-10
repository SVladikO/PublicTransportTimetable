'use strict';

let characters = require('./characters.json');

let log = console.log;
let colorCatalog = {
	green: {
		active: 'public/img/green_on.jpg',
		disabled: 'public/img/green_off.jpg'
	}
}
class InfoTable {
	constructor(rootClass, text = '', color = 'green', time = 200, columns = 54) {
		this.rootClass = rootClass;
		this.text = text;
		this.color = colorCatalog[color];
		this.time = time;
		this.columns = columns;
		this._rows = 7;
		this.createEmptyBoard();
	}

	createEmptyBoard() {
		let root = document.getElementsByClassName(this.rootClass)[0];
		root.style.position = 'relative';
		root.style.background = 'black';
		root.style.height = '180px';

		for (let j = 0; j < this.columns; j++) {
			for (let i = 0; i < this._rows; i++) {
				let img = document.createElement('img');
				img.src = this.color.disabled;
				img.style.width = '20px';
				img.style.height = '20px';
				img.style.position = 'absolute';
				img.style.top = `${25 * i}px`;
				img.style.left = `${25 * j}px`;
				root.appendChild(img);
			}
		}
	}

	convertText() {
		const sizeOneLetterAndSpace = 42;

		let text = this.text.toLowerCase().split('');
		let convertedText = [];

		text.forEach((symbol, index) => {
			// TODO: if (symbol === ' ') 0_0;
			// letter coordinates 
			let letterCoordinates = characters[symbol];
			let processedLetterCoordinates = letterCoordinates.map(number => index ? number + index * sizeOneLetterAndSpace : number);
			convertedText.push(...processedLetterCoordinates);

		});
		return convertedText;
	}

	show(counter) {
		let convertedText = this.convertText();
		// let intervalID = 
		// setInterval(() => {
		print.call(this, convertedText);
		// }, this.time);

		function print(preparedText) {
			let root = document.getElementsByClassName('scoreboard')[0];
			let images = root.getElementsByTagName('IMG');
			preparedText.forEach((value) => {
				images[value].src = this.color.active;
			});
		}

		function clear() { }
		// function print() {}
	}

	stop() { }

}

let infoTable = new InfoTable('scoreboard', 'Hello');
infoTable.show();
infoTable.stop();
